import { TransactionsService } from '../transactions/transactions.service';
import { TransactionQueryDto } from '../transactions/dto/transaction-query.dto';
export declare class PublicController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    getPublicTransactions(query: TransactionQueryDto): Promise<{
        data: import("../transactions/dto/transaction-response.dto").TransactionResponseDto[];
        pagination: {
            total: number;
            skip: number;
            take: number;
            pages: number;
        };
    }>;
    getAvailableDates(): Promise<{
        year: number;
        month: number;
    }[]>;
    getPublicMonthlySummary(month: number, year: number): Promise<{
        month: number;
        year: number;
        income: number;
        expense: number;
        balance: number;
        totalTransactions: number;
        transactions: import("../transactions/dto/transaction-response.dto").TransactionResponseDto[];
    }>;
}
