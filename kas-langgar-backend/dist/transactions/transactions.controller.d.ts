import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionQueryDto } from './dto/transaction-query.dto';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    uploadProof(file: any): {
        url: string;
    };
    create(createTransactionDto: CreateTransactionDto, user: any): Promise<{
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
    update(id: number, updateTransactionDto: UpdateTransactionDto, user: any): Promise<{
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
    remove(id: number, user: any): Promise<void>;
}
