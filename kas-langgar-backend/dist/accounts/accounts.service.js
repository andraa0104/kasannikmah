"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let AccountsService = class AccountsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.account.findMany({
            where: { isActive: true },
            orderBy: { isDefault: 'desc' }
        });
    }
    async findFundCategories() {
        return this.prisma.fundCategory.findMany({
            where: { isActive: true },
            orderBy: { id: 'asc' }
        });
    }
    async findCharts() {
        return this.prisma.accountChart.findMany({
            where: { isActive: true },
            orderBy: { code: 'asc' }
        });
    }
    async create(data) {
        const existing = await this.prisma.account.findFirst({
            where: { name: data.name, isActive: true }
        });
        if (existing) {
            throw new common_1.BadRequestException('Nama rekening/kas sudah ada');
        }
        return this.prisma.account.create({
            data: {
                name: data.name,
                type: data.type || client_1.AccountType.CASH,
                accountNumber: data.accountNumber,
                bankName: data.bankName,
                balance: data.balance || 0
            }
        });
    }
    async transfer(data, userId) {
        const { sourceAccountId, targetAccountId, amount, description, date } = data;
        if (sourceAccountId === targetAccountId) {
            throw new common_1.BadRequestException('Rekening asal dan tujuan tidak boleh sama');
        }
        if (amount <= 0) {
            throw new common_1.BadRequestException('Jumlah transfer harus lebih dari 0');
        }
        const source = await this.prisma.account.findUnique({ where: { id: sourceAccountId } });
        const target = await this.prisma.account.findUnique({ where: { id: targetAccountId } });
        if (!source || !target) {
            throw new common_1.NotFoundException('Rekening asal atau tujuan tidak ditemukan');
        }
        const transferDate = date ? new Date(date) : new Date();
        return this.prisma.$transaction(async (tx) => {
            const entryCount = await tx.journalEntry.count();
            const entryNumber = `JRN-TRF-${Date.now()}-${entryCount + 1}`;
            const assetSourceChart = await tx.accountChart.findFirst({ where: { name: { contains: source.name } } }) ||
                await tx.accountChart.findFirst({ where: { code: '101' } });
            const assetTargetChart = await tx.accountChart.findFirst({ where: { name: { contains: target.name } } }) ||
                await tx.accountChart.findFirst({ where: { code: '102' } });
            const targetChartId = assetTargetChart ? assetTargetChart.id : 1;
            const sourceChartId = assetSourceChart ? assetSourceChart.id : 1;
            const journalEntry = await tx.journalEntry.create({
                data: {
                    entryNumber,
                    date: transferDate,
                    description: description || `Transfer dana dari ${source.name} ke ${target.name}`,
                    refType: 'TRANSFER',
                    items: {
                        create: [
                            { chartId: targetChartId, debit: amount, credit: 0 },
                            { chartId: sourceChartId, debit: 0, credit: amount }
                        ]
                    }
                }
            });
            const transferRecord = await tx.accountTransfer.create({
                data: {
                    date: transferDate,
                    sourceAccountId,
                    targetAccountId,
                    amount,
                    description,
                    journalEntryId: journalEntry.id,
                    createdBy: userId
                },
                include: {
                    sourceAccount: true,
                    targetAccount: true
                }
            });
            await tx.account.update({
                where: { id: sourceAccountId },
                data: { balance: { decrement: amount } }
            });
            await tx.account.update({
                where: { id: targetAccountId },
                data: { balance: { increment: amount } }
            });
            return transferRecord;
        });
    }
    async findAllTransfers() {
        return this.prisma.accountTransfer.findMany({
            include: {
                sourceAccount: true,
                targetAccount: true,
                user: { select: { id: true, name: true } }
            },
            orderBy: { date: 'desc' }
        });
    }
};
exports.AccountsService = AccountsService;
exports.AccountsService = AccountsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AccountsService);
//# sourceMappingURL=accounts.service.js.map