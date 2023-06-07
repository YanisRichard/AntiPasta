<script setup lang="ts">
import { pb } from '@/backend' ;
import type { RecetteResponse } from '@/pocketbase-types'

const props: RecetteResponse = defineProps<RecetteResponse>()

const img0= props.PhotoRecette
const urlImg = pb.files.getUrl(props, img0, { thumb : '100x200'})
</script>

<template>
    <div class="lg:grid lg:grid-cols-3 gap-4 my-10 mx-10">
        <div>
            <div class="flex flex-col items-center">
            <div class="mb-4">
            <img class="h-52 w-fit" :src="urlImg" alt="">
            </div>
            <h1>{{ NomRecette }}</h1>
            <h1 class="border rounded-lg border-Jaune p-2">{{ Nb_Personnes }} personne(s)</h1>

            <h1 class="font-bold mt-5">Ingrédients</h1>
            <li class="mx-32">{{ Ingredients }}</li>
            </div>
        </div>

        <div class="flex flex-col items-center mx-10">
        <h1 class="font-bold mt-5">Recette</h1>
        <p class="my-5">{{ Recette }}</p>
        <p class="my-5">{{ Recette2 }}</p>
        <p class="my-5">{{ Recette3 }}</p>
        <p class="my-5">{{ Recette4 }}</p>
        <p class="my-5">{{ Recette5 }}</p>
        </div>

        <div class="flex flex-col items-center mx-10 mt-5">
        <p class="my-5">{{ Recette6 }}</p>
        <p class="my-5">{{ Recette7 }}</p>
        <p class="my-5">{{ Recette8 }}</p>
        <p class="my-5">{{ Recette9 }}</p>
        </div>
    </div>
</template>