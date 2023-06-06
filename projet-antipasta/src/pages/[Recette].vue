<script setup lang="ts">
import {pb, Onerecette } from '@/backend';
import type { RecetteResponse } from '@/pocketbase-types';
import type { RecetteRecord } from '@/pocketbase-types';
import type { RouterLinkProps } from 'vue-router';
import type { RouterViewProps } from 'vue-router';

const id = defineProps<{ Recette : string }>();
const recette = await Onerecette(id.Recette);
const img0 = recette.PhotoRecette
const urlImg = pb.getFileUrl(recette, img0, {thumb: '306x218'});
</script>

<template>
    <main class="ml-6 mr-6 mt-4 ">
        <div>
            <h2>{{ recette.NomRecette }}</h2>
            <div class="flex justify-center">
                <img :src="urlImg" alt="PhotoRecette">
            </div>
            <div>
                {{ recette.Duree }}
            </div>
            <div>{{ recette.Nb_Personnes }}</div>
            <div>
                {{ recette.Ingredients }}
            </div>
            <div>
                {{ recette.Recette }}
            </div>
            <div>

            </div>
        </div>

    </main>
</template>