import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionQueryDto } from './dto/transaction-query.dto';
import { TransactionResponseDto } from './dto/transaction-response.dto';
export declare class TransactionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTransactionDto: CreateTransactionDto, userId: number): Promise<TransactionResponseDto>;
    findAll(query: TransactionQueryDto): Promise<{
        data: TransactionResponseDto[];
        pagination: {
            total: number;
            skip: number;
            take: number;
            pages: number;
        };
    }>;
    findOne(id: number): Promise<TransactionResponseDto>;
    update(id: number, updateTransactionDto: UpdateTransactionDto, userId: number, userRole: string): Promise<TransactionResponseDto>;
    remove(id: number, userId: number, userRole: string): Promise<void>;
    getMonthlySummary(month: number, year: number): Promise<{
        month: number;
        year: number;
        income: number;
        expense: number;
        balance: number;
        totalTransactions: number;
        transactions: TransactionResponseDto[];
    }>;
    private toTransactionResponseDto;
}
