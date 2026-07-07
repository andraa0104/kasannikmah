import { defineStore } from 'pinia'
import api from '../services/api'
import { jwtDecode } from 'jwt-decode'

interface User {
  id: number
  username: string
  name: string
  role: 'ADMIN' | 'BENDAHARA' | 'PENGURUS'
  permissions?: string[]
}

interface AuthState {
  user: User | null
  token: string | null
  loading: boolean
  error: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === 'ADMIN',
    isBendahara: (state) => state.user?.role === 'BENDAHARA',
    hasPermission: (state) => (permission: string) => {
      if (state.user?.role === 'ADMIN') return true
      return state.user?.permissions?.includes(permission) || false
    }
  },

  actions: {
    initAuth() {
      if (this.token) {
        try {
          const decoded: any = jwtDecode(this.token)
          // Simple validation if token is expired
          if (decoded.exp * 1000 < Date.now()) {
            this.logout()
          } else {
            this.user = {
              id: decoded.sub,
              username: decoded.username,
              name: decoded.name,
              role: decoded.role,
              permissions: decoded.permissions || []
            }
          }
        } catch (error) {
          this.logout()
        }
      }
    },
    
    async login(credentials: any) {
      this.loading = true
      this.error = null
      try {
        const response = await api.post('/auth/login', credentials)
        this.token = response.data.data.access_token
        localStorage.setItem('token', this.token as string)
        this.initAuth()
        return true
      } catch (err: any) {
        this.error = err.response?.data?.message || 'Login failed'
        return false
      } finally {
        this.loading = false
      }
    },

    async updateProfile(data: any) {
      this.loading = true
      this.error = null
      try {
        const response = await api.patch('/users/profile', data)
        // Update user state if name changed
        if (this.user && response.data.data.name) {
          this.user.name = response.data.data.name
        }
        return true
      } catch (err: any) {
        this.error = err.response?.data?.message || 'Gagal memperbarui profil'
        return false
      } finally {
        this.loading = false
      }
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    }
  }
})
