import { TransactionType } from '@prisma/client';
export declare class TransactionQueryDto {
    month?: string;
    year?: string;
    type?: TransactionType;
    skip?: string;
    take?: string;
}
