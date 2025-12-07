<script setup>
import { ROUTES } from '../../utils/route'
</script>
<template>
  <aside
    class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white rounded-xl shadow-xl border-state-300"
  >
    <a href="#">
      <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/logo.svg" alt="" />
    </a>

    <div class="flex flex-col justify-between flex-1 mt-6">
      <nav>
        <ul class="flex flex-col gap-5">
          <li>
            <router-link
              class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
              :to="{ name: ROUTES.HOME }"
            >
              <span class="mx-4 font-medium">Home</span>
            </router-link>
          </li>
          <li
            class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
          >
            <router-link :to="{ name: ROUTES.USERS_LIST }">
              <span class="mx-4 font-medium">Users</span></router-link
            >
          </li>
          <li>
            <router-link
              class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              :to="{ name: ROUTES.USER_CREATE }"
            >
              <span class="mx-4 font-medium">Create</span></router-link
            >
          </li>
        </ul>
        <hr class="my-6 border-gray-200 dark:border-gray-600" />
      </nav>
    </div>
  </aside>
</template>



<style lang="scss" scoped>
</style>