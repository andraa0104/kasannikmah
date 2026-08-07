<template>
  <div class="landing-page min-vh-100" :class="isDarkTheme ? 'bg-black' : 'bg-grey-lighten-4'">
    
    <!-- iOS Style Floating Header -->
    <v-app-bar 
      elevation="0" 
      color="transparent" 
      height="80"
      class="pt-4 px-2 px-md-8"
      style="position: fixed; z-index: 100;"
    >
      <div class="d-flex w-100 align-center glass-header px-6 py-2 mx-auto" style="max-width: 1200px;">
        <div class="d-flex align-center">
          <v-avatar size="44" class="mr-3 glass-avatar">
            <v-img :src="logoImage"></v-img>
          </v-avatar>
          <span class="text-h6 font-weight-black letter-spacing-tight d-none d-sm-block" :class="isDarkTheme ? 'text-white' : 'text-black'">An-Ni'mah</span>
        </div>
        
        <v-spacer></v-spacer>

        <!-- Navigation Links (Desktop) -->
        <div class="d-none d-md-flex align-center mr-6">
          <v-btn variant="text" class="font-weight-bold mx-1" :color="isDarkTheme ? 'white' : 'black'" @click="scrollTo('profil')">Profil</v-btn>
          <v-btn variant="text" class="font-weight-bold mx-1" :color="isDarkTheme ? 'white' : 'black'" @click="scrollTo('kegiatan')">Kegiatan</v-btn>
          <v-btn variant="text" class="font-weight-bold mx-1" :color="isDarkTheme ? 'white' : 'black'" @click="scrollTo('galeri')">Galeri</v-btn>
          <v-btn variant="text" class="font-weight-bold mx-1" :color="isDarkTheme ? 'white' : 'black'" @click="scrollTo('laporan')">Kas</v-btn>
        </div>

        <v-btn icon @click="toggleTheme" :color="isDarkTheme ? 'white' : 'black'" variant="text" class="mr-2">
          <v-icon size="26">{{ isDarkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
        </v-btn>
        
        <v-btn
          color="primary"
          class="font-weight-bold ios-btn elevation-2"
          rounded="pill"
          to="/login"
        >
          <v-icon start size="20">mdi-login</v-icon>
          <span class="d-none d-sm-inline">Masuk</span>
        </v-btn>
      </div>
    </v-app-bar>

    <!-- Hero Section -->
    <div class="hero-container position-relative w-100" :style="`background-image: url('${heroImage}')`">
      <div class="hero-overlay" :class="isDarkTheme ? 'overlay-dark' : 'overlay-light'"></div>
      <v-container class="position-relative z-index-2 pt-16 mt-16 h-100 d-flex flex-column justify-center align-center text-center">
        <v-chip class="mb-6 font-weight-bold blur-chip" variant="outlined" size="large" color="white">
          <v-icon start>mdi-mosque</v-icon>
          Selamat Datang
        </v-chip>
        <h1 class="text-h3 text-md-h2 font-weight-black mb-4 letter-spacing-tight hero-title text-white">
          Langgar <span class="text-primary-lighten-2">An-Ni'mah</span>
        </h1>
        <p class="text-h6 text-md-h5 mb-10 font-weight-medium hero-subtitle text-grey-lighten-3" style="max-width: 700px; line-height: 1.6;">
          Pusat kegiatan ibadah dan silaturahmi untuk Jamaah Gang Bali RT. 01, Loa Janan.
        </p>
        <div class="d-flex justify-center flex-wrap gap-4">
          <v-btn size="x-large" color="primary" rounded="pill" class="font-weight-bold elevation-4 px-8" @click="scrollTo('profil')">
            Mengenal Kami
          </v-btn>
          <v-btn size="x-large" variant="outlined" color="white" rounded="pill" class="font-weight-bold px-8 bg-glass" @click="scrollTo('laporan')">
            Laporan Kas
          </v-btn>
        </div>
      </v-container>
    </div>

    <!-- Main Content Container -->
    <v-container class="position-relative z-index-3 mx-auto px-4 px-md-8" style="max-width: 1200px;">
      
      <!-- Profil Section -->
      <section id="profil" class="py-16">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-black letter-spacing-tight mb-4" :class="isDarkTheme ? 'text-white' : 'text-black'">Profil Langgar</h2>
          <p class="text-body-1 mx-auto" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'" style="max-width: 600px;">
            Langgar An-Ni'mah adalah pusat kegiatan keagamaan dan sosial bagi warga Gang Bali. Kami berkomitmen untuk membangun generasi Islami yang cerdas dan berakhlak mulia.
          </p>
        </div>
        <v-row>
          <v-col cols="12" md="6">
            <div class="ios-widget pa-8 h-100 d-flex flex-column justify-center" :class="isDarkTheme ? 'bg-dark-surface' : 'bg-white'">
              <v-icon size="48" color="primary" class="mb-4">mdi-eye-outline</v-icon>
              <h3 class="text-h5 font-weight-bold mb-3" :class="isDarkTheme ? 'text-white' : 'text-black'">Visi Kami</h3>
              <p class="text-body-1" :class="isDarkTheme ? 'text-grey-lighten-1' : 'text-grey-darken-2'">
                Menjadikan Langgar An-Ni'mah sebagai pusat ibadah dan pembinaan umat yang makmur, mandiri, dan membawa rahmat bagi lingkungan sekitar.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="ios-widget pa-8 h-100 d-flex flex-column justify-center" :class="isDarkTheme ? 'bg-dark-surface' : 'bg-white'">
              <v-icon size="48" color="secondary" class="mb-4">mdi-target</v-icon>
              <h3 class="text-h5 font-weight-bold mb-3" :class="isDarkTheme ? 'text-white' : 'text-black'">Misi Kami</h3>
              <ul class="text-body-1 pl-4" :class="isDarkTheme ? 'text-grey-lighten-1' : 'text-grey-darken-2'">
                <li class="mb-2">Menyelenggarakan kegiatan ibadah yang tertib dan nyaman.</li>
                <li class="mb-2">Membina generasi muda melalui pendidikan TPA dan pengajian.</li>
                <li>Mengelola dana umat secara transparan dan akuntabel.</li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </section>

      <!-- Kegiatan Section -->
      <section id="kegiatan" class="py-16">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-black letter-spacing-tight mb-4" :class="isDarkTheme ? 'text-white' : 'text-black'">Kegiatan Rutin</h2>
          <p class="text-body-1 mx-auto" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'" style="max-width: 600px;">
            Mari bergabung bersama kami dalam berbagai kegiatan rutin yang diselenggarakan di Langgar An-Ni'mah.
          </p>
        </div>
        <v-row>
          <v-col cols="12" sm="4">
            <div class="ios-widget text-center pa-6" :class="isDarkTheme ? 'bg-dark-surface' : 'bg-white'">
              <v-avatar color="primary-lighten" size="72" class="mb-4">
                <v-icon size="36" color="primary">mdi-book-open-page-variant</v-icon>
              </v-avatar>
              <h4 class="text-h6 font-weight-bold mb-2">TPA Anak-anak</h4>
              <p class="text-caption mb-0" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Setiap Senin - Jumat<br>Ba'da Ashar</p>
            </div>
          </v-col>
          <v-col cols="12" sm="4">
            <div class="ios-widget text-center pa-6" :class="isDarkTheme ? 'bg-dark-surface' : 'bg-white'">
              <v-avatar color="success-lighten" size="72" class="mb-4">
                <v-icon size="36" color="success">mdi-account-group</v-icon>
              </v-avatar>
              <h4 class="text-h6 font-weight-bold mb-2">Majelis Taklim</h4>
              <p class="text-caption mb-0" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Setiap Malam Jumat<br>Ba'da Maghrib</p>
            </div>
          </v-col>
          <v-col cols="12" sm="4">
            <div class="ios-widget text-center pa-6" :class="isDarkTheme ? 'bg-dark-surface' : 'bg-white'">
              <v-avatar color="warning-lighten" size="72" class="mb-4">
                <v-icon size="36" color="warning">mdi-hand-heart</v-icon>
              </v-avatar>
              <h4 class="text-h6 font-weight-bold mb-2">Bakti Sosial</h4>
              <p class="text-caption mb-0" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Jumat Berkah<br>Setiap Ba'da Jumat</p>
            </div>
          </v-col>
        </v-row>
      </section>

      <!-- Galeri Section -->
      <section id="galeri" class="py-16">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-black letter-spacing-tight mb-4" :class="isDarkTheme ? 'text-white' : 'text-black'">Galeri Foto</h2>
          <p class="text-body-1 mx-auto" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'" style="max-width: 600px;">
            Dokumentasi momen-momen kebersamaan dan kegiatan Jamaah.
          </p>
        </div>
        <v-row>
          <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4">
            <div class="ios-widget gallery-img overflow-hidden" :class="isDarkTheme ? 'bg-dark-surface' : 'bg-grey-lighten-2'" style="height: 200px; display: flex; align-items: center; justify-content: center;">
              <v-icon size="64" :color="isDarkTheme ? 'grey-darken-2' : 'grey-lighten-1'">mdi-image-outline</v-icon>
            </div>
          </v-col>
        </v-row>
      </section>

      <v-divider class="my-12" :class="isDarkTheme ? 'border-dark' : 'border-light'"></v-divider>

      <!-- Laporan Keuangan Section -->
      <section id="laporan" class="py-8">
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-black letter-spacing-tight mb-4" :class="isDarkTheme ? 'text-white' : 'text-black'">Laporan Keuangan</h2>
          <p class="text-body-1 mx-auto" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'" style="max-width: 600px;">
            Transparansi dana umat. Data di bawah ini akan otomatis menyesuaikan dengan ketersediaan riwayat transaksi.
          </p>
        </div>

        <!-- Filter Section (iOS Control Center style) -->
        <div class="glass-panel mb-8 pa-4 pa-md-6 d-flex flex-column flex-md-row align-center justify-space-between">
          <div class="d-flex align-center mb-4 mb-md-0">
            <div class="icon-box bg-primary-lighten mr-4">
              <v-icon color="primary" size="28">mdi-calendar-month</v-icon>
            </div>
            <div>
              <div class="text-h6 font-weight-bold" :class="isDarkTheme ? 'text-white' : 'text-black'">Periode Laporan</div>
              <div class="text-body-2" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Hanya menampilkan data yang tersedia</div>
            </div>
          </div>
          
          <div class="d-flex align-center gap-4 w-100 w-md-auto">
            <v-select
              v-model="currentMonth"
              :items="availableMonths"
              item-title="title"
              item-value="value"
              variant="solo-filled"
              density="compact"
              hide-details
              rounded="xl"
              class="ios-select flex-grow-1 flex-md-grow-0"
              style="min-width: 140px;"
              :disabled="availableYears.length === 0"
              @update:model-value="fetchPublicData"
            ></v-select>
            <v-select
              v-model="currentYear"
              :items="availableYears"
              variant="solo-filled"
              density="compact"
              hide-details
              rounded="xl"
              class="ios-select flex-grow-1 flex-md-grow-0"
              style="min-width: 120px;"
              :disabled="availableYears.length === 0"
              @update:model-value="onYearChange"
            ></v-select>
          </div>
        </div>

        <div v-if="availableYears.length === 0" class="text-center pa-12 ios-widget" :class="isDarkTheme ? 'bg-dark-surface' : 'bg-white'">
          <v-icon size="64" color="grey" class="mb-4">mdi-database-off-outline</v-icon>
          <h3 class="text-h5 font-weight-bold mb-2">Belum Ada Data</h3>
          <p class="text-body-1 text-grey">Sistem belum memiliki catatan riwayat transaksi apapun saat ini.</p>
        </div>

        <template v-else>
          <!-- Financial Widgets -->
          <v-row class="mb-10">
            <!-- Income Widget -->
            <v-col cols="12" md="4">
              <div class="ios-widget pa-6 d-flex flex-column h-100" :class="isDarkTheme ? 'bg-dark-surface' : 'bg-white'">
                <div class="d-flex justify-space-between align-start mb-auto">
                  <div>
                    <div class="text-body-2 font-weight-bold text-uppercase letter-spacing-wide mb-1" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Pemasukan</div>
                    <div class="text-h4 font-weight-black text-success">{{ formatCurrency(summary.income) }}</div>
                  </div>
                  <div class="widget-icon bg-success-lighten text-success">
                    <v-icon size="28">mdi-arrow-top-right</v-icon>
                  </div>
                </div>
                <div class="mt-6 text-caption font-weight-medium" :class="isDarkTheme ? 'text-grey-darken-1' : 'text-grey'">
                  Total dana masuk di bulan {{ currentMonthName }}
                </div>
              </div>
            </v-col>
            
            <!-- Expense Widget -->
            <v-col cols="12" md="4">
              <div class="ios-widget pa-6 d-flex flex-column h-100" :class="isDarkTheme ? 'bg-dark-surface' : 'bg-white'">
                <div class="d-flex justify-space-between align-start mb-auto">
                  <div>
                    <div class="text-body-2 font-weight-bold text-uppercase letter-spacing-wide mb-1" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Pengeluaran</div>
                    <div class="text-h4 font-weight-black text-error">{{ formatCurrency(summary.expense) }}</div>
                  </div>
                  <div class="widget-icon bg-error-lighten text-error">
                    <v-icon size="28">mdi-arrow-bottom-right</v-icon>
                  </div>
                </div>
                <div class="mt-6 text-caption font-weight-medium" :class="isDarkTheme ? 'text-grey-darken-1' : 'text-grey'">
                  Total dana keluar di bulan {{ currentMonthName }}
                </div>
              </div>
            </v-col>

            <!-- Balance Widget (Primary Accent) -->
            <v-col cols="12" md="4">
              <div class="ios-widget widget-primary pa-6 d-flex flex-column h-100 text-white">
                <div class="d-flex justify-space-between align-start mb-auto">
                  <div>
                    <div class="text-body-2 font-weight-bold text-uppercase letter-spacing-wide mb-1 opacity-80">Sisa Saldo Kas</div>
                    <div class="text-h3 font-weight-black mb-1">{{ formatCurrency(summary.balance) }}</div>
                  </div>
                </div>
                <div class="mt-4 d-flex align-center">
                  <div class="widget-icon bg-white text-primary mr-3" style="width: 36px; height: 36px;">
                    <v-icon size="20">mdi-wallet-bifold</v-icon>
                  </div>
                  <div class="text-caption font-weight-medium opacity-90">
                    Saldo akhir periode terpilih
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- Transactions Section -->
          <div class="ios-widget pa-0 overflow-hidden mb-12" :class="isDarkTheme ? 'bg-dark-surface' : 'bg-white'">
            <div class="pa-6 pa-md-8 border-b" :class="isDarkTheme ? 'border-dark' : 'border-light'">
              <div class="d-flex flex-column flex-md-row justify-space-between align-md-center">
                <div class="mb-4 mb-md-0">
                  <h3 class="text-h4 font-weight-black mb-2 letter-spacing-tight" :class="isDarkTheme ? 'text-white' : 'text-black'">Riwayat Transaksi</h3>
                  <p class="text-body-1 mb-0 font-weight-medium" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">
                    Rincian mutasi keuangan untuk periode berjalan.
                  </p>
                </div>
                <div>
                  <v-chip class="font-weight-bold px-4" size="large" :color="isDarkTheme ? 'grey-darken-3' : 'grey-lighten-3'" :text-color="isDarkTheme ? 'white' : 'black'">
                    <v-icon start>mdi-calendar-check</v-icon>
                    {{ currentMonthName }} {{ currentYear }}
                  </v-chip>
                </div>
              </div>

              <!-- Search and Filter Tools -->
              <div class="mt-6 d-flex flex-column flex-sm-row gap-4">
                <v-select
                  v-model="searchBy"
                  :items="searchOptions"
                  item-title="title"
                  item-value="value"
                  label="Cari Berdasarkan"
                  variant="outlined"
                  density="compact"
                  hide-details
                  class="ios-select flex-grow-0"
                  style="min-width: 200px;"
                ></v-select>
                <v-text-field
                  v-model="search"
                  prepend-inner-icon="mdi-magnify"
                  label="Masukkan kata kunci pencarian..."
                  variant="outlined"
                  density="compact"
                  hide-details
                  class="ios-input flex-grow-1"
                  clearable
                ></v-text-field>
              </div>
            </div>

            <!-- Desktop View: Data Table -->
            <v-data-table
              v-if="mdAndUp"
              :headers="headers"
              :items="filteredTransactions"
              :loading="loading"
              class="ios-table"
              :class="isDarkTheme ? 'theme--dark' : 'theme--light'"
              hover
              v-model:items-per-page="itemsPerPage"
              :items-per-page-options="itemsPerPageOptions"
              v-model:page="page"
            >
              <!-- eslint-disable-next-line vue/valid-v-slot -->
              <template #item.date="{ item }">
                <span class="font-weight-bold">{{ formatDate(item.date) }}</span>
              </template>
              <!-- eslint-disable-next-line vue/valid-v-slot -->
              <template #item.description="{ item }">
                <span class="font-weight-medium" :class="isDarkTheme ? 'text-grey-lighten-2' : 'text-grey-darken-3'">{{ item.description }}</span>
              </template>
              <!-- eslint-disable-next-line vue/valid-v-slot -->
              <template #item.type="{ item }">
                <div class="d-flex align-center">
                  <div 
                    class="status-dot mr-2" 
                    :class="item.type === 'INCOME' ? 'bg-success' : 'bg-error'"
                  ></div>
                  <span class="font-weight-bold text-caption text-uppercase" :class="item.type === 'INCOME' ? 'text-success' : 'text-error'">
                    {{ item.type === 'INCOME' ? 'Pemasukan' : 'Pengeluaran' }}
                  </span>
                </div>
              </template>
              <!-- eslint-disable-next-line vue/valid-v-slot -->
              <template #item.category="{ item }">
                <span class="text-body-2 font-weight-medium" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">{{ item.category }}</span>
              </template>
              <!-- eslint-disable-next-line vue/valid-v-slot -->
              <template #item.amount="{ item }">
                <span class="font-weight-black text-h6" :class="item.type === 'INCOME' ? 'text-success' : 'text-error'">
                  {{ item.type === 'INCOME' ? '+' : '-' }}{{ formatCurrency(item.amount) }}
                </span>
              </template>
              <template #no-data>
                <div class="pa-8 text-center text-grey">
                  <v-icon size="48" color="grey-lighten-1" class="mb-2 d-block mx-auto">mdi-inbox-outline</v-icon>
                  <div>{{ search ? 'Data tidak ditemukan' : 'Belum ada transaksi di bulan ini' }}</div>
                </div>
              </template>
            </v-data-table>

            <!-- Mobile View: List View -->
            <div v-else class="pa-4">
              <div v-if="paginatedTransactions.length === 0 && !loading" class="text-center py-8">
                <v-icon size="48" color="grey-lighten-1" class="mb-4">mdi-file-search-outline</v-icon>
                <div class="text-body-1 text-grey">{{ search ? 'Data tidak ditemukan' : 'Belum ada transaksi di bulan ini' }}</div>
              </div>
              
              <v-card 
                v-for="item in paginatedTransactions" 
                :key="item.id"
                class="mb-4 rounded-xl border"
                :class="[isDarkTheme ? 'bg-black border-dark' : 'bg-grey-lighten-4 border-light']"
                elevation="0"
              >
                <v-card-text class="pa-5">
                  <div class="d-flex justify-space-between align-start mb-3">
                    <div class="d-flex align-center">
                      <div class="widget-icon mr-3" :class="item.type === 'INCOME' ? 'bg-success-lighten text-success' : 'bg-error-lighten text-error'" style="width: 40px; height: 40px;">
                        <v-icon size="20">{{ item.type === 'INCOME' ? 'mdi-arrow-down' : 'mdi-arrow-up' }}</v-icon>
                      </div>
                      <div>
                        <div class="font-weight-bold text-subtitle-1" :class="isDarkTheme ? 'text-white' : 'text-black'">{{ item.description }}</div>
                        <div class="text-caption text-grey">{{ formatDate(item.date) }} • {{ item.category }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="font-weight-black text-h6" :class="item.type === 'INCOME' ? 'text-success' : 'text-error'">
                      {{ item.type === 'INCOME' ? '+' : '-' }}{{ formatCurrency(item.amount) }}
                    </div>
                  </div>
                </v-card-text>
              </v-card>

              <!-- Custom Mobile Pagination -->
              <div v-if="pageCount > 1" class="d-flex flex-column align-center mt-6">
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
                    variant="outlined"
                    density="compact"
                    hide-details
                    class="ios-select"
                    style="max-width: 100px;"
                  ></v-select>
                </div>
              </div>
            </div>
          </div>
        </template>
      </section>

    </v-container>
    
    <!-- Footer Section -->
    <div class="py-8 text-center" :class="isDarkTheme ? 'bg-black' : 'bg-dark-surface'">
      <p class="text-body-2 font-weight-bold mb-0" :class="isDarkTheme ? 'text-grey-darken-1' : 'text-grey'">
        &copy; {{ new Date().getFullYear() }} Langgar An-Ni'mah. Developed by Andra Aprianata
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useTheme, useDisplay } from 'vuetify'
import api from '@/services/api'
import heroImage from '@/assets/foto_langgar.png'
import logoImage from '@/assets/logo_langgar.png'

// Display & Theme logic
const { mdAndUp } = useDisplay()
const theme = useTheme()
const isDarkTheme = computed(() => theme.global.name.value === 'dark')

const toggleTheme = () => {
  theme.global.name.value = isDarkTheme.value ? 'light' : 'dark'
  localStorage.setItem('theme', theme.global.name.value)
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const loading = ref(false)
const transactions = ref<any[]>([])
const summary = ref({
  income: 0,
  expense: 0,
  balance: 0
})

// Search & Pagination Logic
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

const filteredTransactions = computed(() => {
  let result = transactions.value
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

// Dynamic Filter logic
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

const currentMonthName = computed(() => {
  if (!currentMonth.value) return ''
  const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  return monthNames[currentMonth.value - 1]
})

const onYearChange = () => {
  // If year changes, automatically select the most recent available month for that year
  if (availableMonths.value.length > 0) {
    currentMonth.value = availableMonths.value[0].value
    fetchPublicData()
  }
}

const fetchAvailableDates = async () => {
  try {
    const response = await api.get('/public/transactions/available-dates')
    availableDates.value = response.data.data || response.data || []

    const now = new Date()
    const currentRealYear = now.getFullYear()
    const currentRealMonth = now.getMonth() + 1

    // Ensure current month/year is in the availableDates array
    const hasCurrentDate = availableDates.value.some(
      d => d.year === currentRealYear && d.month === currentRealMonth
    )
    if (!hasCurrentDate) {
      availableDates.value.push({ year: currentRealYear, month: currentRealMonth })
    }

    currentYear.value = currentRealYear
    currentMonth.value = currentRealMonth
    await fetchPublicData()
  } catch (error) {
    console.error('Error fetching available dates:', error)
  }
}

const fetchPublicData = async () => {
  if (!currentMonth.value || !currentYear.value) return
  
  loading.value = true
  try {
    const summaryResponse = await api.get(`/public/transactions/summary/${currentMonth.value}/${currentYear.value}`)
    summary.value = {
      income: summaryResponse.data.data?.income || summaryResponse.data?.income || 0,
      expense: summaryResponse.data.data?.expense || summaryResponse.data?.expense || 0,
      balance: summaryResponse.data.data?.balance || summaryResponse.data?.balance || 0
    }
    transactions.value = summaryResponse.data.data?.transactions || summaryResponse.data?.transactions || []
  } catch (error) {
    console.error('Error fetching public data:', error)
  } finally {
    loading.value = false
  }
}

const headers = [
  { title: 'Tanggal', key: 'date', sortable: true },
  { title: 'Keterangan', key: 'description', sortable: false },
  { title: 'Jenis', key: 'type', sortable: true },
  { title: 'Kategori', key: 'category', sortable: true },
  { title: 'Jumlah (Rp)', key: 'amount', align: 'end' as const, sortable: true },
]

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(value || 0).replace('Rp', 'Rp ')
}

const formatDate = (date: string) => {
  if (!date) return '-'
  return new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(date))
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    theme.global.name.value = savedTheme
  } else {
    theme.global.name.value = 'light'
  }
  
  fetchAvailableDates()
})
</script>

<style scoped>
/* Utility Classes */
.min-vh-100 { min-height: 100vh; scroll-behavior: smooth; }
.letter-spacing-tight { letter-spacing: -1px !important; }
.letter-spacing-wide { letter-spacing: 1.5px !important; }
.gap-4 { gap: 16px; }
.z-index-2 { z-index: 2; }
.z-index-3 { z-index: 3; }

/* Custom Backgrounds & Gradients */
.bg-black { background-color: #000000 !important; }
.bg-dark-surface { background-color: #1C1C1E !important; }
.bg-grey-lighten-4 { background-color: #F2F2F7 !important; }
.bg-primary-lighten { background-color: rgba(var(--v-theme-primary), 0.1); }
.bg-success-lighten { background-color: rgba(var(--v-theme-success), 0.1); }
.bg-warning-lighten { background-color: rgba(var(--v-theme-warning), 0.1); }
.bg-error-lighten { background-color: rgba(var(--v-theme-error), 0.1); }

.widget-primary {
  background: linear-gradient(135deg, var(--v-theme-primary) 0%, #0A84FF 100%);
  box-shadow: 0 15px 30px rgba(var(--v-theme-primary), 0.3) !important;
}

/* iOS Glass Header */
.glass-header {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-radius: 40px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}
.theme--dark .glass-header {
  background: rgba(30, 30, 30, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.glass-avatar {
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.ios-btn {
  text-transform: none;
  letter-spacing: 0;
}

/* Hero Section */
.hero-container {
  height: 90vh;
  min-height: 700px;
  background-position: center 30%;
  background-size: cover;
  background-repeat: no-repeat;
}
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.overlay-light {
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(15, 23, 42, 0.7) 100%);
}
.overlay-dark {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(15, 23, 42, 0.8) 100%);
}
.blur-chip {
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.15) !important;
  border-width: 1px;
}
.theme--dark .blur-chip {
  background: rgba(0,0,0,0.4) !important;
}
.text-primary-lighten-2 {
  color: #64B5F6 !important;
}
.bg-glass {
  background: rgba(255,255,255,0.1) !important;
  backdrop-filter: blur(10px);
}

/* iOS Panels */
.glass-panel {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-radius: 32px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.4);
}
.theme--dark .glass-panel {
  background: rgba(28, 28, 30, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}
.icon-box {
  width: 56px;
  height: 56px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Apple Style Widgets */
.ios-widget {
  border-radius: 32px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
}
.theme--dark .ios-widget:not(.widget-primary) {
  border: 1px solid rgba(255, 255, 255, 0.03);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}
.ios-widget:hover {
  transform: translateY(-5px) scale(1.01);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
}
.theme--dark .ios-widget:hover:not(.widget-primary) {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
}
.widget-icon {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery-img {
  cursor: pointer;
}
.gallery-img:hover {
  opacity: 0.9;
}

/* Custom Select & Table Overrides */
.ios-select :deep(.v-field) {
  border-radius: 20px !important;
  box-shadow: none !important;
  background: rgba(0,0,0,0.04) !important;
}
.theme--dark .ios-select :deep(.v-field) {
  background: rgba(255,255,255,0.05) !important;
}
.border-light { border-bottom: 1px solid rgba(0,0,0,0.05); border-color: rgba(0,0,0,0.05) !important; }
.border-dark { border-bottom: 1px solid rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.05) !important; }

.ios-table {
  background: transparent !important;
}
.ios-table :deep(th) {
  background: transparent !important;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700 !important;
  letter-spacing: 1px;
  color: #8E8E93 !important;
  border-bottom: 1px solid rgba(0,0,0,0.05) !important;
  padding: 16px 24px !important;
}
.theme--dark .ios-table :deep(th) {
  border-bottom: 1px solid rgba(255,255,255,0.05) !important;
}
.ios-table :deep(td) {
  padding: 20px 24px !important;
  border-bottom: 1px solid rgba(0,0,0,0.03) !important;
}
.theme--dark .ios-table :deep(td) {
  border-bottom: 1px solid rgba(255,255,255,0.03) !important;
}
.ios-table :deep(tr:last-child td) {
  border-bottom: none !important;
}
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
</style>
