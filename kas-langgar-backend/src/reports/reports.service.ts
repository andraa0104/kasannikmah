import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import * as Workbook from 'exceljs'

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async getBalanceSheet() {
    const accounts = await this.prisma.account.findMany({
      where: { isActive: true }
    })

    const fundCategories = await this.prisma.fundCategory.findMany({
      where: { isActive: true }
    })

    const fundBalances: any[] = []
    let totalAssets = 0

    for (const acc of accounts) {
      totalAssets += Number(acc.balance)
    }

    for (const fund of fundCategories) {
      const incomeSum = await this.prisma.transaction.aggregate({
        where: { fundCategoryId: fund.id, type: 'INCOME' },
        _sum: { amount: true }
      })
      const expenseSum = await this.prisma.transaction.aggregate({
        where: { fundCategoryId: fund.id, type: 'EXPENSE' },
        _sum: { amount: true }
      })

      const totalIncome = Number(incomeSum._sum.amount || 0)
      const totalExpense = Number(expenseSum._sum.amount || 0)
      const balance = totalIncome - totalExpense

      fundBalances.push({
        id: fund.id,
        name: fund.name,
        code: fund.code,
        fundType: fund.fundType,
        totalIncome,
        totalExpense,
        balance
      })
    }

    return {
      assets: accounts.map(a => ({
        id: a.id,
        name: a.name,
        type: a.type,
        bankName: a.bankName,
        accountNumber: a.accountNumber,
        balance: Number(a.balance)
      })),
      totalAssets,
      fundBalances,
      totalEquity: totalAssets
    }
  }

  async getActivityReport(month?: string, year?: string) {
    const where: any = {}
    if (month && year) {
      const m = parseInt(month)
      const y = parseInt(year)
      const startDate = new Date(y, m - 1, 1)
      const endDate = new Date(y, m, 0, 23, 59, 59)
      where.date = { gte: startDate, lte: endDate }
    }

    const fundCategories = await this.prisma.fundCategory.findMany({ where: { isActive: true } })
    const reportData: any[] = []

    let grandIncome = 0
    let grandExpense = 0

    for (const fund of fundCategories) {
      const fundWhere = { ...where, fundCategoryId: fund.id }

      const incomeTransactions = await this.prisma.transaction.findMany({
        where: { ...fundWhere, type: 'INCOME' },
        select: { id: true, date: true, amount: true, description: true, category: true }
      })

      const expenseTransactions = await this.prisma.transaction.findMany({
        where: { ...fundWhere, type: 'EXPENSE' },
        select: { id: true, date: true, amount: true, description: true, category: true }
      })

      const totalIncome = incomeTransactions.reduce((acc, t) => acc + Number(t.amount), 0)
      const totalExpense = expenseTransactions.reduce((acc, t) => acc + Number(t.amount), 0)

      grandIncome += totalIncome
      grandExpense += totalExpense

      reportData.push({
        fundCategory: fund,
        totalIncome,
        totalExpense,
        netSurplus: totalIncome - totalExpense,
        incomeTransactions,
        expenseTransactions
      })
    }

    return {
      period: { month, year },
      categories: reportData,
      summary: {
        totalIncome: grandIncome,
        totalExpense: grandExpense,
        netSurplus: grandIncome - grandExpense
      }
    }
  }

  async getJournal(month?: string, year?: string) {
    const where: any = {}
    if (month && year) {
      const m = parseInt(month)
      const y = parseInt(year)
      const startDate = new Date(y, m - 1, 1)
      const endDate = new Date(y, m, 0, 23, 59, 59)
      where.date = { gte: startDate, lte: endDate }
    }

    return this.prisma.journalEntry.findMany({
      where,
      include: {
        items: {
          include: { chart: true }
        }
      },
      orderBy: { date: 'desc' }
    })
  }

  async generateExcelReport(res: any, month?: string, year?: string) {
    const activity = await this.getActivityReport(month, year)
    const balanceSheet = await this.getBalanceSheet()
    const journals = await this.getJournal(month, year)

    const workbook = new Workbook.Workbook()
    workbook.creator = 'Kas Langgar'

    // Sheet 1: Ringkasan & Posisi Keuangan
    const sheet1 = workbook.addWorksheet('Posisi Keuangan & Ringkasan')
    sheet1.columns = [
      { header: 'Kategori / Rekening', key: 'name', width: 35 },
      { header: 'Jenis / Tipe', key: 'type', width: 25 },
      { header: 'Pemasukan (Rp)', key: 'income', width: 20 },
      { header: 'Pengeluaran (Rp)', key: 'expense', width: 20 },
      { header: 'Saldo Akhir (Rp)', key: 'balance', width: 22 }
    ]

    sheet1.addRow({ name: '=== ASET (REKENING & KAS) ===', type: '', income: '', expense: '', balance: '' })
    for (const asset of balanceSheet.assets) {
      sheet1.addRow({
        name: asset.name,
        type: asset.type === 'CASH' ? 'Kas Tunai' : `Bank (${asset.bankName || ''})`,
        income: '-',
        expense: '-',
        balance: asset.balance
      })
    }
    sheet1.addRow({ name: 'TOTAL ASET', type: '', income: '', expense: '', balance: balanceSheet.totalAssets })
    sheet1.addRow({})

    sheet1.addRow({ name: '=== SALDO PER POS DANA ===', type: '', income: '', expense: '', balance: '' })
    for (const fund of balanceSheet.fundBalances) {
      sheet1.addRow({
        name: fund.name,
        type: fund.fundType,
        income: fund.totalIncome,
        expense: fund.totalExpense,
        balance: fund.balance
      })
    }

    // Sheet 2: Jurnal Umum
    const sheet2 = workbook.addWorksheet('Jurnal Umum')
    sheet2.columns = [
      { header: 'No. Jurnal', key: 'entryNumber', width: 25 },
      { header: 'Tanggal', key: 'date', width: 15 },
      { header: 'Keterangan', key: 'description', width: 35 },
      { header: 'Kode Akun', key: 'code', width: 15 },
      { header: 'Nama Akun', key: 'chartName', width: 30 },
      { header: 'Debet (Rp)', key: 'debit', width: 20 },
      { header: 'Kredit (Rp)', key: 'credit', width: 20 }
    ]

    for (const j of journals) {
      for (const item of j.items) {
        sheet2.addRow({
          entryNumber: j.entryNumber,
          date: new Date(j.date).toLocaleDateString('id-ID'),
          description: j.description,
          code: item.chart.code,
          chartName: item.chart.name,
          debit: Number(item.debit),
          credit: Number(item.credit)
        })
      }
    }

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    res.setHeader('Content-Disposition', `attachment; filename=Laporan_Keuangan_Langgar_${year || 'Semua'}_${month || 'Semua'}.xlsx`)

    await workbook.xlsx.write(res)
    res.end()
  }
}
