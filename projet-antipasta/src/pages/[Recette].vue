<script setup lang="ts">
import {pb, Onerecette } from '@/backend';
import type { RecetteResponse } from '@/pocketbase-types';
import type { RecetteRecord } from '@/pocketbase-types';
import type { RouterLinkProps } from 'vue-router';
import type { RouterViewProps } from 'vue-router';

const props: RecetteResponse = defineProps<RecetteResponse>();

const img0= props.PhotoRecette
const urlImg = pb.getFileUrl(props, img0, {thumb: '306x218'});

const info = await Onerecette(props.id);
</script>

<template>
    <main class="ml-6 mr-6 mt-4 ">
        <div>
            <h2>{{ NomRecette }}</h2>
            <div class="flex justify-center">
                <img :src="urlImg" alt="PhotoRecette">
            </div>
            <div>
                {{ Duree }}
            </div>
            <div>{{ Nb_Personnes }}</div>
            <div>
                {{ Ingredients }}
            </div>
            <div>
                {{ Recette }}
            </div>
            <div>

            </div>
        </div>

    </main>
</template>