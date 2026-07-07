import { defineStore } from 'pinia'
import api from '../services/api'

interface Transaction {
  id: number
  date: string
  type: 'INCOME' | 'EXPENSE'
  amount: string
  description: string | null
  category: string
  createdBy: number
  createdAt: string
  updatedAt: string
}

interface Summary {
  totalIncome: number
  totalExpense: number
  balance: number
}

interface TransactionState {
  transactions: Transaction[]
  summary: Summary
  loading: boolean
  error: string | null
  total: number
}

export const useTransactionStore = defineStore('transaction', {
  state: (): TransactionState => ({
    transactions: [],
    summary: { totalIncome: 0, totalExpense: 0, balance: 0 },
    loading: false,
    error: null,
    total: 0
  }),

  actions: {
    async fetchTransactions(params?: { type?: string, startDate?: string, endDate?: string, page?: number, limit?: number }) {
      this.loading = true
      try {
        const response = await api.get('/transactions', { params })
        this.transactions = response.data.data.data
        this.total = response.data.data.pagination.total
      } catch (err: any) {
        this.error = err.response?.data?.message || 'Gagal memuat data transaksi'
      } finally {
        this.loading = false
      }
    },

    async fetchSummary(month?: number, year?: number) {
      const currentMonth = month || new Date().getMonth() + 1
      const currentYear = year || new Date().getFullYear()
      try {
        const response = await api.get(`/transactions/summary/${currentMonth}/${currentYear}`)
        this.summary = {
          totalIncome: response.data.data.income,
          totalExpense: response.data.data.expense,
          balance: response.data.data.balance
        }
      } catch (err: any) {
        console.error('Failed to fetch summary:', err)
      }
    },

    async createTransaction(data: any) {
      this.loading = true
      try {
        await api.post('/transactions', data)
        await this.fetchTransactions()
        await this.fetchSummary()
        return true
      } catch (err: any) {
        this.error = err.response?.data?.message || 'Gagal menyimpan transaksi'
        return false
      } finally {
        this.loading = false
      }
    },

    async deleteTransaction(id: number) {
      this.loading = true
      try {
        await api.delete(`/transactions/${id}`)
        await this.fetchTransactions()
        await this.fetchSummary()
        return true
      } catch (err: any) {
        this.error = err.response?.data?.message || 'Gagal menghapus transaksi'
        return false
      } finally {
        this.loading = false
      }
    }
  }
})
