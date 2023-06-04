<script setup lang="ts">
import IconAntiPasta from './icons/IconAntiPasta.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconTwitter from './icons/IconTwitter.vue';

</script>

<template>
    <footer class="grid grid-cols-2 space-y-3 bg-Bleu-Estompe text-Noir-Fonce">
      <ul>
        <li class="flex flex-row pt-4">
          <IconAntiPasta/>
        </li>
        <li class="font-caveat text-center text-noir ">
          <h1>Newsletter</h1>
        </li>
        <li class="font-arial text-center text-gris h-4 ">
          N’hésitez pas à vous inscrire à notre newsletter afin de recevoir les meilleures recettes hebdomadaires de notre site !
        </li>
        <li class="bg-Typo ajout recette mt-2 mb-2 ml-2 mr-2 ">
          Indiquez votre e-mail 
        </li>
        <li class="font-arial text-center text-gris h-4 ">
          Vous pouvez retirer votre consentement à la newsletter de Anti-Pasta à tout moment. Pour en savoir plus, consultez notre <a href="./politique.vue"> politique de protection des données.</a>
        </li>
         <li class="grid grid-cols-4 ">
          <IconTwitter/>
          <IconInstagram/>
          <IconFacebookVue/>
          <IconPinterest/>
         </li>
      </ul>
    </footer>
  </template>