"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const Workbook = __importStar(require("exceljs"));
let ReportsService = class ReportsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getBalanceSheet() {
        const accounts = await this.prisma.account.findMany({
            where: { isActive: true }
        });
        const fundCategories = await this.prisma.fundCategory.findMany({
            where: { isActive: true }
        });
        const fundBalances = [];
        let totalAssets = 0;
        for (const acc of accounts) {
            totalAssets += Number(acc.balance);
        }
        for (const fund of fundCategories) {
            const incomeSum = await this.prisma.transaction.aggregate({
                where: { fundCategoryId: fund.id, type: 'INCOME' },
                _sum: { amount: true }
            });
            const expenseSum = await this.prisma.transaction.aggregate({
                where: { fundCategoryId: fund.id, type: 'EXPENSE' },
                _sum: { amount: true }
            });
            const totalIncome = Number(incomeSum._sum.amount || 0);
            const totalExpense = Number(expenseSum._sum.amount || 0);
            const balance = totalIncome - totalExpense;
            fundBalances.push({
                id: fund.id,
                name: fund.name,
                code: fund.code,
                fundType: fund.fundType,
                totalIncome,
                totalExpense,
                balance
            });
        }
        return {
            assets: accounts.map(a => ({
                id: a.id,
                name: a.name,
                type: a.type,
                bankName: a.bankName,
                accountNumber: a.accountNumber,
                balance: Number(a.balance)
            })),
            totalAssets,
            fundBalances,
            totalEquity: totalAssets
        };
    }
    async getActivityReport(month, year) {
        const where = {};
        if (month && year) {
            const m = parseInt(month);
            const y = parseInt(year);
            const startDate = new Date(y, m - 1, 1);
            const endDate = new Date(y, m, 0, 23, 59, 59);
            where.date = { gte: startDate, lte: endDate };
        }
        const fundCategories = await this.prisma.fundCategory.findMany({ where: { isActive: true } });
        const reportData = [];
        let grandIncome = 0;
        let grandExpense = 0;
        for (const fund of fundCategories) {
            const fundWhere = { ...where, fundCategoryId: fund.id };
            const incomeTransactions = await this.prisma.transaction.findMany({
                where: { ...fundWhere, type: 'INCOME' },
                select: { id: true, date: true, amount: true, description: true, category: true }
            });
            const expenseTransactions = await this.prisma.transaction.findMany({
                where: { ...fundWhere, type: 'EXPENSE' },
                select: { id: true, date: true, amount: true, description: true, category: true }
            });
            const totalIncome = incomeTransactions.reduce((acc, t) => acc + Number(t.amount), 0);
            const totalExpense = expenseTransactions.reduce((acc, t) => acc + Number(t.amount), 0);
            grandIncome += totalIncome;
            grandExpense += totalExpense;
            reportData.push({
                fundCategory: fund,
                totalIncome,
                totalExpense,
                netSurplus: totalIncome - totalExpense,
                incomeTransactions,
                expenseTransactions
            });
        }
        return {
            period: { month, year },
            categories: reportData,
            summary: {
                totalIncome: grandIncome,
                totalExpense: grandExpense,
                netSurplus: grandIncome - grandExpense
            }
        };
    }
    async getJournal(month, year) {
        const where = {};
        if (month && year) {
            const m = parseInt(month);
            const y = parseInt(year);
            const startDate = new Date(y, m - 1, 1);
            const endDate = new Date(y, m, 0, 23, 59, 59);
            where.date = { gte: startDate, lte: endDate };
        }
        return this.prisma.journalEntry.findMany({
            where,
            include: {
                items: {
                    include: { chart: true }
                }
            },
            orderBy: { date: 'desc' }
        });
    }
    async generateExcelReport(res, month, year) {
        const activity = await this.getActivityReport(month, year);
        const balanceSheet = await this.getBalanceSheet();
        const journals = await this.getJournal(month, year);
        const workbook = new Workbook.Workbook();
        workbook.creator = 'Kas Langgar';
        const sheet1 = workbook.addWorksheet('Posisi Keuangan & Ringkasan');
        sheet1.columns = [
            { header: 'Kategori / Rekening', key: 'name', width: 35 },
            { header: 'Jenis / Tipe', key: 'type', width: 25 },
            { header: 'Pemasukan (Rp)', key: 'income', width: 20 },
            { header: 'Pengeluaran (Rp)', key: 'expense', width: 20 },
            { header: 'Saldo Akhir (Rp)', key: 'balance', width: 22 }
        ];
        sheet1.addRow({ name: '=== ASET (REKENING & KAS) ===', type: '', income: '', expense: '', balance: '' });
        for (const asset of balanceSheet.assets) {
            sheet1.addRow({
                name: asset.name,
                type: asset.type === 'CASH' ? 'Kas Tunai' : `Bank (${asset.bankName || ''})`,
                income: '-',
                expense: '-',
                balance: asset.balance
            });
        }
        sheet1.addRow({ name: 'TOTAL ASET', type: '', income: '', expense: '', balance: balanceSheet.totalAssets });
        sheet1.addRow({});
        sheet1.addRow({ name: '=== SALDO PER POS DANA ===', type: '', income: '', expense: '', balance: '' });
        for (const fund of balanceSheet.fundBalances) {
            sheet1.addRow({
                name: fund.name,
                type: fund.fundType,
                income: fund.totalIncome,
                expense: fund.totalExpense,
                balance: fund.balance
            });
        }
        const sheet2 = workbook.addWorksheet('Jurnal Umum');
        sheet2.columns = [
            { header: 'No. Jurnal', key: 'entryNumber', width: 25 },
            { header: 'Tanggal', key: 'date', width: 15 },
            { header: 'Keterangan', key: 'description', width: 35 },
            { header: 'Kode Akun', key: 'code', width: 15 },
            { header: 'Nama Akun', key: 'chartName', width: 30 },
            { header: 'Debet (Rp)', key: 'debit', width: 20 },
            { header: 'Kredit (Rp)', key: 'credit', width: 20 }
        ];
        for (const j of journals) {
            for (const item of j.items) {
                sheet2.addRow({
                    entryNumber: j.entryNumber,
                    date: new Date(j.date).toLocaleDateString('id-ID'),
                    description: j.description,
                    code: item.chart.code,
                    chartName: item.chart.name,
                    debit: Number(item.debit),
                    credit: Number(item.credit)
                });
            }
        }
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=Laporan_Keuangan_Langgar_${year || 'Semua'}_${month || 'Semua'}.xlsx`);
        await workbook.xlsx.write(res);
        res.end();
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportsService);
//# sourceMappingURL=reports.service.js.map