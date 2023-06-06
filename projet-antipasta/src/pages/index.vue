<script setup lang="ts">
import { Oneprofil } from '@/backend';
import Profil from './[Profil].vue';
// import { ProfilRecord } from '@/pocketbase-types';
import { RouterLink } from 'vue-router';
import TemplateProfilCard from '@/components/TemplateProfilCard.vue';
import { ListeProfil } from '@/backend';

const Pageprofile = await ListeProfil();

</script>

<template>
  <div class="text-center bg-Gris1 ">
    <h1 >Anti-Pasta</h1>
    <h2>Budget 0, Super Cuistot !</h2>
  </div>

  <div class="text-center bg-Gris1 pt-4 pb-4">
    <h4 class="text-sm pb-4 ">Bienvenue sur Anti-Pasta, la référence des recettes pas chères, et faciles !</h4>
    <h4 class="text-sm ml-2 mr-2">Au menu d'aujourd'hui, nous vous proposons ces magnifiques recettes concoctées par nos soins ! </h4>
  </div>

  <div>
    <ul class="bg-Gris1 pb-4">
      <img class="flex" src="public/img/106_523409951.webp" alt="Un repas">
        <li class="bg-Jaune rounded-xl mt-4 ml-6 mr-6 text-center text-xl font-bold font-caveat">Recettes de la Semaine</li>
    </ul>

    <ul class="bg-Gris1 pb-6">
      <img class="flex pt-6 pb-2 bg-Gris1 place-items-center" src="public/img/59380_w1024h768c1cx2808cy1872.webp" alt="Une délicieuse fondue savoyarde">
      <li class="bg-Jaune rounded-xl mt-4  ml-6 mr-6 text-center text-xl font-bold font-caveat">Recettes de Saison</li>
    </ul>

    <ul class="bg-Gris1 pb-8">
      <img class="pt-4 pb-2 bg-Gris1" src="public/img/i145484-pizza-saint-valentin-pizza-forme-de-coeur.webp" alt="Une pizza en forme de coeur">
      <li class="bg-Jaune rounded-xl mt-4  ml-6 mr-6 text-center text-xl font-bold font-caveat">Recettes Favorites</li>
    </ul>
  </div>

<div>
  <ul class="grid lg:grid-cols-4 lg:gap-8 grid-cols-2 gap-4">
    <li v-for="unprofil of Pageprofile" v-bind="{...unprofil}">
      <RouterLink :to="{ name: 'profil-id', params: { id: unprofil.id } }">
        <TemplateProfilCard v-bind= "{...unprofil}"/>
      </RouterLink>
    </li>
  </ul>
</div>

                
</template>