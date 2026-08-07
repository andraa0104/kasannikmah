import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from './auth'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export interface Account {
  id: number
  name: string
  type: 'CASH' | 'BANK' | 'EWALLET'
  accountNumber?: string
  bankName?: string
  balance: number
  isDefault: boolean
  isActive: boolean
}

export interface FundCategory {
  id: number
  name: string
  code: string
  fundType: string
  description?: string
}

export const useAccountStore = defineStore('account', () => {
  const accounts = ref<Account[]>([])
  const fundCategories = ref<FundCategory[]>([])
  const transfers = ref<any[]>([])
  const loading = ref(false)

  const authStore = useAuthStore()

  const fetchAccounts = async () => {
    try {
      loading.value = true
      const res = await axios.get(`${API_URL}/accounts`, {
        headers: { Authorization: `Bearer ${authStore.token}` }
      })
      accounts.value = res.data
    } catch (e) {
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  const fetchFundCategories = async () => {
    try {
      const res = await axios.get(`${API_URL}/accounts/fund-categories`, {
        headers: { Authorization: `Bearer ${authStore.token}` }
      })
      fundCategories.value = res.data
    } catch (e) {
      console.error(e)
    }
  }

  const fetchTransfers = async () => {
    try {
      const res = await axios.get(`${API_URL}/accounts/transfers`, {
        headers: { Authorization: `Bearer ${authStore.token}` }
      })
      transfers.value = res.data
    } catch (e) {
      console.error(e)
    }
  }

  const createAccount = async (data: any) => {
    const res = await axios.post(`${API_URL}/accounts`, data, {
      headers: { Authorization: `Bearer ${authStore.token}` }
    })
    await fetchAccounts()
    return res.data
  }

  const transfer = async (data: any) => {
    const res = await axios.post(`${API_URL}/accounts/transfers`, data, {
      headers: { Authorization: `Bearer ${authStore.token}` }
    })
    await fetchAccounts()
    await fetchTransfers()
    return res.data
  }

  return {
    accounts,
    fundCategories,
    transfers,
    loading,
    fetchAccounts,
    fetchFundCategories,
    fetchTransfers,
    createAccount,
    transfer
  }
})
