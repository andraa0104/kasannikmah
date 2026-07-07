import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  ParseIntPipe
} from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { RolesGuard } from '../common/guards/roles.guard'
import { Roles } from '../common/decorators/roles.decorator'
import { CurrentUser } from '../common/decorators/current-user.decorator'
import { TransactionsService } from './transactions.service'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { UpdateTransactionDto } from './dto/update-transaction.dto'
import { TransactionQueryDto } from './dto/transaction-query.dto'

@Controller('transactions')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  @Roles('ADMIN', 'BENDAHARA')
  create(
    @Body() createTransactionDto: CreateTransactionDto,
    @CurrentUser() user: any
  ) {
    return this.transactionsService.create(createTransactionDto, user.userId)
  }

  @Get()
  findAll(@Query() query: TransactionQueryDto) {
    return this.transactionsService.findAll(query)
  }

  @Get('summary/:month/:year')
  getMonthlySummary(
    @Param('month', ParseIntPipe) month: number,
    @Param('year', ParseIntPipe) year: number
  ) {
    return this.transactionsService.getMonthlySummary(month, year)
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.transactionsService.findOne(id)
  }

  @Patch(':id')
  @Roles('ADMIN', 'BENDAHARA')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTransactionDto: UpdateTransactionDto,
    @CurrentUser() user: any
  ) {
    return this.transactionsService.update(id, updateTransactionDto, user.userId, user.role)
  }

  @Delete(':id')
  @Roles('ADMIN', 'BENDAHARA')
  remove(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: any) {
    return this.transactionsService.remove(id, user.userId, user.role)
  }
}
