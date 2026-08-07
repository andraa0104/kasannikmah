import { PrismaService } from '../prisma/prisma.service';
export declare class ReportsService {
    private prisma;
    constructor(prisma: PrismaService);
    getBalanceSheet(): Promise<{
        assets: {
            id: number;
            name: string;
            type: import(".prisma/client").$Enums.AccountType;
            bankName: string | null;
            accountNumber: string | null;
            balance: number;
        }[];
        totalAssets: number;
        fundBalances: any[];
        totalEquity: number;
    }>;
    getActivityReport(month?: string, year?: string): Promise<{
        period: {
            month: string | undefined;
            year: string | undefined;
        };
        categories: any[];
        summary: {
            totalIncome: number;
            totalExpense: number;
            netSurplus: number;
        };
    }>;
    getJournal(month?: string, year?: string): Promise<({
        items: ({
            chart: {
                name: string;
                id: number;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                type: import(".prisma/client").$Enums.ChartType;
                description: string | null;
                code: string;
            };
        } & {
            id: number;
            journalEntryId: number;
            debit: import("@prisma/client/runtime/library").Decimal;
            credit: import("@prisma/client/runtime/library").Decimal;
            chartId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        description: string;
        entryNumber: string;
        refType: string | null;
        refId: number | null;
    })[]>;
    generateExcelReport(res: any, month?: string, year?: string): Promise<void>;
}
