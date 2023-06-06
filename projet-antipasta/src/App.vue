<script setup lang="ts">
import type { RouterView } from 'vue-router';
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
</script>

<template>
  <HeaderPage/>

   <main>

    <Suspense>
    <RouterView />
  </Suspense>
  </main>

  <FooterPage />
</template>

<style scoped>
</style>
