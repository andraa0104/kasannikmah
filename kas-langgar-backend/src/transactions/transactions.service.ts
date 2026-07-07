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
import { TransactionResponseDto } from './dto/transaction-response.dto'

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async create(
    createTransactionDto: CreateTransactionDto,
    userId: number
  ): Promise<TransactionResponseDto> {
    const { date, type, amount, description, category } = createTransactionDto

    const user = await this.prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      throw new BadRequestException('User tidak ditemukan')
    }

    const transaction = await this.prisma.transaction.create({
      data: {
        date: new Date(date),
        type,
        amount: parseFloat(amount.toString()),
        description,
        category,
        createdBy: userId
      },
      include: {
        user: {
          select: { id: true, name: true, username: true }
        }
      }
    })

    return this.toTransactionResponseDto(transaction)
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
        user: {
          select: { id: true, name: true, username: true }
        }
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

  async findOne(id: number): Promise<TransactionResponseDto> {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id },
      include: {
        user: {
          select: { id: true, name: true, username: true }
        }
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
  ): Promise<TransactionResponseDto> {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id }
    })

    if (!transaction) {
      throw new NotFoundException('Transaksi tidak ditemukan')
    }

    if (transaction.createdBy !== userId && userRole !== 'ADMIN') {
      throw new ForbiddenException('Anda tidak bisa update transaksi orang lain')
    }

    const updated = await this.prisma.transaction.update({
      where: { id },
      data: {
        ...updateTransactionDto,
        date: updateTransactionDto.date ? new Date(updateTransactionDto.date) : undefined,
        amount: updateTransactionDto.amount
          ? parseFloat(updateTransactionDto.amount.toString())
          : undefined
      },
      include: {
        user: {
          select: { id: true, name: true, username: true }
        }
      }
    })

    return this.toTransactionResponseDto(updated)
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

    await this.prisma.transaction.delete({
      where: { id }
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
        date: {
          gte: startDate,
          lte: endDate
        }
      },
      include: {
        user: {
          select: { id: true, name: true }
        }
      },
      orderBy: { date: 'asc' }
    })

    const income = transactions
      .filter(t => t.type === 'INCOME')
      .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0)

    const expense = transactions
      .filter(t => t.type === 'EXPENSE')
      .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0)

    const balance = income - expense

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

  private toTransactionResponseDto(transaction: any): TransactionResponseDto {
    return {
      id: transaction.id,
      date: transaction.date,
      type: transaction.type,
      amount: parseFloat(transaction.amount.toString()),
      description: transaction.description,
      category: transaction.category,
      createdBy: transaction.createdBy,
      createdAt: transaction.createdAt,
      updatedAt: transaction.updatedAt,
      user: transaction.user
    }
  }
}
