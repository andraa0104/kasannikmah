import { Controller, Get, Query, Param, ParseIntPipe } from '@nestjs/common';
import { TransactionsService } from '../transactions/transactions.service';
import { TransactionQueryDto } from '../transactions/dto/transaction-query.dto';

@Controller('public')
export class PublicController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get('transactions')
  getPublicTransactions(@Query() query: TransactionQueryDto) {
    return this.transactionsService.findAll(query);
  }

  @Get('transactions/available-dates')
  getAvailableDates() {
    return this.transactionsService.getAvailableDates();
  }

  @Get('transactions/summary/:month/:year')
  getPublicMonthlySummary(
    @Param('month', ParseIntPipe) month: number,
    @Param('year', ParseIntPipe) year: number
  ) {
    return this.transactionsService.getMonthlySummary(month, year);
  }
}
