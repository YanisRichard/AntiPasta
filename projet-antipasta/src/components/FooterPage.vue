<script setup lang="ts">
import IconAntiPasta from './icons/IconAntiPasta.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconPaperPlane from './icons/IconPaperPlane.vue'
import IconFacebook from './icons/IconFacebook.vue';
import IconPinterest from './icons/IconPinterest.vue';

</script>

<template>
    <footer class=" bg-Gris2 text-black">
      <div class="grid grid-cols-1 pt-6 place-items-center">
        <IconAntiPasta/>
      </div>

     <div>
      <ul>
        <li class="font-caveat text-center text-3xl font-bold pt-4 pb-4   ">Newsletter</li>
        <li class="text-center font-arial text-sm text-GrisNoir pt-2 pb-4">N’hésitez pas à vous inscrire à notre newsletter afin de recevoir les meilleures recettes hebdomadaires de notre site !</li>
        <form action="" method="get">

          <div class="grid grid-cols-1">
            <label class="ml-4 pb-2 " for="email">Indiquez votre e-mail: </label>
            <input class="mr-8 ml-8 rounded-default border border-r-black bg-FondCase" type="email" name="email" id="email"/>
          </div>

          <div class="grid grid-cols-1 mt-4 place-items-center">
            <IconPaperPlane/>
          </div>
        </form>
    
    <li class="pt-4 text-center text-sm text-GrisNoir font-arial">Vous pouvez retirer votre consentement à la newsletter de Anti-Pasta à tout moment. Pour en savoir plus, consultez notre politique de protection des données.</li>

    <div class="grid grid-cols-4 place-items-center pt-4 pb-4">
      <IconTwitter/>
      <IconFacebook/>
      <IconInstagram/>
      <IconPinterest/>
    </div>

    <div>
      <li class="ml-2 mr-2 pt-4 pb-4 text-center text-xs font-semibold font-arial">A Propos - Contact - Mentions Légales - CGU - Protection des données personnelles - Cookies </li>
    </div>
      </ul>
     </div>
    </footer>
  </template>