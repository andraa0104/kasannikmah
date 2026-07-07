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
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TransactionsService = class TransactionsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTransactionDto, userId) {
        const { date, type, amount, description, category } = createTransactionDto;
        const user = await this.prisma.user.findUnique({
            where: { id: userId }
        });
        if (!user) {
            throw new common_1.BadRequestException('User tidak ditemukan');
        }
        const transaction = await this.prisma.transaction.create({
            data: {
                date: new Date(date),
                type,
                amount: parseFloat(amount.toString()),
                description,
                category,
                createdBy: userId
            },
            include: {
                user: {
                    select: { id: true, name: true, username: true }
                }
            }
        });
        return this.toTransactionResponseDto(transaction);
    }
    async findAll(query) {
        const { month, year, type, skip = '0', take = '10' } = query;
        const where = {};
        if (month && year) {
            const monthNum = parseInt(month);
            const yearNum = parseInt(year);
            if (monthNum < 1 || monthNum > 12) {
                throw new common_1.BadRequestException('Month harus antara 1-12');
            }
            const startDate = new Date(yearNum, monthNum - 1, 1);
            const endDate = new Date(yearNum, monthNum, 0, 23, 59, 59);
            where.date = {
                gte: startDate,
                lte: endDate
            };
        }
        if (type) {
            where.type = type;
        }
        const total = await this.prisma.transaction.count({ where });
        const transactions = await this.prisma.transaction.findMany({
            where,
            include: {
                user: {
                    select: { id: true, name: true, username: true }
                }
            },
            orderBy: { date: 'desc' },
            skip: parseInt(skip),
            take: parseInt(take)
        });
        return {
            data: transactions.map(t => this.toTransactionResponseDto(t)),
            pagination: {
                total,
                skip: parseInt(skip),
                take: parseInt(take),
                pages: Math.ceil(total / parseInt(take))
            }
        };
    }
    async findOne(id) {
        const transaction = await this.prisma.transaction.findUnique({
            where: { id },
            include: {
                user: {
                    select: { id: true, name: true, username: true }
                }
            }
        });
        if (!transaction) {
            throw new common_1.NotFoundException('Transaksi tidak ditemukan');
        }
        return this.toTransactionResponseDto(transaction);
    }
    async update(id, updateTransactionDto, userId, userRole) {
        const transaction = await this.prisma.transaction.findUnique({
            where: { id }
        });
        if (!transaction) {
            throw new common_1.NotFoundException('Transaksi tidak ditemukan');
        }
        if (transaction.createdBy !== userId && userRole !== 'ADMIN') {
            throw new common_1.ForbiddenException('Anda tidak bisa update transaksi orang lain');
        }
        const updated = await this.prisma.transaction.update({
            where: { id },
            data: {
                ...updateTransactionDto,
                date: updateTransactionDto.date ? new Date(updateTransactionDto.date) : undefined,
                amount: updateTransactionDto.amount
                    ? parseFloat(updateTransactionDto.amount.toString())
                    : undefined
            },
            include: {
                user: {
                    select: { id: true, name: true, username: true }
                }
            }
        });
        return this.toTransactionResponseDto(updated);
    }
    async remove(id, userId, userRole) {
        const transaction = await this.prisma.transaction.findUnique({
            where: { id }
        });
        if (!transaction) {
            throw new common_1.NotFoundException('Transaksi tidak ditemukan');
        }
        if (transaction.createdBy !== userId && userRole !== 'ADMIN') {
            throw new common_1.ForbiddenException('Anda tidak bisa delete transaksi orang lain');
        }
        await this.prisma.transaction.delete({
            where: { id }
        });
    }
    async getMonthlySummary(month, year) {
        if (month < 1 || month > 12) {
            throw new common_1.BadRequestException('Month harus antara 1-12');
        }
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0, 23, 59, 59);
        const transactions = await this.prisma.transaction.findMany({
            where: {
                date: {
                    gte: startDate,
                    lte: endDate
                }
            },
            include: {
                user: {
                    select: { id: true, name: true }
                }
            },
            orderBy: { date: 'asc' }
        });
        const income = transactions
            .filter(t => t.type === 'INCOME')
            .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);
        const expense = transactions
            .filter(t => t.type === 'EXPENSE')
            .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);
        const balance = income - expense;
        return {
            month,
            year,
            income,
            expense,
            balance,
            totalTransactions: transactions.length,
            transactions: transactions.map(t => this.toTransactionResponseDto(t))
        };
    }
    toTransactionResponseDto(transaction) {
        return {
            id: transaction.id,
            date: transaction.date,
            type: transaction.type,
            amount: parseFloat(transaction.amount.toString()),
            description: transaction.description,
            category: transaction.category,
            createdBy: transaction.createdBy,
            createdAt: transaction.createdAt,
            updatedAt: transaction.updatedAt,
            user: transaction.user
        };
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map