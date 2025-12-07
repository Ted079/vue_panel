import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [],
    user: {
      id: null,
      name: '',
      email: '',
      role: '',
    },
    nextId: 1,
    isLoaded: false,
  }),

  //   getters: {
  //     doubleCount: (state) => state.count * 2,
  //   },

  actions: {
    async getUsers() {
      if (this.isLoaded) {
        return
      }
      try {
        const res = await axios('https://jsonplaceholder.typicode.com/users')
        this.nextId = Math.max(...res.data.map((user) => user.id))
        this.users = res.data
        this.isLoaded = true
      } catch (error) {
        console.error('Ошибка при получения пользователя:', error)
      }
    },

    addUser() {
      const newUser = {
        id: this.nextId++,
        ...this.user,
      }
      this.users.push(newUser)
      return true // ← ВАЖНО: return true
    },

    // async addUser(user) {
    //   try {
    //     const res = await axios.post('https://jsonplaceholder.typicode.com/users', user)
    //     const newUser = {
    //       id: this.nextId++,
    //       ...user
    //     };
    //     this.users.push(newUser)
    //   } catch (error) {
    //     console.error('Ошибка при добавлении пользователя:', error)
    //   }
    // },
  },
})
