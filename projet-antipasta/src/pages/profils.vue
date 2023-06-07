<script setup lang="ts">
import { RouterLink } from 'vue-router';
import TemplateProfilCard from '@/components/TemplateProfilCard.vue';
import { ListeProfil } from '@/backend';

const Pageprofile = await ListeProfil();
</script>

<template>

    <div class="lg:mx-20 mx-10 my-10 flex justify-center">
        <h1 class="my-5">Profils</h1>
    </div>


    <div>
  <ul class="grid lg:grid-cols-3 lg:gap-32">
    <li v-for="unprofil of Pageprofile" v-bind="{...unprofil}">
      <RouterLink :to="{ name: 'profil-id', params: { id: unprofil.id } }">
        <TemplateProfilCard v-bind= "{...unprofil}"/>
      </RouterLink>
    </li>
  </ul>
</div>
</template>