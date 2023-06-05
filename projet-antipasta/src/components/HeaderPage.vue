<script setup lang="ts">
import { ref, computed, watch } from 'vue'
	import LogoIcon from '@/components/icons/IconLogo.vue'
	import SearchIcon from '@/components/icons/IconSearch.vue'
  import { RouterLink } from 'vue-router'

  const activeMenu = ref(false)
</script>

<template>
  <header class="z-10 flex w-full translate-y-0 items-stretch justify-between bg-Gris2 px-6 py-2 transition-all duration-300 ease-in-out">
    <div class="flex items-center">
      <a href="/">
        <LogoIcon />
      </a>
    </div>

    <div class="flex items-center gap-4">
      <button>
        <SearchIcon />
      </button>

      <button class="relative z-10 flex h-5 w-8 flex-col justify-between" @click="activeMenu = !activeMenu">
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-white': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'bg-white opacity-0': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ '-translate-y-[9px] -rotate-45 bg-white': activeMenu }"></div>
      </button>

			<nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-indigo text-2xl text-white transition-all duration-300 ease-in-out" :class="{ '!visible opacity-100': activeMenu }">
		    <ul class="mt-[25vh] ml-16">
		      <li><RouterLink class="menu-link" to="/">Recettes de Saison</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/">Contact</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/">À Propos</RouterLink></li>
		      <li><RouterLink class="menu-link" to="/">Se connecter / S'inscrire</RouterLink></li>
		    </ul>
		  </nav>
    </div>
  </header>
</template>