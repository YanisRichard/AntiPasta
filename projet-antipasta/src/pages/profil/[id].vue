<script setup lang="ts">
import Templateprofil from '@/components/TemplateProfil.vue'
import TemplateRecetteApercu from '@/components/TemplateRecetteApercu.vue'

import { Oneprofil } from '@/backend';
import { recettesoneprofil } from '@/backend';

const props = defineProps<{ 
    id: string 
}>();

const unprofil = await Oneprofil(props.id)
const listeRecettes = await recettesoneprofil(props.id)
</script>

<template>
<div>

    <h1 class="flex justify-center my-10">Profil</h1>

    <Templateprofil v-bind="{...unprofil}"/>

    
    <div class="w-1/12 mx-auto border-t-2 border-black mt-[50px]"></div>
    <div class="lg:mx-20 mx-10 my-10">
        <h1 class="my-5">Recettes proposées</h1>
        </div>
    <ul class="lg:grid lg:grid-cols-2 lg:gap- lg:justify-center">
        <li v-for="unerecette of listeRecettes" v-bind="{...unerecette}">
            <RouterLink 
             :to="{
                name: 'recette-id',
                params: {
                    id: unerecette.id
                }
             }"
             >

            
                <TemplateRecetteApercu v-bind=" {...unerecette} "/>
            </RouterLink>
        </li>
    </ul>

    
</div>
</template>