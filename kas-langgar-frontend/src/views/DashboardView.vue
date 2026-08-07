<template>
  <div>
    <div class="d-flex flex-column flex-md-row align-start align-md-center justify-space-between mb-6" style="gap: 16px;">
      <div>
        <h1 class="text-h4 font-weight-bold text-white mb-1">Dashboard</h1>
        <p class="text-grey-lighten-1">Ringkasan kas Langgar An-Nikmah</p>
      </div>
      <div class="d-flex flex-wrap align-center gap-2">
        <v-select
          v-if="availableYears.length > 0"
          v-model="currentMonth"
          :items="availableMonths"
          item-title="title"
          item-value="value"
          variant="solo-filled"
          flat
          rounded="pill"
          density="compact"
          hide-details
          bg-color="rgba(255, 255, 255, 0.15)"
          class="ios-input text-white"
          style="min-width: 140px;"
          @update:model-value="onFilterChange"
        ></v-select>
        
        <v-select
          v-if="availableYears.length > 0"
          v-model="currentYear"
          :items="availableYears"
          variant="solo-filled"
          flat
          rounded="pill"
          density="compact"
          hide-details
          bg-color="rgba(255, 255, 255, 0.15)"
          class="ios-input text-white"
          style="min-width: 120px;"
          @update:model-value="onYearChange"
        ></v-select>

        <v-btn
          v-if="authStore.hasPermission('transactions:create')"
          color="primary"
          prepend-icon="mdi-plus"
          size="large"
          rounded="pill"
          elevation="0"
          @click="dialog = true"
          class="ios-btn align-self-stretch align-self-md-auto"
        >
          Tambah Transaksi
        </v-btn>
      </div>
    </div>

    <!-- Summary Cards -->
    <v-row class="mb-6">
      <v-col cols="12" md="4">
        <v-card class="glass-card pa-4" elevation="4">
          <div class="d-flex align-center">
            <v-avatar color="rgba(67, 160, 71, 0.2)" size="64" class="mr-4">
              <v-icon color="success" size="32">mdi-arrow-down-bold-circle-outline</v-icon>
            </v-avatar>
            <div>
              <div class="text-caption text-grey text-uppercase font-weight-bold">Total Pemasukan</div>
              <div class="text-h5 font-weight-bold text-success">{{ formatCurrency(transactionStore.summary.totalIncome) }}</div>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="glass-card pa-4" elevation="4">
          <div class="d-flex align-center">
            <v-avatar color="rgba(229, 57, 53, 0.2)" size="64" class="mr-4">
              <v-icon color="error" size="32">mdi-arrow-up-bold-circle-outline</v-icon>
            </v-avatar>
            <div>
              <div class="text-caption text-grey text-uppercase font-weight-bold">Total Pengeluaran</div>
              <div class="text-h5 font-weight-bold text-error">{{ formatCurrency(transactionStore.summary.totalExpense) }}</div>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="glass-card pa-4" elevation="4" :class="transactionStore.summary.balance >= 0 ? 'border-primary' : 'border-error'">
          <div class="d-flex align-center">
            <v-avatar :color="transactionStore.summary.balance >= 0 ? 'rgba(33, 150, 243, 0.2)' : 'rgba(229, 57, 53, 0.2)'" size="64" class="mr-4">
              <v-icon :color="transactionStore.summary.balance >= 0 ? 'info' : 'error'" size="32">mdi-wallet-outline</v-icon>
            </v-avatar>
            <div>
              <div class="text-caption text-grey text-uppercase font-weight-bold">Saldo Akhir</div>
              <div class="text-h5 font-weight-bold" :class="transactionStore.summary.balance >= 0 ? 'text-info' : 'text-error'">
                {{ formatCurrency(transactionStore.summary.balance) }}
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Desktop Data Table -->
    <v-card class="glass-panel d-none d-md-block" elevation="8">
      <v-card-title class="pa-4 d-flex align-center">
        <v-icon icon="mdi-history" class="mr-2" color="primary"></v-icon>
        Riwayat Transaksi
        <v-spacer></v-spacer>
        <div class="d-flex gap-4">
          <v-select
            v-model="searchBy"
            :items="searchOptions"
            item-title="title"
            item-value="value"
            label="Cari Berdasarkan"
            variant="solo-filled"
            flat
            rounded="pill"
            density="compact"
            hide-details
            bg-color="rgba(255, 255, 255, 0.1)"
            class="ios-input max-w-sm"
            style="min-width: 150px;"
          ></v-select>
          <v-text-field
            v-model="search"
            append-inner-icon="mdi-magnify"
            label="Cari..."
            single-line
            hide-details
            variant="solo-filled"
            flat
            rounded="pill"
            density="compact"
            bg-color="rgba(255, 255, 255, 0.1)"
            class="ios-input max-w-sm"
            style="min-width: 200px;"
            clearable
          ></v-text-field>
        </div>
      </v-card-title>
      
      <v-data-table
        :headers="headers"
        :items="filteredTransactions"
        :loading="transactionStore.loading"
        class="bg-transparent text-white custom-dashboard-table"
        hover
        v-model:items-per-page="itemsPerPage"
        :items-per-page-options="itemsPerPageOptions"
        v-model:page="page"
      >
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template #item.date="{ item }">
          {{ formatDate(item.date) }}
        </template>
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template #item.category="{ item }">
          <v-chip size="small" variant="tonal" :color="item.type === 'INCOME' ? 'success' : 'error'">
            {{ item.category }}
          </v-chip>
        </template>
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template #item.description="{ item }">
          {{ item.description || '-' }}
        </template>
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template #item.type="{ item }">
          <span :class="item.type === 'INCOME' ? 'text-success' : 'text-error'" class="font-weight-bold">
            {{ item.type === 'INCOME' ? 'Masuk' : 'Keluar' }}
          </span>
        </template>
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template #item.amount="{ item }">
          <span class="font-weight-bold">{{ formatCurrency(Number(item.amount)) }}</span>
        </template>
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template #item.actions="{ item }">
          <v-btn icon="mdi-delete" variant="text" color="error" size="small" @click="deleteItem(item.id)"></v-btn>
        </template>
        <template #no-data>
          <div class="pa-8 text-center text-grey">Belum ada data transaksi</div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Mobile List View -->
    <div class="d-block d-md-none">
      <div class="d-flex align-center mb-4">
        <v-icon icon="mdi-history" class="mr-2" color="primary"></v-icon>
        <span class="text-h6 font-weight-bold text-white">Riwayat Transaksi</span>
      </div>
      <div class="d-flex flex-column gap-2 mb-4">
        <v-select
          v-model="searchBy"
          :items="searchOptions"
          item-title="title"
          item-value="value"
          label="Cari Berdasarkan"
          variant="solo-filled"
          flat
          rounded="pill"
          density="compact"
          hide-details
          bg-color="rgba(255, 255, 255, 0.1)"
          class="ios-input"
        ></v-select>
        <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          label="Cari Transaksi..."
          single-line
          hide-details
          variant="solo-filled"
          flat
          rounded="pill"
          density="compact"
          bg-color="rgba(255, 255, 255, 0.1)"
          class="ios-input"
          clearable
        ></v-text-field>
      </div>

      <div v-if="transactionStore.loading" class="text-center pa-4">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </div>
      <div v-else-if="transactionStore.transactions.length === 0" class="text-center pa-8 text-grey glass-panel rounded-xl">
        Belum ada data transaksi
      </div>
      <div v-else class="d-flex flex-column" style="gap: 12px;">
        <v-card
          v-for="item in paginatedTransactions"
          :key="item.id"
          class="glass-card pa-4 border-0"
          style="background: rgba(255, 255, 255, 0.04) !important;"
        >
          <div class="d-flex justify-space-between align-center mb-2">
            <span class="text-caption text-grey">{{ formatDate(item.date) }}</span>
            <v-chip size="small" variant="tonal" :color="item.type === 'INCOME' ? 'success' : 'error'">
              {{ item.category }}
            </v-chip>
          </div>
          <div class="d-flex justify-space-between align-end mt-2">
            <div class="flex-grow-1 pr-2">
              <div class="font-weight-bold text-white text-body-1" style="line-height: 1.2; margin-bottom: 4px;">{{ item.description || 'Tanpa keterangan' }}</div>
              <div :class="item.type === 'INCOME' ? 'text-success' : 'text-error'" class="text-caption font-weight-bold">
                {{ item.type === 'INCOME' ? 'Pemasukan' : 'Pengeluaran' }}
              </div>
            </div>
            <div class="text-right d-flex flex-column align-end">
              <div class="font-weight-bold text-subtitle-1 mb-1">{{ formatCurrency(Number(item.amount)) }}</div>
              <v-btn v-if="authStore.hasPermission('transactions:delete')" icon="mdi-delete" variant="tonal" color="error" size="x-small" @click="deleteItem(item.id)"></v-btn>
            </div>
          </div>
        </v-card>

        <!-- Custom Mobile Pagination -->
        <div v-if="pageCount > 1" class="d-flex flex-column align-center mt-4">
          <v-pagination
            v-model="page"
            :length="pageCount"
            active-color="primary"
            density="compact"
          ></v-pagination>
          
          <div class="mt-4 w-100 d-flex align-center justify-center">
            <span class="text-caption text-grey mr-2">Tampilkan:</span>
            <v-select
              v-model="itemsPerPage"
              :items="itemsPerPageOptions"
              variant="solo-filled"
              flat
              rounded="pill"
              density="compact"
              hide-details
              bg-color="rgba(255, 255, 255, 0.1)"
              class="ios-input"
              style="max-width: 100px;"
            ></v-select>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Transaction Dialog (iOS 26 Liquid Glass) -->
    <v-dialog v-model="dialog" max-width="500" persistent>
      <v-card class="glass-modal pa-6">
        <v-card-title class="pa-0 mb-4 text-h5 font-weight-bold d-flex align-center justify-space-between" :class="isDarkTheme ? 'text-white' : 'text-black'">
          <span>Tambah Transaksi</span>
          <v-btn icon="mdi-close" variant="text" size="small" :color="isDarkTheme ? 'white' : 'grey-darken-2'" @click="dialog = false"></v-btn>
        </v-card-title>
        <v-card-text class="pa-6 pt-2">
          <v-form @submit.prevent="saveTransaction" ref="formRef">
            <v-select
              v-model="formData.type"
              :items="[{title: 'Pemasukan', value: 'INCOME'}, {title: 'Pengeluaran', value: 'EXPENSE'}]"
              label="Tipe Transaksi"
              variant="outlined"
              color="primary"
              :rules="[v => !!v || 'Tipe wajib dipilih']"
              bg-color="rgba(0,0,0,0.1)"
              class="mb-2"
              rounded="xl"
            ></v-select>

            <v-text-field
              v-model="formData.date"
              type="date"
              label="Tanggal"
              variant="outlined"
              color="primary"
              :rules="[v => !!v || 'Tanggal wajib diisi']"
              bg-color="rgba(0,0,0,0.1)"
              class="mb-2"
              rounded="xl"
            ></v-text-field>

            <v-text-field
              v-model="formData.category"
              label="Kategori (Misal: Infaq, Listrik)"
              variant="outlined"
              color="primary"
              :rules="[v => !!v || 'Kategori wajib diisi']"
              bg-color="rgba(0,0,0,0.1)"
              class="mb-2"
              rounded="xl"
            ></v-text-field>

            <v-text-field
              v-model="formattedAmount"
              type="text"
              label="Jumlah"
              prefix="Rp"
              variant="outlined"
              color="primary"
              :rules="[v => !!v || 'Jumlah wajib diisi', _v => Number(formData.amount) > 0 || 'Jumlah harus lebih dari 0']"
              bg-color="rgba(0,0,0,0.1)"
              class="mb-2"
              rounded="xl"
            ></v-text-field>

            <v-select
              v-model="formData.accountId"
              :items="accountStore.accounts"
              item-title="name"
              item-value="id"
              label="Pilih Kas / Rekening Bank"
              variant="outlined"
              color="primary"
              bg-color="rgba(0,0,0,0.1)"
              class="mb-2"
              rounded="xl"
            ></v-select>

            <v-select
              v-model="formData.fundCategoryId"
              :items="accountStore.fundCategories"
              item-title="name"
              item-value="id"
              label="Pilih Pos Dana (Umum/Yatim/Pembangunan)"
              variant="outlined"
              color="primary"
              bg-color="rgba(0,0,0,0.1)"
              class="mb-2"
              rounded="xl"
            ></v-select>

            <v-file-input
              v-model="proofFile"
              label="Upload Bukti Nota / Kwitansi (Opsional, Max 2MB)"
              accept="image/*,.pdf"
              prepend-icon="mdi-paperclip"
              variant="outlined"
              color="primary"
              bg-color="rgba(0,0,0,0.1)"
              class="mb-2"
              rounded="xl"
              show-size
            ></v-file-input>

            <v-textarea
              v-model="formData.description"
              label="Keterangan"
              variant="outlined"
              color="primary"
              rows="3"
              bg-color="rgba(0,0,0,0.1)"
              rounded="xl"
            ></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-6 pt-0">
          <v-spacer></v-spacer>
          <v-btn color="white" variant="tonal" rounded="xl" class="px-6" @click="dialog = false">Batal</v-btn>
          <v-btn color="primary" variant="flat" rounded="xl" class="px-8 font-weight-bold" @click="saveTransaction" :loading="transactionStore.loading" elevation="8">Simpan</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import api from '../services/api'
import { useAuthStore } from '../stores/auth'
import { useTransactionStore } from '../stores/transaction'

import { useAccountStore } from '../stores/account'

const authStore = useAuthStore()
const transactionStore = useTransactionStore()
const accountStore = useAccountStore()

const proofFile = ref<File | null>(null)

const search = ref('')
const searchBy = ref('description')
const searchOptions = [
  { title: 'Keterangan', value: 'description' },
  { title: 'Kategori', value: 'category' }
]

const itemsPerPage = ref(5)
const itemsPerPageOptions = [
  { title: '5 Data', value: 5 },
  { title: '10 Data', value: 10 },
  { title: '25 Data', value: 25 },
  { title: '50 Data', value: 50 },
  { title: '100 Data', value: 100 }
]
const page = ref(1)

interface AvailableDate {
  year: number
  month: number
}
const availableDates = ref<AvailableDate[]>([])
const currentMonth = ref<number | null>(null)
const currentYear = ref<number | null>(null)

const availableYears = computed(() => {
  const yearsSet = new Set(availableDates.value.map(d => d.year))
  return Array.from(yearsSet).sort((a, b) => b - a)
})

const availableMonths = computed(() => {
  if (!currentYear.value) return []
  const monthsInYear = availableDates.value
    .filter(d => d.year === currentYear.value)
    .map(d => d.month)
  
  const uniqueMonths = Array.from(new Set(monthsInYear)).sort((a, b) => b - a)
  
  const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  return uniqueMonths.map(m => ({ title: monthNames[m - 1], value: m }))
})

const onYearChange = () => {
  if (availableMonths.value.length > 0) {
    currentMonth.value = availableMonths.value[0].value
    onFilterChange()
  }
}

const onFilterChange = () => {
  if (currentMonth.value && currentYear.value) {
    transactionStore.fetchSummary(currentMonth.value, currentYear.value)
    transactionStore.fetchTransactions({ 
      month: currentMonth.value, 
      year: currentYear.value,
      take: 1000
    } as any)
  }
}

const fetchAvailableDates = async () => {
  try {
    const response = await api.get('/public/transactions/available-dates')
    availableDates.value = response.data.data || response.data || []

    const now = new Date()
    const currentRealYear = now.getFullYear()
    const currentRealMonth = now.getMonth() + 1

    const hasCurrentDate = availableDates.value.some(
      d => d.year === currentRealYear && d.month === currentRealMonth
    )
    if (!hasCurrentDate) {
      availableDates.value.push({ year: currentRealYear, month: currentRealMonth })
    }

    currentYear.value = currentRealYear
    currentMonth.value = currentRealMonth
    onFilterChange()
  } catch (error) {
    console.error('Error fetching available dates:', error)
    transactionStore.fetchSummary()
    transactionStore.fetchTransactions()
  }
}

const dialog = ref(false)
const formRef = ref<any>(null)

const formData = ref({
  type: 'INCOME',
  date: new Date().toISOString().substr(0, 10),
  category: '',
  amount: '',
  description: '',
  accountId: undefined as number | undefined,
  fundCategoryId: undefined as number | undefined
})

const headers = computed(() => {
  const base = [
    { title: 'Tanggal', key: 'date', sortable: true },
    { title: 'Kategori', key: 'category', sortable: true },
    { title: 'Keterangan', key: 'description', sortable: true },
    { title: 'Tipe', key: 'type', sortable: true },
    { title: 'Jumlah (Rp)', key: 'amount', align: 'end' as const, sortable: true }
  ]
  if (authStore.hasPermission('transactions:delete')) {
    base.push({ title: 'Aksi', key: 'actions', sortable: false, align: 'center' as any })
  }
  return base as any
})

const formattedAmount = computed({
  get() {
    if (!formData.value.amount) return ''
    return formData.value.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  },
  set(val: string) {
    const rawValue = val.replace(/\D/g, '')
    formData.value.amount = rawValue
  }
})

onMounted(() => {
  fetchAvailableDates()
  accountStore.fetchAccounts()
  accountStore.fetchFundCategories()
})

const filteredTransactions = computed(() => {
  let result = transactionStore.transactions
  if (search.value) {
    const searchLower = search.value.toLowerCase()
    result = result.filter(t => {
      const val = (t as any)[searchBy.value]
      return val && val.toLowerCase().includes(searchLower)
    })
  }
  return result
})

const paginatedTransactions = computed(() => {
  const start = (page.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredTransactions.value.slice(start, end)
})

const pageCount = computed(() => {
  return Math.ceil(filteredTransactions.value.length / itemsPerPage.value) || 1
})

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val)
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('id-ID', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
}

const saveTransaction = async () => {
  const { valid } = await formRef.value.validate()
  if (valid) {
    let attachmentUrl = undefined

    // Upload optional proof file if provided (max 2MB)
    if (proofFile.value) {
      if (proofFile.value.size > 2 * 1024 * 1024) {
        alert('Ukuran file bukti maksimal 2MB untuk menghemat memori server!')
        return
      }
      try {
        attachmentUrl = await transactionStore.uploadProof(proofFile.value)
      } catch (err: any) {
        alert('Gagal mengunggah file bukti. Transaksi akan tetap disimpan tanpa lampiran.')
      }
    }

    const success = await transactionStore.createTransaction({
      ...formData.value,
      amount: Number(formData.value.amount),
      attachmentUrl
    })
    
    if (success) {
      dialog.value = false
      formRef.value.reset()
      proofFile.value = null
      formData.value.date = new Date().toISOString().substr(0, 10)
      
      fetchAvailableDates()
    }
  }
}

const deleteItem = async (id: number) => {
  if (confirm('Apakah Anda yakin ingin menghapus transaksi ini?')) {
    const success = await transactionStore.deleteTransaction(id)
    if (success) {
      fetchAvailableDates()
    }
  }
}
</script>

<style scoped>
.gap-4 { gap: 16px; }
.gap-2 { gap: 8px; }

:deep(.custom-dashboard-table) {
  background: transparent !important;
}
:deep(.custom-dashboard-table th) {
  background: transparent !important;
  color: #9E9E9E !important;
  border-bottom: 1px solid rgba(255,255,255,0.1) !important;
}
:deep(.custom-dashboard-table td) {
  border-bottom: 1px solid rgba(255,255,255,0.05) !important;
}

:deep(.ios-input .v-field) {
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05) !important;
}
:deep(.ios-input .v-field:hover) {
  background-color: rgba(255, 255, 255, 0.2) !important;
}
:deep(.ios-input.v-text-field--focused .v-field) {
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2) !important;
}

:deep(.ios-btn) {
  text-transform: none !important;
  font-weight: 600 !important;
  letter-spacing: 0.3px !important;
  box-shadow: 0 8px 16px rgba(var(--v-theme-primary), 0.3) !important;
  transition: all 0.3s ease !important;
}
:deep(.ios-btn:hover) {
  transform: translateY(-2px);
  box-shadow: 0 12px 20px rgba(var(--v-theme-primary), 0.4) !important;
}
:deep(.ios-btn:active) {
  transform: translateY(1px);
  box-shadow: 0 4px 8px rgba(var(--v-theme-primary), 0.3) !important;
}
</style>
