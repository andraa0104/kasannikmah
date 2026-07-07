import { TransactionType } from '@prisma/client';
export declare class UpdateTransactionDto {
    date?: string;
    type?: TransactionType;
    amount?: number;
    description?: string;
    category?: string;
}
