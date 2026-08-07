<template>
  <v-layout>
    <!-- Sidebar / Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      rail-width="96"
      :permanent="display.mdAndUp.value"
      color="transparent"
      class="border-0"
      elevation="0"
      style="position: fixed; height: 100vh; top: 0; left: 0;"
    >
      <div class="pa-4 h-100">
        <v-card 
          class="glass-panel h-100 d-flex flex-column rounded-xl" 
          elevation="8" 
          style="overflow: hidden;" 
          :class="[rail ? 'is-rail' : '', !display.mdAndUp.value ? (theme.global.name.value === 'dark' ? 'bg-dark-blur' : 'bg-light-blur') : '']"
        >
          <!-- Top Actions: Theme Toggle & Sidebar Rail -->
          <div class="d-flex align-center px-3 pt-4 pb-2" :class="rail ? 'justify-center flex-column gap-2' : 'justify-space-between'">
            <v-btn
              icon
              variant="tonal"
              :color="theme.global.name.value === 'dark' ? 'warning' : 'primary'"
              size="small"
              @click="toggleTheme"
              class="rounded-xl"
              title="Ganti Tema (Mode Terang / Gelap)"
            >
              <v-icon>{{ theme.global.name.value === 'dark' ? 'mdi-weather-night' : 'mdi-white-balance-sun' }}</v-icon>
            </v-btn>

            <v-btn
              v-if="display.mdAndUp.value"
              icon
              variant="tonal"
              color="primary"
              size="small"
              @click.stop="rail = !rail"
              class="rounded-xl"
            >
              <v-icon>{{ rail ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
            </v-btn>
          </div>

          <v-list-item
            prepend-avatar="https://ui-avatars.com/api/?name=Admin&background=1E88E5&color=fff"
            :title="authStore.user?.name || 'User'"
            nav
            class="mt-2 py-2"
          >
            <template v-slot:subtitle>
              <span class="text-primary font-weight-bold">{{ authStore.user?.role }}</span>
            </template>
          </v-list-item>

          <v-divider class="my-2 mx-4 border-opacity-25"></v-divider>

          <v-list density="compact" nav class="flex-grow-1">
            <v-list-item prepend-icon="mdi-view-dashboard" value="dashboard" :to="{ name: 'dashboard' }" color="primary" class="rounded-lg mb-1">
              <template v-slot:title>
                <div v-show="!rail" class="text-wrap" style="line-height: 1.2;">Dashboard</div>
              </template>
            </v-list-item>
            <v-list-item v-if="authStore.hasPermission('reports:read')" prepend-icon="mdi-file-chart" value="reports" :to="{ name: 'reports' }" color="primary" class="rounded-lg mb-1">
              <template v-slot:title>
                <div v-show="!rail" class="text-wrap" style="line-height: 1.2;">Laporan & Jurnal</div>
              </template>
            </v-list-item>
            <v-list-item v-if="authStore.hasPermission('accounts:read')" prepend-icon="mdi-bank" value="accounts" :to="{ name: 'accounts' }" color="primary" class="rounded-lg mb-1">
              <template v-slot:title>
                <div v-show="!rail" class="text-wrap" style="line-height: 1.2;">Kas & Rekening</div>
              </template>
            </v-list-item>
            <v-list-item v-if="authStore.hasPermission('users:read')" prepend-icon="mdi-account-group" value="users" :to="{ name: 'users' }" color="primary" class="rounded-lg mb-1">
              <template v-slot:title>
                <div v-show="!rail" class="text-wrap" style="line-height: 1.2;">Manajemen Pengurus</div>
              </template>
            </v-list-item>
            <v-list-item prepend-icon="mdi-cog" value="settings" :to="{ name: 'settings' }" color="primary" class="rounded-lg mb-1">
              <template v-slot:title>
                <div v-show="!rail" class="text-wrap" style="line-height: 1.2;">Pengaturan</div>
              </template>
            </v-list-item>
          </v-list>
          
          <div class="pa-3 mt-auto mb-2">
            <v-btn block color="error" variant="tonal" prepend-icon="mdi-logout" @click="handleLogout" class="rounded-xl">
              <span v-if="!rail">Keluar</span>
            </v-btn>
          </div>
        </v-card>
      </div>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="bg-background" style="min-height: 100vh;">
      <!-- Mobile menu button -->
      <v-btn
        v-if="!display.mdAndUp.value"
        icon="mdi-menu"
        variant="tonal"
        color="primary"
        class="position-absolute ma-4 glass-card"
        style="z-index: 10;"
        @click.stop="drawer = !drawer"
      ></v-btn>

      <div class="pa-6 w-100 h-100 d-flex flex-column align-center" :class="{ 'pt-16': !display.mdAndUp.value }">
        <div class="w-100" style="max-width: 1400px;">
          <router-view></router-view>
        </div>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useDisplay, useTheme } from 'vuetify'

const display = useDisplay()
const theme = useTheme()
const drawer = ref(true)
const rail = ref(false)
const router = useRouter()
const authStore = useAuthStore()

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  theme.global.name.value = savedTheme
})

const toggleTheme = () => {
  const nextTheme = theme.global.name.value === 'dark' ? 'light' : 'dark'
  theme.global.name.value = nextTheme
  localStorage.setItem('theme', nextTheme)
}

const handleLogout = () => {
  authStore.logout()
  router.push({ name: 'landing' })
}
</script>

<style scoped>
:deep(.v-list-item-title) {
  white-space: normal !important;
  line-height: 1.2 !important;
  padding-bottom: 2px;
}

.is-rail :deep(.v-list-item__content) {
  display: none !important;
}

.is-rail :deep(.v-list-item__prepend) {
  margin-inline-end: 0 !important;
  justify-content: center !important;
}

.bg-dark-blur {
  backdrop-filter: blur(25px) saturate(200%) !important;
  -webkit-backdrop-filter: blur(25px) saturate(200%) !important;
  background-color: rgba(15, 23, 42, 0.9) !important;
}

.bg-light-blur {
  backdrop-filter: blur(25px) saturate(200%) !important;
  -webkit-backdrop-filter: blur(25px) saturate(200%) !important;
  background-color: rgba(255, 255, 255, 0.9) !important;
}

.gap-2 {
  gap: 8px;
}
</style>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>

<style scoped>
.v-main {
  min-height: 100vh;
}
</style>

<style>
/* Style the overlay/scrim of the navigation drawer on mobile */
.v-navigation-drawer__scrim {
  backdrop-filter: blur(8px) saturate(120%);
  -webkit-backdrop-filter: blur(8px) saturate(120%);
  background: rgba(0, 0, 0, 0.4) !important;
  opacity: 1 !important;
}
</style>
