<script setup lang="ts">
import { ref, computed, watch } from 'vue'
	import LogoIcon from '@/components/icons/IconAntiPastaSite.vue'
	import SearchIcon from '@/components/icons/IconSearch.vue'
  import { RouterLink } from 'vue-router'

  const activeMenu = ref(false)

  function closeMenu() {
	  activeMenu.value = false
	}
</script>

<template>
  <header class="z-10 flex w-full translate-y-0 items-stretch justify-between bg-Gris2 px-6 py-2 transition-all duration-300 ease-in-out lg:py-0">
    <div class="flex items-center">
      <a href="/">
        <LogoIcon />
      </a>
    </div>

    <div class="flex items-center gap-4 lg:flex-row-reverse">
      <button>
        <SearchIcon />
      </button>

      <button class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden" @click="activeMenu = !activeMenu">
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-black': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'bg-black opacity-0': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ '-translate-y-[9px] -rotate-45 bg-black': activeMenu }"></div>
      </button>

			<nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-Gris2 text-2xl text-white transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100" :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
		    <ul class="mt-[25vh] ml-16 lg:m-0 lg:flex">
		      <li class="menu-item"><RouterLink class="menu-link" to="/" @click="closeMenu">Recettes de Saison</RouterLink></li>
		      <li class="menu-item"><RouterLink class="menu-link" to="/" @click="closeMenu">Contact</RouterLink></li>
		      <li class="menu-item"><RouterLink class="menu-link" to="/" @click="closeMenu">À Propos</RouterLink></li>
		      <li class="menu-item"><RouterLink class="menu-link" to="/" @click="closeMenu">Se connecter / S'inscrire</RouterLink></li>
		    </ul>
		  </nav>
    </div>
  </header>
</template>