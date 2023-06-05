<script setup lang="ts"></script>

<template>
    <div class="w-full h-[186px] bg-black"><img class="w-full h-full bg-opacity-50" :src="urlImg"> </div>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-3xl font-bold">{{recette.NomRecette}}</h1>
        <p class="text-xl">{{recette.description}}</p>
        <p class="text-xl">{{recette.ingredients}}</p>
        <p class="text-xl">{{recette.preparation}}</p>
    </div>
</template>