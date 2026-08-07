import { TransactionType } from '@prisma/client';
export declare class CreateTransactionDto {
    date: string;
    type: TransactionType;
    amount: number;
    description?: string;
    category: string;
    accountId?: number;
    fundCategoryId?: number;
    attachmentUrl?: string;
}
