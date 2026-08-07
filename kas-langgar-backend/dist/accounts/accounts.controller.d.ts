import { AccountsService } from './accounts.service';
export declare class AccountsController {
    private readonly accountsService;
    constructor(accountsService: AccountsService);
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
    create(body: any): Promise<{
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
    transfer(body: any, req: any): Promise<{
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
}
