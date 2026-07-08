<template>
  <v-container fluid class="pa-0 h-100">
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h4 font-weight-bold text-primary">Pengaturan</h1>
    </div>

    <v-row>
      <!-- Profile Settings -->
      <v-col cols="12" md="8">
        <v-card class="glass-card pa-6 h-100" elevation="0">
          <h2 class="text-h6 font-weight-bold mb-6 text-primary d-flex align-center">
            <v-icon icon="mdi-account-cog" class="mr-2"></v-icon> Profil Pengguna
          </h2>

          <v-alert v-if="successMessage" type="success" variant="tonal" class="mb-6 rounded-lg">
            {{ successMessage }}
          </v-alert>

          <v-alert v-if="authStore.error" type="error" variant="tonal" class="mb-6 rounded-lg">
            {{ authStore.error }}
          </v-alert>

          <v-form @submit.prevent="updateProfile" ref="formRef">
            <div class="mb-4">
              <label class="text-caption font-weight-medium text-grey-lighten-1 mb-1 d-block">Username (Tidak dapat diubah)</label>
              <v-text-field
                :model-value="authStore.user?.username"
                readonly
                variant="outlined"
                color="primary"
                prepend-inner-icon="mdi-account-outline"
                bg-color="rgba(0,0,0,0.1)"
                class="opacity-70"
              ></v-text-field>
            </div>

            <div class="mb-4">
              <label class="text-caption font-weight-medium text-grey-lighten-1 mb-1 d-block">Nama Lengkap</label>
              <v-text-field
                v-model="profileForm.name"
                variant="outlined"
                color="primary"
                prepend-inner-icon="mdi-card-account-details-outline"
                :rules="[v => !v || v.length >= 3 || 'Nama minimal 3 karakter']"
                bg-color="rgba(0,0,0,0.1)"
              ></v-text-field>
            </div>

            <div class="mb-6">
              <label class="text-caption font-weight-medium text-grey-lighten-1 mb-1 d-block">Kata Sandi Baru (Opsional)</label>
              <v-text-field
                v-model="profileForm.password"
                :type="showPassword ? 'text' : 'password'"
                variant="outlined"
                color="primary"
                prepend-inner-icon="mdi-lock-outline"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
                placeholder="Kosongkan jika tidak ingin mengubah"
                :rules="[v => !v || v.length >= 6 || 'Kata sandi minimal 6 karakter']"
                bg-color="rgba(0,0,0,0.1)"
              ></v-text-field>
            </div>

            <v-btn
              type="submit"
              color="primary"
              size="large"
              rounded="lg"
              elevation="4"
              :loading="authStore.loading"
              prepend-icon="mdi-content-save"
            >
              Simpan Perubahan
            </v-btn>
          </v-form>
        </v-card>
      </v-col>

      <!-- Theme Settings -->
      <v-col cols="12" md="4">
        <v-card class="glass-card pa-6 h-100" elevation="0">
          <h2 class="text-h6 font-weight-bold mb-6 text-primary d-flex align-center">
            <v-icon icon="mdi-palette" class="mr-2"></v-icon> Tema Aplikasi
          </h2>

          <p class="text-body-2 text-grey-lighten-1 mb-6">
            Pilih tema tampilan yang paling nyaman untuk Anda. Pengaturan ini akan disimpan di perangkat Anda.
          </p>

          <v-radio-group v-model="selectedTheme" @change="changeTheme">
            <v-card
              class="mb-4 border pa-3 rounded-lg cursor-pointer"
              :class="selectedTheme === 'dark' ? 'border-primary bg-primary-subtle' : 'border-transparent bg-black-20'"
              @click="setTheme('dark')"
              elevation="0"
            >
              <v-radio value="dark" color="primary" class="d-none"></v-radio>
              <div class="d-flex align-center">
                <v-avatar color="grey-darken-4" size="48" class="mr-4">
                  <v-icon color="warning">mdi-weather-night</v-icon>
                </v-avatar>
                <div>
                  <div class="font-weight-bold text-white">Mode Gelap (Dark)</div>
                  <div class="text-caption text-grey">Nyaman untuk mata di malam hari</div>
                </div>
                <v-icon v-if="selectedTheme === 'dark'" color="primary" class="ml-auto">mdi-check-circle</v-icon>
              </div>
            </v-card>

            <v-card
              class="border pa-3 rounded-lg cursor-pointer"
              :class="selectedTheme === 'light' ? 'border-primary bg-primary-subtle' : 'border-transparent bg-white-20'"
              @click="setTheme('light')"
              elevation="0"
            >
              <v-radio value="light" color="primary" class="d-none"></v-radio>
              <div class="d-flex align-center">
                <v-avatar color="grey-lighten-3" size="48" class="mr-4">
                  <v-icon color="warning">mdi-white-balance-sun</v-icon>
                </v-avatar>
                <div>
                  <div class="font-weight-bold text-white">Mode Terang (Light)</div>
                  <div class="text-caption text-grey">Jernih dan cerah di siang hari</div>
                </div>
                <v-icon v-if="selectedTheme === 'light'" color="primary" class="ml-auto">mdi-check-circle</v-icon>
              </div>
            </v-card>
          </v-radio-group>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useTheme } from 'vuetify'

const authStore = useAuthStore()
const theme = useTheme()
const formRef = ref<any>(null)

const showPassword = ref(false)
const successMessage = ref('')

const profileForm = reactive({
  name: '',
  password: ''
})

const selectedTheme = ref(theme.global.name.value)

watch(() => authStore.user, (newUser) => {
  if (newUser && !profileForm.name) {
    profileForm.name = newUser.name
  }
}, { immediate: true })

const updateProfile = async () => {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  successMessage.value = ''
  
  const payload: any = {}
  if (profileForm.name && profileForm.name !== authStore.user?.name) {
    payload.name = profileForm.name
  }
  if (profileForm.password) {
    payload.password = profileForm.password
  }

  if (Object.keys(payload).length === 0) {
    return // No changes
  }

  const success = await authStore.updateProfile(payload)
  if (success) {
    successMessage.value = 'Profil berhasil diperbarui!'
    profileForm.password = '' // Clear password field
    setTimeout(() => {
      successMessage.value = ''
    }, 3000)
  }
}

const setTheme = (val: string) => {
  selectedTheme.value = val
  changeTheme()
}

const changeTheme = () => {
  theme.global.name.value = selectedTheme.value
  localStorage.setItem('theme', selectedTheme.value)
}
</script>

<style scoped>
.bg-black-20 {
  background-color: rgba(0, 0, 0, 0.2) !important;
}
.bg-white-20 {
  background-color: rgba(255, 255, 255, 0.2) !important;
}
.bg-primary-subtle {
  background-color: rgba(30, 136, 229, 0.1) !important;
}
</style>
