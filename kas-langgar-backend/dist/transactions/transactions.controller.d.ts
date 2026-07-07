import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionQueryDto } from './dto/transaction-query.dto';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    create(createTransactionDto: CreateTransactionDto, user: any): Promise<import("./dto/transaction-response.dto").TransactionResponseDto>;
    findAll(query: TransactionQueryDto): Promise<{
        data: import("./dto/transaction-response.dto").TransactionResponseDto[];
        pagination: {
            total: number;
            skip: number;
            take: number;
            pages: number;
        };
    }>;
    getMonthlySummary(month: number, year: number): Promise<{
        month: number;
        year: number;
        income: number;
        expense: number;
        balance: number;
        totalTransactions: number;
        transactions: import("./dto/transaction-response.dto").TransactionResponseDto[];
    }>;
    findOne(id: number): Promise<import("./dto/transaction-response.dto").TransactionResponseDto>;
    update(id: number, updateTransactionDto: UpdateTransactionDto, user: any): Promise<import("./dto/transaction-response.dto").TransactionResponseDto>;
    remove(id: number, user: any): Promise<void>;
}
