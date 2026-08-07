<template>
  <div>
    <!-- Header -->
    <div class="d-flex flex-column flex-md-row justify-space-between align-start align-md-center mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold mb-1" :class="isDarkTheme ? 'text-white' : 'text-black'">Manajemen Pengurus & Hak Akses</h1>
        <p class="text-body-2" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Kelola akun pengurus, peran (role), dan wewenang akses menu aplikasi.</p>
      </div>

      <v-btn
        v-if="authStore.hasPermission('users:create')"
        color="primary"
        prepend-icon="mdi-account-plus"
        rounded="pill"
        elevation="4"
        class="mt-4 mt-md-0"
        @click="openDialog()"
      >
        Tambah Pengurus
      </v-btn>
    </div>

    <!-- Users Cards Grid -->
    <v-row v-if="loading">
      <v-col v-for="i in 3" :key="i" cols="12" md="4">
        <v-skeleton-loader type="card" class="rounded-xl"></v-skeleton-loader>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col v-for="user in users" :key="user.id" cols="12" md="4">
        <v-card class="glass-card pa-6 h-100 position-relative d-flex flex-column justify-space-between">
          <div>
            <div class="d-flex justify-space-between align-start mb-4">
              <div>
                <div class="font-weight-bold text-h6" :class="isDarkTheme ? 'text-white' : 'text-black'" style="line-height: 1.2;">{{ user.name }}</div>
                <div class="text-caption text-grey mt-1">@{{ user.username }}</div>
              </div>
              <v-chip size="small" :color="getRoleColor(user.role)" variant="tonal" class="font-weight-bold">
                {{ user.role }}
              </v-chip>
            </div>
            
            <div class="mb-4">
              <div class="text-caption font-weight-bold mb-1" :class="isDarkTheme ? 'text-grey' : 'text-grey-darken-1'">Hak Akses Menu:</div>
              <div class="d-flex flex-wrap gap-1">
                <v-chip v-for="perm in (user.permissions || [])" :key="perm" size="x-small" variant="outlined" color="primary" class="mr-1 mb-1">
                  {{ getPermissionLabel(perm) }}
                </v-chip>
                <span v-if="!user.permissions || user.permissions.length === 0" class="text-caption text-grey italic">Tidak ada izin khusus</span>
              </div>
            </div>
          </div>
          
          <div class="d-flex justify-space-between align-center pt-2 border-t" :class="isDarkTheme ? 'border-dark' : 'border-light'">
            <v-chip size="small" :color="user.isActive ? 'success' : 'error'" variant="text" class="px-0">
              <v-icon start icon="mdi-circle" size="x-small" class="ml-1"></v-icon>
              {{ user.isActive ? 'Aktif' : 'Non-Aktif' }}
            </v-chip>
            
            <div>
              <v-btn v-if="authStore.hasPermission('users:update')" icon="mdi-pencil" variant="tonal" color="info" size="small" class="mr-2" @click="openDialog(user)"></v-btn>
              <v-btn v-if="authStore.hasPermission('users:delete')" icon="mdi-delete" variant="tonal" color="error" size="small" @click="deleteUser(user.id)" :disabled="user.id === authStore.user?.id"></v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- User Dialog (iOS 26 Glass Modal) -->
    <v-dialog v-model="dialog" max-width="600" persistent :theme="isDarkTheme ? 'dark' : 'light'">
      <v-card 
        class="pa-6 rounded-xl modal-card-fixed"
        :class="isDarkTheme ? 'modal-dark' : 'modal-light'"
        :style="isDarkTheme ? 'background-color: #1E222B !important; color: #FFFFFF !important;' : 'background-color: #FFFFFF !important; color: #121212 !important;'"
      >
        <div class="d-flex align-center justify-space-between mb-4">
          <h3 class="text-h6 font-weight-bold" :style="isDarkTheme ? 'color: #FFFFFF !important;' : 'color: #121212 !important;'">
            {{ isEdit ? 'Edit Pengurus & Hak Akses' : 'Tambah Pengurus Baru' }}
          </h3>
          <v-btn icon="mdi-close" variant="text" size="small" :color="isDarkTheme ? 'white' : 'black'" @click="dialog = false"></v-btn>
        </div>

        <v-card-text class="pa-0">
          <v-form @submit.prevent="saveUser" ref="formRef">
            <v-text-field
              v-model="formData.name"
              label="Nama Lengkap"
              variant="outlined"
              density="compact"
              color="primary"
              :rules="[v => !!v || 'Nama wajib diisi']"
              class="mb-3"
              rounded="lg"
              :bg-color="isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F5F7FA'"
              :base-color="isDarkTheme ? 'white' : 'black'"
            ></v-text-field>

            <v-text-field
              v-model="formData.username"
              label="Username"
              variant="outlined"
              density="compact"
              color="primary"
              :rules="[v => !!v || 'Username wajib diisi']"
              :disabled="isEdit"
              class="mb-3"
              rounded="lg"
              :bg-color="isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F5F7FA'"
              :base-color="isDarkTheme ? 'white' : 'black'"
            ></v-text-field>

            <v-text-field
              v-if="!isEdit"
              v-model="formData.password"
              label="Password"
              type="password"
              variant="outlined"
              density="compact"
              color="primary"
              :rules="[v => !!v || 'Password wajib diisi']"
              class="mb-3"
              rounded="lg"
              :bg-color="isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F5F7FA'"
              :base-color="isDarkTheme ? 'white' : 'black'"
            ></v-text-field>

            <v-select
              v-model="formData.role"
              :items="['ADMIN', 'BENDAHARA', 'PENGURUS']"
              label="Role Akses Utama"
              variant="outlined"
              density="compact"
              color="primary"
              :rules="[v => !!v || 'Role wajib dipilih']"
              class="mb-3"
              rounded="lg"
              :bg-color="isDarkTheme ? 'rgba(255,255,255,0.05)' : '#F5F7FA'"
              :base-color="isDarkTheme ? 'white' : 'black'"
              @update:model-value="onRoleChange"
            ></v-select>

            <v-switch
              v-if="isEdit"
              v-model="formData.isActive"
              color="success"
              label="Status Akun Aktif"
              hide-details
              class="mb-4"
            ></v-switch>

            <v-divider class="my-4 border-opacity-25"></v-divider>
            
            <div class="d-flex justify-space-between align-center mb-3">
              <div class="text-subtitle-1 font-weight-bold d-flex align-center" :class="isDarkTheme ? 'text-primary' : 'text-primary'">
                <v-icon icon="mdi-shield-key-outline" class="mr-2"></v-icon> Rincian Hak Akses Menu
              </div>
              <v-btn size="x-small" variant="tonal" color="primary" @click="toggleSelectAllPermissions">
                {{ isAllPermissionsSelected ? 'Hapus Semua' : 'Pilih Semua' }}
              </v-btn>
            </div>
            
            <v-row>
              <v-col cols="12" sm="6" v-for="(group, idx) in permissionGroups" :key="idx">
                <v-card 
                  class="pa-3 rounded-lg border h-100" 
                  :class="isDarkTheme ? 'bg-black-thin border-dark' : 'bg-grey-lighten-4 border-light'"
                  elevation="0"
                >
                  <div class="font-weight-bold mb-2 text-caption text-uppercase" :class="isDarkTheme ? 'text-primary' : 'text-primary'">{{ group.name }}</div>
                  <v-checkbox
                    v-for="perm in group.permissions"
                    :key="perm.value"
                    v-model="formData.permissions"
                    :value="perm.value"
                    :label="perm.label"
                    color="primary"
                    density="compact"
                    hide-details
                    class="my-1"
                  ></v-checkbox>
                </v-card>
              </v-col>
            </v-row>

            <div class="d-flex justify-end gap-2 mt-6">
              <v-btn variant="tonal" :color="isDarkTheme ? 'white' : 'grey-darken-3'" rounded="pill" class="px-5" @click="dialog = false">Batal</v-btn>
              <v-btn color="primary" variant="flat" type="submit" :loading="saving" rounded="pill" class="px-6 font-weight-bold">Simpan Pengurus</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useTheme } from 'vuetify'
import api from '../services/api'
import { useAuthStore } from '../stores/auth'

const theme = useTheme()
const isDarkTheme = computed(() => theme.global.name.value === 'dark')

const authStore = useAuthStore()
const users = ref<any[]>([])
const loading = ref(false)
const dialog = ref(false)
const saving = ref(false)
const isEdit = ref(false)
const formRef = ref<any>(null)

const formData = ref({
  id: null,
  name: '',
  username: '',
  password: '',
  role: 'PENGURUS',
  isActive: true,
  permissions: [] as string[]
})

const permissionGroups = [
  { 
    name: 'Dashboard', 
    permissions: [{ label: 'Lihat Dashboard', value: 'dashboard:read' }] 
  },
  { 
    name: 'Manajemen Kas', 
    permissions: [
      { label: 'Lihat Transaksi', value: 'transactions:read' },
      { label: 'Tambah Transaksi', value: 'transactions:create' },
      { label: 'Ubah Transaksi', value: 'transactions:update' },
      { label: 'Hapus Transaksi', value: 'transactions:delete' }
    ]
  },
  { 
    name: 'Laporan & Jurnal', 
    permissions: [
      { label: 'Lihat Laporan & Jurnal (Neraca & Laba Rugi)', value: 'reports:read' }
    ]
  },
  { 
    name: 'Kas & Rekening Bank', 
    permissions: [
      { label: 'Lihat Rekening Bank', value: 'accounts:read' },
      { label: 'Kelola & Transfer Saldo Kas', value: 'accounts:manage' }
    ]
  },
  { 
    name: 'Manajemen Pengurus', 
    permissions: [
      { label: 'Lihat Pengurus', value: 'users:read' },
      { label: 'Tambah Pengurus', value: 'users:create' },
      { label: 'Ubah Hak Akses Pengurus', value: 'users:update' },
      { label: 'Hapus Pengurus', value: 'users:delete' }
    ]
  },
  { 
    name: 'Pengaturan', 
    permissions: [{ label: 'Akses Pengaturan', value: 'settings:read' }] 
  }
]

const allPermissionValues = computed(() => {
  return permissionGroups.flatMap(g => g.permissions.map(p => p.value))
})

const isAllPermissionsSelected = computed(() => {
  return allPermissionValues.value.every(val => formData.value.permissions.includes(val))
})

const toggleSelectAllPermissions = () => {
  if (isAllPermissionsSelected.value) {
    formData.value.permissions = []
  } else {
    formData.value.permissions = [...allPermissionValues.value]
  }
}

const onRoleChange = (role: string) => {
  if (role === 'ADMIN') {
    formData.value.permissions = [...allPermissionValues.value]
  } else if (role === 'BENDAHARA') {
    formData.value.permissions = [
      'dashboard:read', 
      'transactions:read', 'transactions:create', 'transactions:update', 
      'reports:read', 
      'accounts:read', 'accounts:manage', 
      'settings:read'
    ]
  } else {
    formData.value.permissions = [
      'dashboard:read', 
      'transactions:read', 
      'reports:read', 
      'settings:read'
    ]
  }
}

const getPermissionLabel = (value: string) => {
  for (const group of permissionGroups) {
    const item = group.permissions.find(p => p.value === value)
    if (item) return item.label
  }
  return value
}

const getRoleColor = (role: string) => {
  switch(role) {
    case 'ADMIN': return 'error'
    case 'BENDAHARA': return 'primary'
    default: return 'success'
  }
}

const fetchUsers = async () => {
  loading.value = true
  try {
    const res = await api.get('/users')
    users.value = res.data.data
  } catch (error) {
    console.error('Failed to fetch users', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchUsers()
})

const openDialog = (user?: any) => {
  if (user) {
    isEdit.value = true
    formData.value = { ...user, password: '', permissions: user.permissions || [] }
    if (!user.permissions || user.permissions.length === 0) {
      onRoleChange(user.role)
    }
  } else {
    isEdit.value = false
    formData.value = {
      id: null,
      name: '',
      username: '',
      password: '',
      role: 'PENGURUS',
      isActive: true,
      permissions: []
    }
    onRoleChange('PENGURUS')
  }
  dialog.value = true
}

const saveUser = async () => {
  const { valid } = await formRef.value.validate()
  if (!valid) return
  
  saving.value = true
  try {
    if (isEdit.value) {
      await api.patch(`/users/${formData.value.id}`, {
        name: formData.value.name,
        role: formData.value.role,
        isActive: formData.value.isActive,
        permissions: formData.value.permissions
      })
    } else {
      await api.post('/users', formData.value)
    }
    dialog.value = false
    await fetchUsers()
  } catch (error) {
    console.error('Failed to save user', error)
    alert('Gagal menyimpan data pengguna')
  } finally {
    saving.value = false
  }
}

const deleteUser = async (id: number) => {
  if (confirm('Yakin ingin menghapus user ini?')) {
    try {
      await api.delete(`/users/${id}`)
      await fetchUsers()
    } catch (error) {
      console.error('Failed to delete user', error)
      alert('Gagal menghapus data pengguna')
    }
  }
}
</script>

<style scoped>
.gap-1 { gap: 4px; }
.gap-2 { gap: 8px; }
.gap-3 { gap: 12px; }

.bg-black-thin {
  background: rgba(0, 0, 0, 0.2);
}
.border-dark {
  border-color: rgba(255, 255, 255, 0.12) !important;
}
.border-light {
  border-color: rgba(0, 0, 0, 0.12) !important;
}

/* Modal Light / Dark Scoped Rules */
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
