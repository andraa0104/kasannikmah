import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionQueryDto } from './dto/transaction-query.dto';
export declare class TransactionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTransactionDto: CreateTransactionDto, userId: number): Promise<{
        id: any;
        date: any;
        type: any;
        amount: number;
        description: any;
        category: any;
        accountId: any;
        fundCategoryId: any;
        attachmentUrl: any;
        createdBy: any;
        createdAt: any;
        updatedAt: any;
        user: any;
        account: any;
        fundCategory: any;
    }>;
    findAll(query: TransactionQueryDto): Promise<{
        data: {
            id: any;
            date: any;
            type: any;
            amount: number;
            description: any;
            category: any;
            accountId: any;
            fundCategoryId: any;
            attachmentUrl: any;
            createdBy: any;
            createdAt: any;
            updatedAt: any;
            user: any;
            account: any;
            fundCategory: any;
        }[];
        pagination: {
            total: number;
            skip: number;
            take: number;
            pages: number;
        };
    }>;
    findOne(id: number): Promise<{
        id: any;
        date: any;
        type: any;
        amount: number;
        description: any;
        category: any;
        accountId: any;
        fundCategoryId: any;
        attachmentUrl: any;
        createdBy: any;
        createdAt: any;
        updatedAt: any;
        user: any;
        account: any;
        fundCategory: any;
    }>;
    update(id: number, updateTransactionDto: UpdateTransactionDto, userId: number, userRole: string): Promise<{
        id: any;
        date: any;
        type: any;
        amount: number;
        description: any;
        category: any;
        accountId: any;
        fundCategoryId: any;
        attachmentUrl: any;
        createdBy: any;
        createdAt: any;
        updatedAt: any;
        user: any;
        account: any;
        fundCategory: any;
    }>;
    remove(id: number, userId: number, userRole: string): Promise<void>;
    getMonthlySummary(month: number, year: number): Promise<{
        month: number;
        year: number;
        income: number;
        expense: number;
        balance: number;
        totalTransactions: number;
        transactions: {
            id: any;
            date: any;
            type: any;
            amount: number;
            description: any;
            category: any;
            accountId: any;
            fundCategoryId: any;
            attachmentUrl: any;
            createdBy: any;
            createdAt: any;
            updatedAt: any;
            user: any;
            account: any;
            fundCategory: any;
        }[];
    }>;
    getAvailableDates(): Promise<{
        year: number;
        month: number;
    }[]>;
    private toTransactionResponseDto;
}
