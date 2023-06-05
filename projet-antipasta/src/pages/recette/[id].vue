<script setup lang="ts"></script>

<template>
    <div class="w-full h-[186px] bg-black"><img class="w-full h-full bg-opacity-50" :src="urlImg"> </div>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-3xl font-bold">{{recette.NomRecette}}</h1>
        <p class="text-xl">{{recette.Favori}}</p>
        <div class="w=1/3 flex justify-center items-center border border-[#FFD130]">
            <p class="text-xl">{{recette.Nb_Personnes}}</p>
        </div>
        <p class="text-xl">{{recette.Ingredients}}</p>
        <p class="text-xl">{{recette.Recette}}</p>
    <div class="flex flex-row items-center justify-left w-1/2 ml-5">
        <h1 class="text-3xl font-bold font-caveat">Tags</h1>
        <div class="w-auto h-auto bg-Jaune border border-radius:10">{{ recette.Saison }}</div>
        <div class="w-auto h-auto bg-Jaune border border-radius:10">{{ recette.Type }}</div>
        <div class="w-auto h-auto bg-Jaune border border-radius:10">{{ recette.Duree }}</div>
    </div>
    </div>
</template>