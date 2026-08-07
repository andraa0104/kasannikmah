import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from './auth'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export const useReportStore = defineStore('report', () => {
  const balanceSheet = ref<any>(null)
  const activityReport = ref<any>(null)
  const journalEntries = ref<any[]>([])
  const loading = ref(false)

  const authStore = useAuthStore()

  const fetchBalanceSheet = async () => {
    try {
      loading.value = true
      const res = await axios.get(`${API_URL}/reports/balance-sheet`, {
        headers: { Authorization: `Bearer ${authStore.token}` }
      })
      balanceSheet.value = res.data
    } catch (e) {
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  const fetchActivityReport = async (month?: number, year?: number) => {
    try {
      loading.value = true
      const res = await axios.get(`${API_URL}/reports/activity`, {
        params: { month, year },
        headers: { Authorization: `Bearer ${authStore.token}` }
      })
      activityReport.value = res.data
    } catch (e) {
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  const fetchJournal = async (month?: number, year?: number) => {
    try {
      loading.value = true
      const res = await axios.get(`${API_URL}/reports/journal`, {
        params: { month, year },
        headers: { Authorization: `Bearer ${authStore.token}` }
      })
      journalEntries.value = res.data
    } catch (e) {
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  const downloadExcel = (month?: number, year?: number) => {
    const params = new URLSearchParams()
    if (month) params.append('month', month.toString())
    if (year) params.append('year', year.toString())

    window.open(`${API_URL}/reports/export/excel?${params.toString()}&token=${authStore.token}`, '_blank')
  }

  return {
    balanceSheet,
    activityReport,
    journalEntries,
    loading,
    fetchBalanceSheet,
    fetchActivityReport,
    fetchJournal,
    downloadExcel
  }
})
