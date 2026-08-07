import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException
} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { UpdateTransactionDto } from './dto/update-transaction.dto'
import { TransactionQueryDto } from './dto/transaction-query.dto'

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async create(
    createTransactionDto: CreateTransactionDto,
    userId: number
  ) {
    const { date, type, amount, description, category, accountId, fundCategoryId, attachmentUrl } = createTransactionDto

    const user = await this.prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      throw new BadRequestException('User tidak ditemukan')
    }

    let targetAccount = accountId
      ? await this.prisma.account.findUnique({ where: { id: accountId } })
      : await this.prisma.account.findFirst({ where: { isDefault: true } })

    if (!targetAccount) {
      targetAccount = await this.prisma.account.findFirst()
    }

    let targetFund = fundCategoryId
      ? await this.prisma.fundCategory.findUnique({ where: { id: fundCategoryId } })
      : await this.prisma.fundCategory.findFirst({ where: { code: 'FUND_GEN' } })

    if (!targetFund) {
      targetFund = await this.prisma.fundCategory.findFirst()
    }

    const numAmount = parseFloat(amount.toString())

    return this.prisma.$transaction(async (tx) => {
      const entryCount = await tx.journalEntry.count()
      const entryNumber = `JRN-TRX-${Date.now()}-${entryCount + 1}`

      const assetChart = targetAccount
        ? await tx.accountChart.findFirst({ where: { name: { contains: targetAccount.name } } }) || await tx.accountChart.findFirst({ where: { code: '101' } })
        : await tx.accountChart.findFirst({ where: { code: '101' } })

      const revenueOrExpenseChart = type === 'INCOME'
        ? await tx.accountChart.findFirst({ where: { type: 'REVENUE' } }) || await tx.accountChart.findFirst({ where: { code: '401' } })
        : await tx.accountChart.findFirst({ where: { type: 'EXPENSE' } }) || await tx.accountChart.findFirst({ where: { code: '501' } })

      const assetChartId = assetChart ? assetChart.id : 1
      const revExpChartId = revenueOrExpenseChart ? revenueOrExpenseChart.id : 1

      const journalEntry = await tx.journalEntry.create({
        data: {
          entryNumber,
          date: new Date(date),
          description: description || `${type === 'INCOME' ? 'Pemasukan' : 'Pengeluaran'}: ${category}`,
          refType: 'TRANSACTION',
          items: {
            create: type === 'INCOME'
              ? [
                  { chartId: assetChartId, debit: numAmount, credit: 0 },
                  { chartId: revExpChartId, debit: 0, credit: numAmount }
                ]
              : [
                  { chartId: revExpChartId, debit: numAmount, credit: 0 },
                  { chartId: assetChartId, debit: 0, credit: numAmount }
                ]
          }
        }
      })

      const transaction = await tx.transaction.create({
        data: {
          date: new Date(date),
          type,
          amount: numAmount,
          description,
          category,
          accountId: targetAccount ? targetAccount.id : null,
          fundCategoryId: targetFund ? targetFund.id : null,
          attachmentUrl,
          journalEntryId: journalEntry.id,
          createdBy: userId
        },
        include: {
          user: { select: { id: true, name: true, username: true } },
          account: true,
          fundCategory: true
        }
      })

      if (targetAccount) {
        if (type === 'INCOME') {
          await tx.account.update({
            where: { id: targetAccount.id },
            data: { balance: { increment: numAmount } }
          })
        } else {
          await tx.account.update({
            where: { id: targetAccount.id },
            data: { balance: { decrement: numAmount } }
          })
        }
      }

      return this.toTransactionResponseDto(transaction)
    })
  }

  async findAll(query: TransactionQueryDto) {
    const {
      month,
      year,
      type,
      skip = '0',
      take = '10'
    } = query

    const where: any = {}

    if (month && year) {
      const monthNum = parseInt(month)
      const yearNum = parseInt(year)

      if (monthNum < 1 || monthNum > 12) {
        throw new BadRequestException('Month harus antara 1-12')
      }

      const startDate = new Date(yearNum, monthNum - 1, 1)
      const endDate = new Date(yearNum, monthNum, 0, 23, 59, 59)

      where.date = {
        gte: startDate,
        lte: endDate
      }
    }

    if (type) {
      where.type = type
    }

    const total = await this.prisma.transaction.count({ where })

    const transactions = await this.prisma.transaction.findMany({
      where,
      include: {
        user: { select: { id: true, name: true, username: true } },
        account: true,
        fundCategory: true
      },
      orderBy: { date: 'desc' },
      skip: parseInt(skip),
      take: parseInt(take)
    })

    return {
      data: transactions.map(t => this.toTransactionResponseDto(t)),
      pagination: {
        total,
        skip: parseInt(skip),
        take: parseInt(take),
        pages: Math.ceil(total / parseInt(take))
      }
    }
  }

  async findOne(id: number) {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, username: true } },
        account: true,
        fundCategory: true
      }
    })

    if (!transaction) {
      throw new NotFoundException('Transaksi tidak ditemukan')
    }

    return this.toTransactionResponseDto(transaction)
  }

  async update(
    id: number,
    updateTransactionDto: UpdateTransactionDto,
    userId: number,
    userRole: string
  ) {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id }
    })

    if (!transaction) {
      throw new NotFoundException('Transaksi tidak ditemukan')
    }

    if (transaction.createdBy !== userId && userRole !== 'ADMIN') {
      throw new ForbiddenException('Anda tidak bisa update transaksi orang lain')
    }

    const oldAmount = Number(transaction.amount)
    const oldType = transaction.type
    const oldAccountId = transaction.accountId

    const newAmount = updateTransactionDto.amount !== undefined ? parseFloat(updateTransactionDto.amount.toString()) : oldAmount
    const newType = updateTransactionDto.type || oldType
    const newAccountId = updateTransactionDto.accountId || oldAccountId

    return this.prisma.$transaction(async (tx) => {
      if (oldAccountId) {
        if (oldType === 'INCOME') {
          await tx.account.update({ where: { id: oldAccountId }, data: { balance: { decrement: oldAmount } } })
        } else {
          await tx.account.update({ where: { id: oldAccountId }, data: { balance: { increment: oldAmount } } })
        }
      }

      const updated = await tx.transaction.update({
        where: { id },
        data: {
          ...updateTransactionDto,
          date: updateTransactionDto.date ? new Date(updateTransactionDto.date) : undefined,
          amount: newAmount
        },
        include: {
          user: { select: { id: true, name: true, username: true } },
          account: true,
          fundCategory: true
        }
      })

      if (newAccountId) {
        if (newType === 'INCOME') {
          await tx.account.update({ where: { id: newAccountId }, data: { balance: { increment: newAmount } } })
        } else {
          await tx.account.update({ where: { id: newAccountId }, data: { balance: { decrement: newAmount } } })
        }
      }

      return this.toTransactionResponseDto(updated)
    })
  }

  async remove(id: number, userId: number, userRole: string): Promise<void> {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id }
    })

    if (!transaction) {
      throw new NotFoundException('Transaksi tidak ditemukan')
    }

    if (transaction.createdBy !== userId && userRole !== 'ADMIN') {
      throw new ForbiddenException('Anda tidak bisa delete transaksi orang lain')
    }

    return this.prisma.$transaction(async (tx) => {
      if (transaction.accountId) {
        const amount = Number(transaction.amount)
        if (transaction.type === 'INCOME') {
          await tx.account.update({ where: { id: transaction.accountId }, data: { balance: { decrement: amount } } })
        } else {
          await tx.account.update({ where: { id: transaction.accountId }, data: { balance: { increment: amount } } })
        }
      }

      if (transaction.journalEntryId) {
        await tx.journalEntry.delete({ where: { id: transaction.journalEntryId } }).catch(() => {})
      }

      await tx.transaction.delete({ where: { id } })
    })
  }

  async getMonthlySummary(month: number, year: number) {
    if (month < 1 || month > 12) {
      throw new BadRequestException('Month harus antara 1-12')
    }

    const startDate = new Date(year, month - 1, 1)
    const endDate = new Date(year, month, 0, 23, 59, 59)

    const transactions = await this.prisma.transaction.findMany({
      where: {
        date: { gte: startDate, lte: endDate }
      },
      include: {
        user: { select: { id: true, name: true } },
        account: true,
        fundCategory: true
      },
      orderBy: { date: 'asc' }
    })

    const income = transactions
      .filter(t => t.type === 'INCOME')
      .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0)

    const expense = transactions
      .filter(t => t.type === 'EXPENSE')
      .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0)

    const accounts = await this.prisma.account.findMany({ where: { isActive: true } })
    let balance = 0
    accounts.forEach(a => balance += Number(a.balance))

    return {
      month,
      year,
      income,
      expense,
      balance,
      totalTransactions: transactions.length,
      transactions: transactions.map(t => this.toTransactionResponseDto(t))
    }
  }

  async getAvailableDates() {
    const dates: any[] = await this.prisma.$queryRaw`
      SELECT DISTINCT YEAR(date) as year, MONTH(date) as month
      FROM transactions
      ORDER BY year DESC, month DESC
    `

    return dates.map(d => ({
      year: Number(d.year),
      month: Number(d.month)
    }))
  }

  private toTransactionResponseDto(transaction: any) {
    return {
      id: transaction.id,
      date: transaction.date,
      type: transaction.type,
      amount: parseFloat(transaction.amount.toString()),
      description: transaction.description,
      category: transaction.category,
      accountId: transaction.accountId,
      fundCategoryId: transaction.fundCategoryId,
      attachmentUrl: transaction.attachmentUrl,
      createdBy: transaction.createdBy,
      createdAt: transaction.createdAt,
      updatedAt: transaction.updatedAt,
      user: transaction.user,
      account: transaction.account,
      fundCategory: transaction.fundCategory
    }
  }
}
