import { Controller, Get, Query, Res, UseGuards } from '@nestjs/common'
import { ReportsService } from './reports.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@Controller('reports')
@UseGuards(JwtAuthGuard)
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('balance-sheet')
  getBalanceSheet() {
    return this.reportsService.getBalanceSheet()
  }

  @Get('activity')
  getActivityReport(@Query('month') month?: string, @Query('year') year?: string) {
    return this.reportsService.getActivityReport(month, year)
  }

  @Get('journal')
  getJournal(@Query('month') month?: string, @Query('year') year?: string) {
    return this.reportsService.getJournal(month, year)
  }

  @Get('export/excel')
  exportExcel(@Query('month') month: string, @Query('year') year: string, @Res() res: any) {
    return this.reportsService.generateExcelReport(res, month, year)
  }
}
