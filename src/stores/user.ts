import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface UserData {
  login: string
  email: string
  phone: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref<UserData | null>(null)
  const isAuthenticated = computed(() => !!user.value)

  // Initialize user from localStorage
  const initializeFromStorage = () => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      user.value = JSON.parse(storedUser)
    }
  }

  // Register new user
  const register = (userData: UserData) => {
    user.value = userData
    localStorage.setItem('user', JSON.stringify(userData))
  }

  // Logout user
  const logout = () => {
    user.value = null
    localStorage.removeItem('user')
  }

  // Initialize on store creation
  initializeFromStorage()

  return {
    user,
    isAuthenticated,
    register,
    logout
  }
}) 