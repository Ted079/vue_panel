
<script setup>
import { reactive, ref } from 'vue'
import UserCreate from './UserCreate.vue'
import { useUserStore } from '../store/user'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()

console.log(userStore.users)

onMounted(() => {
  console.log('📄 UserList смонтирован')
  console.log('Users до getUsers:', userStore.users)

  userStore.getUsers()

  console.log('Users после getUsers:', userStore.users)
  // userStore.getUsers()
})
</script>

<template>
  <div class="bg-white w-full m-auto h-screen rounded-xl shadow-xl border-state-300 px-8 py-8">
    <div
      v-for="user in userStore.users"
      :key="user.id"
      class="bg-red-400 flex justify-between px-5 py-5"
    >
      <div>{{ user.name }}</div>
      <div>{{ user.email }}</div>
      <div>{{ user.role }}</div>
    </div>

    <hr class="my-6 border-gray-200 dark:border-gray-600" />
    <!-- <UserCreate @add-user="userStore.addUser" /> -->
    <div>{{ userStore.users.length }} users в списке</div>
  </div>
</template>
<style lang="sass" scoped>
</style>