<template>
  <div>
    <!-- Header -->
    <div class="d-flex flex-column flex-md-row justify-space-between align-start align-md-center mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold mb-1" :class="isDarkTheme ? 'text-white' : 'text-black'">Kas & Rekening Bank</h1>
        <p class="text-body-2" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Kelola dompet/rekening kas dan transfer saldo antar rekening.</p>
      </div>

      <div class="d-flex gap-3 mt-4 mt-md-0">
        <v-btn color="secondary" prepend-icon="mdi-swap-horizontal" rounded="pill" elevation="4" @click="showTransferModal = true">
          Transfer Saldo
        </v-btn>
        <v-btn color="primary" prepend-icon="mdi-plus" rounded="pill" elevation="4" @click="showAccountModal = true">
          Tambah Rekening
        </v-btn>
      </div>
    </div>

    <!-- Cards Grid -->
    <v-row class="mb-6">
      <v-col v-for="acc in accountStore.accounts" :key="acc.id" cols="12" sm="6" md="4">
        <v-card class="glass-card pa-6 h-100 position-relative">
          <div class="d-flex justify-space-between align-start mb-4">
            <div>
              <v-chip size="x-small" :color="acc.type === 'CASH' ? 'success' : 'primary'" class="mb-2 font-weight-bold">
                {{ acc.type === 'CASH' ? 'Kas Tunai' : `Bank ${acc.bankName || ''}` }}
              </v-chip>
              <h3 class="text-h6 font-weight-bold" :class="isDarkTheme ? 'text-white' : 'text-black'">{{ acc.name }}</h3>
              <div class="text-caption" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">{{ acc.accountNumber || 'Tanpa no. rekening' }}</div>
            </div>
            <v-avatar :color="acc.type === 'CASH' ? 'success' : 'primary'" variant="tonal" size="48">
              <v-icon :icon="acc.type === 'CASH' ? 'mdi-cash-multiple' : 'mdi-bank'"></v-icon>
            </v-avatar>
          </div>
          <div class="mt-4">
            <div class="text-caption" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Saldo Saat Ini:</div>
            <div class="text-h4 font-weight-black" :class="isDarkTheme ? 'text-white' : 'text-black'">{{ formatCurrency(acc.balance) }}</div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Table Transfer History -->
    <v-card class="glass-card pa-6">
      <h3 class="text-h6 font-weight-bold mb-4" :class="isDarkTheme ? 'text-white' : 'text-black'">Riwayat Transfer Antar Rekening</h3>
      <v-table :theme="isDarkTheme ? 'dark' : 'light'" class="bg-transparent">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Rekening Asal</th>
            <th>Rekening Tujuan</th>
            <th>Keterangan</th>
            <th class="text-right">Jumlah (Rp)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="trf in accountStore.transfers" :key="trf.id">
            <td class="font-weight-medium">{{ formatDate(trf.date) }}</td>
            <td class="font-weight-bold text-error">{{ trf.sourceAccount.name }}</td>
            <td class="font-weight-bold text-success">{{ trf.targetAccount.name }}</td>
            <td>{{ trf.description || '-' }}</td>
            <td class="text-right font-weight-black" :class="isDarkTheme ? 'text-white' : 'text-black'">{{ formatCurrency(trf.amount) }}</td>
          </tr>
          <tr v-if="accountStore.transfers.length === 0">
            <td colspan="5" class="text-center py-6 text-grey">Belum ada riwayat transfer</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

    <!-- Modal Tambah Rekening -->
    <v-dialog v-model="showAccountModal" max-width="480">
      <v-card 
        class="pa-6 rounded-xl modal-card-fixed"
        :class="isDarkTheme ? 'modal-dark' : 'modal-light'"
        :style="isDarkTheme ? 'background-color: #1E222B !important; color: #FFFFFF !important;' : 'background-color: #FFFFFF !important; color: #121212 !important;'"
      >
        <div class="d-flex align-center justify-space-between mb-4">
          <h3 class="text-h6 font-weight-bold" :style="isDarkTheme ? 'color: #FFFFFF !important;' : 'color: #121212 !important;'">Tambah Rekening / Kas Baru</h3>
          <v-btn icon="mdi-close" variant="text" size="small" :color="isDarkTheme ? 'white' : 'black'" @click="showAccountModal = false"></v-btn>
        </div>

        <v-form @submit.prevent="handleCreateAccount">
          <v-text-field 
            v-model="accountForm.name" 
            label="Nama Kas / Rekening" 
            variant="outlined" 
            density="compact" 
            required 
            class="mb-3"
            rounded="lg"
            :bg-color="isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F5F7FA'"
            :base-color="isDarkTheme ? 'white' : 'black'"
          ></v-text-field>

          <v-select 
            v-model="accountForm.type" 
            :items="accountTypes" 
            label="Tipe Rekening" 
            variant="outlined" 
            density="compact" 
            required 
            class="mb-3"
            rounded="lg"
            :bg-color="isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F5F7FA'"
            :base-color="isDarkTheme ? 'white' : 'black'"
          ></v-select>

          <v-text-field 
            v-if="accountForm.type === 'BANK'" 
            v-model="accountForm.bankName" 
            label="Nama Bank (Misal: BSI, Mandiri)" 
            variant="outlined" 
            density="compact" 
            class="mb-3"
            rounded="lg"
            :bg-color="isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F5F7FA'"
            :base-color="isDarkTheme ? 'white' : 'black'"
          ></v-text-field>

          <v-text-field 
            v-if="accountForm.type === 'BANK'" 
            v-model="accountForm.accountNumber" 
            label="Nomor Rekening" 
            variant="outlined" 
            density="compact" 
            class="mb-3"
            rounded="lg"
            :bg-color="isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F5F7FA'"
            :base-color="isDarkTheme ? 'white' : 'black'"
          ></v-text-field>

          <v-text-field 
            v-model.number="accountForm.balance" 
            label="Saldo Awal (Rp)" 
            type="number" 
            variant="outlined" 
            density="compact" 
            class="mb-3"
            rounded="lg"
            :bg-color="isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F5F7FA'"
            :base-color="isDarkTheme ? 'white' : 'black'"
          ></v-text-field>

          <div class="d-flex justify-end gap-2 mt-6">
            <v-btn variant="tonal" :color="isDarkTheme ? 'white' : 'grey-darken-3'" rounded="pill" class="px-5" @click="showAccountModal = false">Batal</v-btn>
            <v-btn color="primary" variant="flat" type="submit" :loading="loading" rounded="pill" class="px-6 font-weight-bold">Simpan Rekening</v-btn>
          </div>
        </v-form>
      </v-card>
    </v-dialog>

    <!-- Modal Transfer Saldo -->
    <v-dialog v-model="showTransferModal" max-width="480">
      <v-card 
        class="pa-6 rounded-xl modal-card-fixed"
        :class="isDarkTheme ? 'modal-dark' : 'modal-light'"
        :style="isDarkTheme ? 'background-color: #1E222B !important; color: #FFFFFF !important;' : 'background-color: #FFFFFF !important; color: #121212 !important;'"
      >
        <div class="d-flex align-center justify-space-between mb-4">
          <h3 class="text-h6 font-weight-bold" :style="isDarkTheme ? 'color: #FFFFFF !important;' : 'color: #121212 !important;'">Transfer Saldo Antar Rekening</h3>
          <v-btn icon="mdi-close" variant="text" size="small" :color="isDarkTheme ? 'white' : 'black'" @click="showTransferModal = false"></v-btn>
        </div>

        <v-form @submit.prevent="handleTransfer">
          <v-select 
            v-model="transferForm.sourceAccountId" 
            :items="accountStore.accounts" 
            item-title="name" 
            item-value="id" 
            label="Dari Rekening (Asal)" 
            variant="outlined" 
            density="compact" 
            required 
            class="mb-3"
            rounded="lg"
            :bg-color="isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F5F7FA'"
            :base-color="isDarkTheme ? 'white' : 'black'"
          ></v-select>

          <v-select 
            v-model="transferForm.targetAccountId" 
            :items="accountStore.accounts" 
            item-title="name" 
            item-value="id" 
            label="Ke Rekening (Tujuan)" 
            variant="outlined" 
            density="compact" 
            required 
            class="mb-3"
            rounded="lg"
            :bg-color="isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F5F7FA'"
            :base-color="isDarkTheme ? 'white' : 'black'"
          ></v-select>

          <v-text-field 
            v-model.number="transferForm.amount" 
            label="Jumlah Transfer (Rp)" 
            type="number" 
            variant="outlined" 
            density="compact" 
            required 
            class="mb-3"
            rounded="lg"
            :bg-color="isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F5F7FA'"
            :base-color="isDarkTheme ? 'white' : 'black'"
          ></v-text-field>

          <v-text-field 
            v-model="transferForm.description" 
            label="Keterangan Transfer" 
            variant="outlined" 
            density="compact" 
            class="mb-3"
            rounded="lg"
            :bg-color="isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F5F7FA'"
            :base-color="isDarkTheme ? 'white' : 'black'"
          ></v-text-field>

          <div class="d-flex justify-end gap-2 mt-6">
            <v-btn variant="tonal" :color="isDarkTheme ? 'white' : 'grey-darken-3'" rounded="pill" class="px-5" @click="showTransferModal = false">Batal</v-btn>
            <v-btn color="secondary" variant="flat" type="submit" :loading="loading" rounded="pill" class="px-6 font-weight-bold">Transfer Sekarang</v-btn>
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { useAccountStore } from '../stores/account'

const theme = useTheme()
const isDarkTheme = computed(() => theme.global.name.value === 'dark')

const accountStore = useAccountStore()
const loading = ref(false)
const showAccountModal = ref(false)
const showTransferModal = ref(false)

const accountTypes = [
  { title: 'Kas Tunai', value: 'CASH' },
  { title: 'Rekening Bank', value: 'BANK' },
  { title: 'E-Wallet / QRIS', value: 'EWALLET' }
]

const accountForm = ref({
  name: '',
  type: 'CASH',
  bankName: '',
  accountNumber: '',
  balance: 0
})

const transferForm = ref({
  sourceAccountId: null as number | null,
  targetAccountId: null as number | null,
  amount: 0,
  description: '',
  date: new Date().toISOString().split('T')[0]
})

onMounted(async () => {
  await accountStore.fetchAccounts()
  await accountStore.fetchTransfers()
})

const handleCreateAccount = async () => {
  loading.value = true
  try {
    await accountStore.createAccount(accountForm.value)
    showAccountModal.value = false
    accountForm.value = { name: '', type: 'CASH', bankName: '', accountNumber: '', balance: 0 }
  } catch (e: any) {
    alert(e.response?.data?.message || 'Gagal membuat rekening')
  } finally {
    loading.value = false
  }
}

const handleTransfer = async () => {
  if (!transferForm.value.sourceAccountId || !transferForm.value.targetAccountId) return
  loading.value = true
  try {
    await accountStore.transfer(transferForm.value)
    showTransferModal.value = false
    transferForm.value = { sourceAccountId: null, targetAccountId: null, amount: 0, description: '', date: new Date().toISOString().split('T')[0] }
  } catch (e: any) {
    alert(e.response?.data?.message || 'Gagal melakukan transfer')
  } finally {
    loading.value = false
  }
}

const formatCurrency = (val: any) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(Number(val) || 0)
}

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
}
</script>

<style scoped>
.gap-2 {
  gap: 8px;
}
.gap-3 {
  gap: 12px;
}

/* Explicit Modal Scoped Styling for Pure White Light Mode */
.modal-light {
  background-color: #FFFFFF !important;
  color: #121212 !important;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2) !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
}

.modal-light :deep(h3),
.modal-light :deep(.v-card-text),
.modal-light :deep(label),
.modal-light :deep(span) {
  color: #121212 !important;
}

.modal-light :deep(.v-field) {
  background-color: #F5F7FA !important;
  color: #121212 !important;
  border-color: rgba(0, 0, 0, 0.2) !important;
}

.modal-light :deep(.v-field__input) {
  color: #121212 !important;
}

.modal-light :deep(.v-label) {
  color: #444444 !important;
  opacity: 1 !important;
}

.modal-dark {
  background-color: #1E222B !important;
  color: #FFFFFF !important;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6) !important;
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
}

.modal-dark :deep(h3),
.modal-dark :deep(.v-card-text),
.modal-dark :deep(label),
.modal-dark :deep(span) {
  color: #FFFFFF !important;
}

.modal-dark :deep(.v-field) {
  background-color: rgba(255, 255, 255, 0.05) !important;
  color: #FFFFFF !important;
}

.modal-dark :deep(.v-field__input) {
  color: #FFFFFF !important;
}
</style>
