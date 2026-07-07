<template>
  <v-container fluid class="fill-height bg-background d-flex align-center justify-center">
    <!-- Animated Background Elements -->
    <div class="position-absolute rounded-circle bg-primary" style="width: 50vw; height: 50vw; max-width: 600px; max-height: 600px; top: 10%; left: 10%; filter: blur(120px); opacity: 0.4; animation: float 10s ease-in-out infinite;"></div>
    <div class="position-absolute rounded-circle bg-info" style="width: 40vw; height: 40vw; max-width: 500px; max-height: 500px; bottom: 10%; right: 10%; filter: blur(100px); opacity: 0.3; animation: float 12s ease-in-out infinite reverse;"></div>
    
    <v-card class="pa-8" elevation="24" width="100%" max-width="450" rounded="xl" style="backdrop-filter: blur(40px) saturate(200%); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); z-index: 1;">
      <v-card-title class="text-center text-h4 font-weight-bold mb-2 text-white">
        Kas An-Nikmah
      </v-card-title>
      <v-card-subtitle class="text-center text-subtitle-1 mb-6 text-grey-lighten-1">
        Sistem Manajemen Kas Langgar
      </v-card-subtitle>
      
      <v-card-text>
        <v-alert v-if="authStore.error" type="error" variant="tonal" class="mb-6 rounded-lg">
          {{ authStore.error }}
        </v-alert>

        <v-form @submit.prevent="onSubmit" ref="formRef">
          <v-text-field
            v-model="username"
            label="Username"
            prepend-inner-icon="mdi-account-outline"
            variant="outlined"
            color="primary"
            class="mb-4"
            :rules="[v => !!v || 'Username wajib diisi']"
            required
            bg-color="rgba(0,0,0,0.2)"
            rounded="pill"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="Kata Sandi"
            prepend-inner-icon="mdi-lock-outline"
            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="showPassword = !showPassword"
            variant="outlined"
            color="primary"
            class="mb-6"
            :rules="[v => !!v || 'Kata sandi wajib diisi']"
            required
            bg-color="rgba(0,0,0,0.2)"
            rounded="pill"
          ></v-text-field>

          <v-btn
            type="submit"
            color="primary"
            size="x-large"
            block
            rounded="pill"
            elevation="8"
            :loading="authStore.loading"
            class="font-weight-bold text-body-1"
          >
            Masuk
          </v-btn>
        </v-form>
      </v-card-text>
      
      <v-card-actions class="justify-center mt-4">
        <span class="text-caption text-grey">© 2026 Langgar An-Nikmah. All rights reserved.</span>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const username = ref('')
const password = ref('')
const showPassword = ref(false)
const formRef = ref<any>(null)

const authStore = useAuthStore()
const router = useRouter()

const onSubmit = async () => {
  const { valid } = await formRef.value.validate()
  
  if (valid) {
    const success = await authStore.login({ username: username.value, password: password.value })
    if (success) {
      router.push({ name: 'dashboard' })
    }
  }
}
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
</style>
