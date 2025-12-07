<script setup>
import { reactive } from 'vue'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

// const user = reactive({
//   name: '',
//   email: '',
//   role: '',
// })

// const emits = defineEmits(['add-user', 'edit-user'])

// const addUser = (e) => {
//   e.preventDefault()
//   // if (user.name.trim() || user.email.trim()) {
//   //   return
//   // }

//   userStore.addUser({ ...user })
//   Object.assign(user, {
//     name: '',
//     email: '',
//     role: '',
//   })

//   router.push('/users')
// }

const handleAdd = () => {
  console.log('🔘 Кнопка нажата!')
  console.log('userStore.user:', userStore.user)

  const success = userStore.addUser()

  console.log('✅ addUser вернула:', success)

  if (success) {
    console.log('🚀 Редирект на /users...')
    router.push('/users')
  }
}
</script>
<template>
  <div>
    <h1>Create user</h1>
    <div>
      <div>
        <label for="username" class="block text-sm text-gray-500 dark:text-gray-300"
          >Username</label
        >
        <input
          v-model="userStore.user.name"
          type="text"
          placeholder="John Doe"
          class="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
        />
      </div>
      <div>
        <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">email</label>
        <input
          v-model="userStore.user.email"
          type="text"
          placeholder="John Doe"
          class="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
        />
      </div>

      <button @click.prevent="handleAdd" class="border border-red-500 rounded-md px-4 py-2">
        Add
      </button>
    </div>
  </div>
</template>



