import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
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
    exportExcel(month: string, year: string, res: any): Promise<void>;
}
