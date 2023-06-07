<script setup lang="ts">
import { Oneprofil } from '@/backend';
import Profil from './[Profil].vue';
// import { ProfilRecord } from '@/pocketbase-types';
import { RouterLink } from 'vue-router';
import TemplateProfilCard from '@/components/TemplateProfilCard.vue';
import { ListeProfil } from '@/backend';

const Pageprofile = await ListeProfil();

</script>

<template class="bg-Gris1">
  <div class="text-center bg-Gris1 p-10">
    <h1>Anti-Pasta</h1>
    <h2>Budget 0, Super Cuistot !</h2>
  </div>

  <div class="text-center bg-Gris1 pt-4 pb-4">
    <h4 class="text-base pb-4 ">Bienvenue sur Anti-Pasta, la référence des recettes pas chères, et faciles !</h4>

    <div class="text-sm lg:mx-32 mx-12">
      <p class="py-3">
        Notre équipe passionnée de chefs culinaires a rassemblé une vaste collection de recettes alléchantes et abordables, adaptées à tous les palais et à toutes les occasions. Que vous soyez un étudiant, une famille nombreuse ou simplement soucieux de votre budget, vous trouverez ici des idées inspirantes pour régaler vos papilles sans vous ruiner.
      </p>

      <p class="py-3">Vous êtes à la recherche d'idées délicieuses et économiques pour vos repas, ne cherchez pas plus loin. Nous sommes là pour vous aider à concocter des plats savoureux qui ne vident pas votre portefeuille, tout en vous permettant de rompre avec la monotonie des pâtes.</p>
    </div>

    <a href="/recettedesaison">
    <button class="bg-Jaune rounded-lg text-black font-bold py-2 px-4 rounded transition-transform duration-300 transform-gpu hover:scale-105">
  Découvrez des recettes de saison
  </button>
  </a>

  </div>
      <li class="bg-Jaune rounded-xl my-8 ml-6 mr-6 text-center text-xl font-bold font-caveat">Liste des profils</li>

<div>
  <ul class="grid lg:grid-cols-3 lg:gap-32 bg-Gris1">
    <li v-for="unprofil of Pageprofile" v-bind="{...unprofil}">
      <RouterLink :to="{ name: 'profil-id', params: { id: unprofil.id } }">
        <TemplateProfilCard v-bind= "{...unprofil}"/>
      </RouterLink>
    </li>
  </ul>
</div>

                
</template>