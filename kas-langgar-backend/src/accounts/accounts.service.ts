import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { AccountType } from '@prisma/client'

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.account.findMany({
      where: { isActive: true },
      orderBy: { isDefault: 'desc' }
    })
  }

  async findFundCategories() {
    return this.prisma.fundCategory.findMany({
      where: { isActive: true },
      orderBy: { id: 'asc' }
    })
  }

  async findCharts() {
    return this.prisma.accountChart.findMany({
      where: { isActive: true },
      orderBy: { code: 'asc' }
    })
  }

  async create(data: { name: string; type: AccountType; accountNumber?: string; bankName?: string; balance?: number }) {
    const existing = await this.prisma.account.findFirst({
      where: { name: data.name, isActive: true }
    })

    if (existing) {
      throw new BadRequestException('Nama rekening/kas sudah ada')
    }

    return this.prisma.account.create({
      data: {
        name: data.name,
        type: data.type || AccountType.CASH,
        accountNumber: data.accountNumber,
        bankName: data.bankName,
        balance: data.balance || 0
      }
    })
  }

  async transfer(data: { sourceAccountId: number; targetAccountId: number; amount: number; description?: string; date: string }, userId: number) {
    const { sourceAccountId, targetAccountId, amount, description, date } = data

    if (sourceAccountId === targetAccountId) {
      throw new BadRequestException('Rekening asal dan tujuan tidak boleh sama')
    }

    if (amount <= 0) {
      throw new BadRequestException('Jumlah transfer harus lebih dari 0')
    }

    const source = await this.prisma.account.findUnique({ where: { id: sourceAccountId } })
    const target = await this.prisma.account.findUnique({ where: { id: targetAccountId } })

    if (!source || !target) {
      throw new NotFoundException('Rekening asal atau tujuan tidak ditemukan')
    }

    const transferDate = date ? new Date(date) : new Date()

    return this.prisma.$transaction(async (tx) => {
      const entryCount = await tx.journalEntry.count()
      const entryNumber = `JRN-TRF-${Date.now()}-${entryCount + 1}`

      const assetSourceChart = await tx.accountChart.findFirst({ where: { name: { contains: source.name } } }) ||
        await tx.accountChart.findFirst({ where: { code: '101' } })

      const assetTargetChart = await tx.accountChart.findFirst({ where: { name: { contains: target.name } } }) ||
        await tx.accountChart.findFirst({ where: { code: '102' } })

      const targetChartId = assetTargetChart ? assetTargetChart.id : 1
      const sourceChartId = assetSourceChart ? assetSourceChart.id : 1

      const journalEntry = await tx.journalEntry.create({
        data: {
          entryNumber,
          date: transferDate,
          description: description || `Transfer dana dari ${source.name} ke ${target.name}`,
          refType: 'TRANSFER',
          items: {
            create: [
              { chartId: targetChartId, debit: amount, credit: 0 },
              { chartId: sourceChartId, debit: 0, credit: amount }
            ]
          }
        }
      })

      const transferRecord = await tx.accountTransfer.create({
        data: {
          date: transferDate,
          sourceAccountId,
          targetAccountId,
          amount,
          description,
          journalEntryId: journalEntry.id,
          createdBy: userId
        },
        include: {
          sourceAccount: true,
          targetAccount: true
        }
      })

      await tx.account.update({
        where: { id: sourceAccountId },
        data: { balance: { decrement: amount } }
      })

      await tx.account.update({
        where: { id: targetAccountId },
        data: { balance: { increment: amount } }
      })

      return transferRecord
    })
  }

  async findAllTransfers() {
    return this.prisma.accountTransfer.findMany({
      include: {
        sourceAccount: true,
        targetAccount: true,
        user: { select: { id: true, name: true } }
      },
      orderBy: { date: 'desc' }
    })
  }
}
