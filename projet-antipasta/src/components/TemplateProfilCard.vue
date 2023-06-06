<script setup lang="ts">
import { pb } from '@/backend' ;
import type {ProfilResponse } from '@/pocketbase-types'


const props: ProfilResponse = defineProps<ProfilResponse>()

const img0= props.PhotoProfil
// // si pas d'image (undefined) garde undefined
const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })

// const props=defineProps<{id: string,}>();
</script>

<template>
<div class="flex items-center pb-10">
    <div class="border rounded-lg transition-transform duration-300 transform-gpu hover:scale-105">
        <img class="rounded-t-lg" :src="urlImg" alt="">
        <div class="p-5">
            <h3 class="">{{Prenom}} {{ Nom }}</h3>
            <a class="inline-flex items-center py-2 text-sm font-medium rounded-lg">
                Continuer sur ce profil
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</div>


</template>