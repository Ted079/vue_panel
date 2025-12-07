<template>
  <div class="px-8 py-8">
    <div class="flex gap-5 min-h-screen">
      <Sidebar />
      <div class="flex-1">
        <Header />

        <main class="">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
</script>

<style lang="scss" scoped>
</style>