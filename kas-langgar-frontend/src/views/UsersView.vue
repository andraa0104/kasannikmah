<template>
  <div>
    <div class="d-flex flex-column flex-md-row align-start align-md-center justify-space-between mb-6" style="gap: 16px;">
      <div>
        <h1 class="text-h4 font-weight-bold text-white mb-1">Manajemen Pengurus</h1>
        <p class="text-grey-lighten-1">Kelola data pengguna dan hak akses</p>
      </div>
      <v-btn
        v-if="authStore.hasPermission('users:create')"
        color="primary"
        prepend-icon="mdi-account-plus"
        size="large"
        rounded="lg"
        elevation="4"
        @click="openDialog()"
        class="align-self-stretch align-self-md-auto"
      >
        Tambah Pengurus
      </v-btn>
    </div>

    <!-- Desktop Data Table -->
    <v-card class="glass-panel d-none d-md-block" elevation="8">
      <v-table class="bg-transparent text-white" hover>
        <thead>
          <tr>
            <th class="text-left text-grey">Nama</th>
            <th class="text-left text-grey">Username</th>
            <th class="text-left text-grey">Role</th>
            <th class="text-left text-grey">Status</th>
            <th class="text-center text-grey">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="5" class="text-center pa-4">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </td>
          </tr>
          <tr v-else v-for="user in users" :key="user.id">
            <td class="font-weight-medium">{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>
              <v-chip size="small" :color="getRoleColor(user.role)" variant="tonal">
                {{ user.role }}
              </v-chip>
            </td>
            <td>
              <v-chip size="small" :color="user.isActive ? 'success' : 'error'" variant="text">
                <v-icon start icon="mdi-circle" size="x-small"></v-icon>
                {{ user.isActive ? 'Aktif' : 'Non-Aktif' }}
              </v-chip>
            </td>
            <td class="text-center">
              <v-btn v-if="authStore.hasPermission('users:update')" icon="mdi-pencil" variant="text" color="info" size="small" class="mr-2" @click="openDialog(user)"></v-btn>
              <v-btn v-if="authStore.hasPermission('users:delete')" icon="mdi-delete" variant="text" color="error" size="small" @click="deleteUser(user.id)" :disabled="user.id === authStore.user?.id"></v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

    <!-- Mobile List View -->
    <div class="d-block d-md-none">
      <div v-if="loading" class="text-center pa-4">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </div>
      <div v-else-if="users.length === 0" class="text-center pa-8 text-grey glass-panel rounded-xl">
        Belum ada data pengurus
      </div>
      <div v-else class="d-flex flex-column" style="gap: 12px;">
        <v-card
          v-for="user in users"
          :key="user.id"
          class="glass-card pa-4 border-0"
          style="background: rgba(255, 255, 255, 0.04) !important;"
        >
          <div class="d-flex justify-space-between align-start mb-3">
            <div>
              <div class="font-weight-bold text-white text-h6" style="line-height: 1.2;">{{ user.name }}</div>
              <div class="text-caption text-grey mt-1">@{{ user.username }}</div>
            </div>
            <v-chip size="small" :color="getRoleColor(user.role)" variant="tonal" class="font-weight-bold">
              {{ user.role }}
            </v-chip>
          </div>
          
          <div class="d-flex justify-space-between align-center">
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
      </div>
    </div>

    <!-- User Dialog -->
    <v-dialog v-model="dialog" max-width="500" persistent>
      <v-card class="glass-card border-0" style="backdrop-filter: blur(50px) saturate(250%);">
        <v-card-title class="pa-6 pb-2 text-h5 font-weight-bold text-white d-flex align-center">
          {{ isEdit ? 'Edit Pengurus' : 'Tambah Pengurus' }}
          <v-spacer></v-spacer>
          <v-btn icon="mdi-close" variant="text" color="white" size="small" @click="dialog = false"></v-btn>
        </v-card-title>
        <v-card-text class="pa-6 pt-2">
          <v-form @submit.prevent="saveUser" ref="formRef">
            <v-text-field
              v-model="formData.name"
              label="Nama Lengkap"
              variant="outlined"
              color="primary"
              :rules="[v => !!v || 'Nama wajib diisi']"
              bg-color="rgba(0,0,0,0.1)"
              class="mb-2"
              rounded="xl"
            ></v-text-field>

            <v-text-field
              v-model="formData.username"
              label="Username"
              type="username"
              variant="outlined"
              color="primary"
              :rules="[v => !!v || 'Username wajib diisi']"
              bg-color="rgba(0,0,0,0.1)"
              :disabled="isEdit"
              class="mb-2"
              rounded="xl"
            ></v-text-field>

            <v-text-field
              v-if="!isEdit"
              v-model="formData.password"
              label="Password"
              type="password"
              variant="outlined"
              color="primary"
              :rules="[v => !!v || 'Password wajib diisi']"
              bg-color="rgba(0,0,0,0.1)"
              class="mb-2"
              rounded="xl"
            ></v-text-field>

            <v-select
              v-model="formData.role"
              :items="['ADMIN', 'BENDAHARA', 'PENGURUS']"
              label="Role Akses"
              variant="outlined"
              color="primary"
              :rules="[v => !!v || 'Role wajib dipilih']"
              bg-color="rgba(0,0,0,0.1)"
              class="mb-2"
              rounded="xl"
            ></v-select>

            <v-switch
              v-if="isEdit"
              v-model="formData.isActive"
              color="success"
              label="Status Aktif"
              hide-details
              class="mb-4"
            ></v-switch>

            <v-divider class="my-4 border-opacity-25"></v-divider>
            <div class="text-h6 mb-3 text-primary d-flex align-center">
              <v-icon icon="mdi-shield-key-outline" class="mr-2"></v-icon> Hak Akses Menu
            </div>
            
            <v-row>
              <v-col cols="12" sm="6" v-for="(group, idx) in permissionGroups" :key="idx">
                <v-card class="pa-3 rounded-lg border-primary bg-black-20 h-100" elevation="0">
                  <div class="font-weight-bold mb-2 text-white">{{ group.name }}</div>
                  <v-checkbox
                    v-for="perm in group.permissions"
                    :key="perm.value"
                    v-model="formData.permissions"
                    :value="perm.value"
                    :label="perm.label"
                    color="primary"
                    density="compact"
                    hide-details
                  ></v-checkbox>
                </v-card>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-6 pt-0">
          <v-spacer></v-spacer>
          <v-btn color="white" variant="tonal" rounded="xl" class="px-6" @click="dialog = false">Batal</v-btn>
          <v-btn color="primary" variant="flat" rounded="xl" class="px-8 font-weight-bold" @click="saveUser" :loading="saving" elevation="8">Simpan</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '../services/api'
import { useAuthStore } from '../stores/auth'

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
  { name: 'Dashboard', permissions: [{ label: 'Lihat Dashboard', value: 'dashboard:read' }] },
  { name: 'Manajemen Kas', permissions: [
      { label: 'Lihat Transaksi', value: 'transactions:read' },
      { label: 'Tambah Transaksi', value: 'transactions:create' },
      { label: 'Ubah Transaksi', value: 'transactions:update' },
      { label: 'Hapus Transaksi', value: 'transactions:delete' }
  ]},
  { name: 'Laporan & Jurnal', permissions: [
      { label: 'Lihat Laporan & Jurnal', value: 'reports:read' }
  ]},
  { name: 'Kas & Rekening', permissions: [
      { label: 'Lihat Rekening Bank', value: 'accounts:read' },
      { label: 'Kelola & Transfer Saldo', value: 'accounts:manage' }
  ]},
  { name: 'Pengurus', permissions: [
      { label: 'Lihat Pengurus', value: 'users:read' },
      { label: 'Tambah Pengurus', value: 'users:create' },
      { label: 'Ubah Pengurus', value: 'users:update' },
      { label: 'Hapus Pengurus', value: 'users:delete' }
  ]},
  { name: 'Pengaturan', permissions: [{ label: 'Buka Pengaturan', value: 'settings:read' }] }
]

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
