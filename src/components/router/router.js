import { createWebHistory, createRouter } from 'vue-router'

import UserList from '../../pages/UserList.vue'
import UserCreate from '../../pages/UserCreate.vue'
import Dashbord from '../../pages/Dashbord.vue'
import { ROUTES } from '../../utils/route'

const routes = [
  { path: '/', name: ROUTES.HOME, component: Dashbord, redirect: '/users' },
  { path: '/users', name: ROUTES.USERS_LIST, component: UserList },
  { path: '/user/create', name: ROUTES.USER_CREATE, component: UserCreate },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
