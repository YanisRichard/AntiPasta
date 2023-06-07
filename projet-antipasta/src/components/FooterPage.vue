<!-- <script setup lang="ts">
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
            <label class="ml-80 pb-2 " for="email">Indiquez votre e-mail: </label>
            <input class="mr-80 ml-80 rounded-default border border-r-black bg-FondCase" type="email" name="email" id="email"/>
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
      <ul class="ml-2 mr-2 pt-4 pb-4 text-center text-xs font-semibold font-arial flex justify-center">
        <li><a href="apropos">À Propos -</a></li>
        <li><a href="contact">- Contact -</a></li>
        <li><a href="mlg">- Mentions Légales -</a></li>
        <li><a href="cgu">- CGU -</a></li>
        <li><a href="ppd">- Protection des données personnelles -</a></li>
        <li><a href="page404">- Cookies</a></li>
      </ul>

      <p class="text-center text-GrisNoir text-xs">
        Projet réalisé dans le cadre d’un exercice pédagogique au département MMI de Montbéliard
      </p>
    </div>
      </ul>
     </div>
    </footer>
  </template> -->

  <script setup lang="ts">
	import FacebookIcon from '@/components/icons/IconFacebook.vue'
	import TwitterIcon from '@/components/icons/IconTwitter.vue'
	import YoutubeIcon from '@/components/icons/IconYoutube.vue'
	import InstagramIcon from '@/components/icons/IconInstagram.vue'
	import LogoFooterIcon from '@/components/icons/IconAntiPastaSite.vue'
</script>

<template>
  <footer class="grille space-y-6 bg-Gris2 py-16 px-6 lg:space-y-0">
		<LogoFooterIcon />
    <nav class="space-y-3 col-span-3 col-start-7">
      <h4 class="font-bold uppercase">Menu</h4>
      <ul>
        <li><a href="apropos">À Propos</a></li>
        <li><a href="mlg">Mentions légales</a></li>
        <li><a href="contact">Formulaire de contact</a></li>
      </ul>
    </nav>

    <div class="space-y-3 col-span-3 col-start-10">
      <h4 class="font-bold uppercase">Contact</h4>
      <address>
        6 Rue de la Chapelle<br />25200 Montbéliard<br />
        <a href="tel:0619856350">06 19 85 63 50</a><br />
        <a href="mailto:conservatoire@agglo-belfort.fr">antipasta@outlook.fr</a>
      </address>
    </div>

    <nav class="col-span-3 col-start-7">
      <h4 class="font-bold uppercase">Autre</h4>
      <ul>
        <li><a href="cgu">CGU</a></li>
        <li><a href="ppd">Protection des données personnelles</a></li>
        <li><a href="page404">Cookies</a></li>
      </ul>
    </nav>

    <div class="space-y-3 col-span-3 col-start-10">
      <h4 class="font-bold uppercase">Nous suivre</h4>
      <ul class="flex gap-4">
        <li>
          <a href="https://facebook.com" aria-label="facebook"><FacebookIcon /></a>
        </li>
        <li>
          <a href="https://instagram.com" aria-label="instagram"><InstagramIcon /></a>
        </li>
        <li>
          <a href="https://twitter.com" aria-label="twitter"><TwitterIcon /></a>
        </li>
      </ul>
    </div>
  </footer>
</template>
