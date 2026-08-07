import { PrismaService } from '../prisma/prisma.service';
import { AccountType } from '@prisma/client';
export declare class AccountsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        name: string;
        id: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.AccountType;
        accountNumber: string | null;
        bankName: string | null;
        balance: import("@prisma/client/runtime/library").Decimal;
        isDefault: boolean;
    }[]>;
    findFundCategories(): Promise<{
        name: string;
        id: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        code: string;
        fundType: import(".prisma/client").$Enums.FundType;
    }[]>;
    findCharts(): Promise<{
        name: string;
        id: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.ChartType;
        description: string | null;
        code: string;
    }[]>;
    create(data: {
        name: string;
        type: AccountType;
        accountNumber?: string;
        bankName?: string;
        balance?: number;
    }): Promise<{
        name: string;
        id: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.AccountType;
        accountNumber: string | null;
        bankName: string | null;
        balance: import("@prisma/client/runtime/library").Decimal;
        isDefault: boolean;
    }>;
    transfer(data: {
        sourceAccountId: number;
        targetAccountId: number;
        amount: number;
        description?: string;
        date: string;
    }, userId: number): Promise<{
        sourceAccount: {
            name: string;
            id: number;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            type: import(".prisma/client").$Enums.AccountType;
            accountNumber: string | null;
            bankName: string | null;
            balance: import("@prisma/client/runtime/library").Decimal;
            isDefault: boolean;
        };
        targetAccount: {
            name: string;
            id: number;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            type: import(".prisma/client").$Enums.AccountType;
            accountNumber: string | null;
            bankName: string | null;
            balance: import("@prisma/client/runtime/library").Decimal;
            isDefault: boolean;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        amount: import("@prisma/client/runtime/library").Decimal;
        description: string | null;
        journalEntryId: number | null;
        createdBy: number;
        sourceAccountId: number;
        targetAccountId: number;
    }>;
    findAllTransfers(): Promise<({
        user: {
            name: string;
            id: number;
        };
        sourceAccount: {
            name: string;
            id: number;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            type: import(".prisma/client").$Enums.AccountType;
            accountNumber: string | null;
            bankName: string | null;
            balance: import("@prisma/client/runtime/library").Decimal;
            isDefault: boolean;
        };
        targetAccount: {
            name: string;
            id: number;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            type: import(".prisma/client").$Enums.AccountType;
            accountNumber: string | null;
            bankName: string | null;
            balance: import("@prisma/client/runtime/library").Decimal;
            isDefault: boolean;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        amount: import("@prisma/client/runtime/library").Decimal;
        description: string | null;
        journalEntryId: number | null;
        createdBy: number;
        sourceAccountId: number;
        targetAccountId: number;
    })[]>;
}
