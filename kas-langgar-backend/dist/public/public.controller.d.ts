import { TransactionsService } from '../transactions/transactions.service';
import { TransactionQueryDto } from '../transactions/dto/transaction-query.dto';
export declare class PublicController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    getPublicTransactions(query: TransactionQueryDto): Promise<{
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
}
