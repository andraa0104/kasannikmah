<template>
  <div>
    <!-- Header -->
    <div class="d-flex flex-column flex-md-row justify-space-between align-start align-md-center mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold mb-1" :class="isDarkTheme ? 'text-white' : 'text-black'">Laporan Keuangan & Jurnal</h1>
        <p class="text-body-2" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Transparansi pembukuan, jurnal umum berpasangan, dan posisi kas langgar.</p>
      </div>

      <div class="d-flex align-center gap-3 mt-4 mt-md-0">
        <v-select
          v-model="selectedMonth"
          :items="months"
          item-title="title"
          item-value="value"
          density="compact"
          variant="solo-filled"
          flat
          rounded="pill"
          hide-details
          class="ios-input"
          style="width: 140px;"
          @update:model-value="loadReports"
        ></v-select>

        <v-select
          v-model="selectedYear"
          :items="years"
          density="compact"
          variant="solo-filled"
          flat
          rounded="pill"
          hide-details
          class="ios-input"
          style="width: 110px;"
          @update:model-value="loadReports"
        ></v-select>

        <v-btn
          color="success"
          prepend-icon="mdi-file-excel"
          rounded="pill"
          elevation="2"
          @click="reportStore.downloadExcel(selectedMonth, selectedYear)"
        >
          Export Excel
        </v-btn>

        <v-btn
          color="primary"
          prepend-icon="mdi-printer"
          rounded="pill"
          elevation="2"
          @click="printReport"
        >
          Cetak PDF
        </v-btn>
      </div>
    </div>

    <!-- Tabs Navigation -->
    <v-tabs v-model="tab" color="primary" class="mb-6 border-b" :class="isDarkTheme ? 'border-dark' : 'border-light'">
      <v-tab value="balance">Posisi Keuangan (Neraca)</v-tab>
      <v-tab value="activity">Laporan Aktivitas (Laba Rugi)</v-tab>
      <v-tab value="journal">Jurnal Umum (Debet / Kredit)</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <!-- Tab 1: Posisi Keuangan -->
      <v-window-item value="balance">
        <v-row class="mb-6" v-if="reportStore.balanceSheet">
          <v-col cols="12" md="6">
            <v-card 
              class="pa-6 rounded-xl border h-100"
              :class="isDarkTheme ? 'glass-card text-white border-dark' : 'bg-white text-black border-light elevation-2'"
            >
              <div class="d-flex align-center mb-4">
                <v-icon icon="mdi-bank" color="primary" size="28" class="mr-3"></v-icon>
                <div>
                  <h3 class="text-h6 font-weight-bold" :class="isDarkTheme ? 'text-white' : 'text-black'">Aset Kas & Rekening Bank</h3>
                  <div class="text-caption" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Total sisa saldo per rekening</div>
                </div>
              </div>
              <v-divider class="mb-4" :class="isDarkTheme ? 'border-dark' : 'border-light'"></v-divider>
              <div v-for="asset in reportStore.balanceSheet.assets" :key="asset.id" class="d-flex justify-space-between align-center mb-3">
                <div>
                  <div class="font-weight-bold" :class="isDarkTheme ? 'text-white' : 'text-black'">{{ asset.name }}</div>
                  <div class="text-caption" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">{{ asset.type === 'CASH' ? 'Kas Tunai' : `Bank (${asset.bankName || ''})` }}</div>
                </div>
                <div class="font-weight-black text-subtitle-1 text-success">
                  {{ formatCurrency(asset.balance) }}
                </div>
              </div>
              <v-divider class="my-4" :class="isDarkTheme ? 'border-dark' : 'border-light'"></v-divider>
              <div class="d-flex justify-space-between align-center">
                <span class="font-weight-bold" :class="isDarkTheme ? 'text-white' : 'text-black'">Total Aset Kas:</span>
                <span class="font-weight-black text-h5 text-primary">{{ formatCurrency(reportStore.balanceSheet.totalAssets) }}</span>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card 
              class="pa-6 rounded-xl border h-100"
              :class="isDarkTheme ? 'glass-card text-white border-dark' : 'bg-white text-black border-light elevation-2'"
            >
              <div class="d-flex align-center mb-4">
                <v-icon icon="mdi-folder-account" color="warning" size="28" class="mr-3"></v-icon>
                <div>
                  <h3 class="text-h6 font-weight-bold" :class="isDarkTheme ? 'text-white' : 'text-black'">Saldo Per Pos Dana</h3>
                  <div class="text-caption" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Pemisahan dana terikat & kas umum</div>
                </div>
              </div>
              <v-divider class="mb-4" :class="isDarkTheme ? 'border-dark' : 'border-light'"></v-divider>
              <div v-for="fund in reportStore.balanceSheet.fundBalances" :key="fund.id" class="d-flex justify-space-between align-center mb-3">
                <div>
                  <div class="font-weight-bold" :class="isDarkTheme ? 'text-white' : 'text-black'">{{ fund.name }}</div>
                  <v-chip size="x-small" :color="getFundColor(fund.fundType)" class="mt-1 font-weight-bold">{{ fund.fundType }}</v-chip>
                </div>
                <div class="font-weight-black text-subtitle-1" :class="fund.balance >= 0 ? (isDarkTheme ? 'text-white' : 'text-black') : 'text-error'">
                  {{ formatCurrency(fund.balance) }}
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>

      <!-- Tab 2: Laporan Aktivitas -->
      <v-window-item value="activity">
        <v-card 
          class="pa-6 rounded-xl border"
          :class="isDarkTheme ? 'glass-card border-dark' : 'bg-white border-light elevation-2'"
          v-if="reportStore.activityReport"
        >
          <h3 class="text-h6 font-weight-bold mb-4" :class="isDarkTheme ? 'text-white' : 'text-black'">Mutasi Per Pos Dana</h3>
          <div 
            v-for="cat in reportStore.activityReport.categories" 
            :key="cat.fundCategory.id" 
            class="mb-6 pa-4 rounded-lg border"
            :class="isDarkTheme ? 'bg-black-thin border-dark' : 'bg-grey-lighten-4 border-light'"
          >
            <div class="d-flex justify-space-between align-center mb-3">
              <div>
                <h4 class="text-subtitle-1 font-weight-bold text-primary">{{ cat.fundCategory.name }}</h4>
                <div class="text-caption" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">{{ cat.fundCategory.description || '' }}</div>
              </div>
              <div class="text-right">
                <div class="text-caption" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Surplus / Defisit:</div>
                <div class="font-weight-black text-h6" :class="cat.netSurplus >= 0 ? 'text-success' : 'text-error'">
                  {{ formatCurrency(cat.netSurplus) }}
                </div>
              </div>
            </div>
            <v-row density="compact">
              <v-col cols="6">
                <div class="text-caption" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Total Pemasukan:</div>
                <div class="font-weight-bold text-success">{{ formatCurrency(cat.totalIncome) }}</div>
              </v-col>
              <v-col cols="6">
                <div class="text-caption" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Total Pengeluaran:</div>
                <div class="font-weight-bold text-error">{{ formatCurrency(cat.totalExpense) }}</div>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-window-item>

      <!-- Tab 3: Jurnal Umum -->
      <v-window-item value="journal">
        <v-card 
          class="pa-6 rounded-xl border"
          :class="isDarkTheme ? 'glass-card border-dark' : 'bg-white border-light elevation-2'"
        >
          <h3 class="text-h6 font-weight-bold mb-4" :class="isDarkTheme ? 'text-white' : 'text-black'">Catatan Jurnal Umum (Double-Entry)</h3>
          <v-table :theme="isDarkTheme ? 'dark' : 'light'" class="bg-transparent">
            <thead>
              <tr>
                <th>No. Jurnal</th>
                <th>Tanggal</th>
                <th>Keterangan</th>
                <th>Kode & Nama Akun</th>
                <th class="text-right">Debet (Rp)</th>
                <th class="text-right">Kredit (Rp)</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="entry in reportStore.journalEntries" :key="entry.id">
                <tr v-for="(item, idx) in entry.items" :key="item.id">
                  <td v-if="idx === 0" :rowspan="entry.items.length" class="font-weight-bold text-primary border-b" :class="isDarkTheme ? 'border-dark' : 'border-light'">
                    {{ entry.entryNumber }}
                  </td>
                  <td v-if="idx === 0" :rowspan="entry.items.length" class="text-caption border-b" :class="isDarkTheme ? 'border-dark' : 'border-light'">
                    {{ formatDate(entry.date) }}
                  </td>
                  <td v-if="idx === 0" :rowspan="entry.items.length" class="border-b" :class="isDarkTheme ? 'border-dark' : 'border-light'">
                    {{ entry.description }}
                  </td>
                  <td>
                    <span class="font-weight-bold text-caption mr-2 text-warning">{{ item.chart.code }}</span>
                    <span>{{ item.chart.name }}</span>
                  </td>
                  <td class="text-right font-weight-bold" :class="item.debit > 0 ? 'text-success' : 'text-grey'">
                    {{ item.debit > 0 ? formatCurrency(item.debit) : '-' }}
                  </td>
                  <td class="text-right font-weight-bold" :class="item.credit > 0 ? 'text-error' : 'text-grey'">
                    {{ item.credit > 0 ? formatCurrency(item.credit) : '-' }}
                  </td>
                </tr>
              </template>
              <tr v-if="reportStore.journalEntries.length === 0">
                <td colspan="6" class="text-center py-6 text-grey">Belum ada jurnal transaksi di periode ini</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { useReportStore } from '../stores/report'

const theme = useTheme()
const isDarkTheme = computed(() => theme.global.name.value === 'dark' || theme.global.current.value.dark)

const reportStore = useReportStore()
const tab = ref('balance')

const selectedMonth = ref(new Date().getMonth() + 1)
const selectedYear = ref(new Date().getFullYear())

const months = [
  { title: 'Januari', value: 1 },
  { title: 'Februari', value: 2 },
  { title: 'Maret', value: 3 },
  { title: 'April', value: 4 },
  { title: 'Mei', value: 5 },
  { title: 'Juni', value: 6 },
  { title: 'Juli', value: 7 },
  { title: 'Agustus', value: 8 },
  { title: 'September', value: 9 },
  { title: 'Oktober', value: 10 },
  { title: 'November', value: 11 },
  { title: 'Desember', value: 12 }
]

const years = [2024, 2025, 2026, 2027]

const loadReports = async () => {
  await reportStore.fetchBalanceSheet()
  await reportStore.fetchActivityReport(selectedMonth.value, selectedYear.value)
  await reportStore.fetchJournal(selectedMonth.value, selectedYear.value)
}

onMounted(() => {
  loadReports()
})

const formatCurrency = (val: any) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(Number(val) || 0)
}

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
}

const getFundColor = (type: string) => {
  if (type === 'UNRESTRICTED') return 'success'
  if (type === 'RESTRICTED_YATIM') return 'warning'
  if (type === 'RESTRICTED_BUILDING') return 'info'
  return 'secondary'
}

const printReport = () => {
  window.print()
}
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.05) !important;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.bg-black-thin {
  background: rgba(0, 0, 0, 0.2);
}
.border-dark {
  border-color: rgba(255, 255, 255, 0.12) !important;
}
.border-light {
  border-color: rgba(0, 0, 0, 0.12) !important;
}
</style>
