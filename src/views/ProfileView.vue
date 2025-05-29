<template>
  <div class="profile-container">
    <h1>Здравствуйте, {{ userStore.user?.login }}</h1>
    <a href="#" class="logout-link" @click.prevent="handleLogout">Выход</a>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

onMounted(() => {
  if (!userStore.isAuthenticated) {
    router.push('/')
  }
})

const handleLogout = () => {
  userStore.logout()
  router.push('/')
}
</script>

<style scoped lang="scss">
.profile-container {
  max-width: 702px;
  width: 100%;
  margin: 120px auto 0;
  padding: 42px;
  border-top-left-radius: 2px;
  background-color: #fff;

  @media screen and (max-width: 575.98px){
    height: 100vh;
    margin: 0;
    padding: 24px 16px;
  }
}

h1 {
  width: 100%;
  margin-bottom: 16px;
  padding-bottom: 40px;
  border-bottom: 1px solid #F2F2F2;

  @media screen and (max-width: 575.98px){
    padding-bottom: 16px;
  }
}

.logout-link {
  color: #2B2A29;
  text-decoration: underline;
  font-size: 16px;

  &:hover, &:focus-visible {
    text-decoration: none;
  }
}
</style>
