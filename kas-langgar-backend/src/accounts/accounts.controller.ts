import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common'
import { AccountsService } from './accounts.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@Controller('accounts')
@UseGuards(JwtAuthGuard)
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  findAll() {
    return this.accountsService.findAll()
  }

  @Get('fund-categories')
  findFundCategories() {
    return this.accountsService.findFundCategories()
  }

  @Get('charts')
  findCharts() {
    return this.accountsService.findCharts()
  }

  @Post()
  create(@Body() body: any) {
    return this.accountsService.create(body)
  }

  @Get('transfers')
  findAllTransfers() {
    return this.accountsService.findAllTransfers()
  }

  @Post('transfers')
  transfer(@Body() body: any, @Request() req: any) {
    return this.accountsService.transfer(body, req.user.userId)
  }
}
