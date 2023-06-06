<script setup lang="ts">
import { pb } from '@/backend' ;
import type { ProfilResponse } from '@/pocketbase-types'
import { Oneprofil } from '@/backend'

const props: ProfilResponse = defineProps<ProfilResponse>()
const img2= props.profil
const img1= props.PhotoProfil
const urlImg = pb.files.getUrl(props, img2, { thumb: '100x200' })


</script>

<template>

<div class="relative flex flex-col items-center my-20">
    <img class="relative w-[250px] h-[250px] rounded-lg" :src=urlImg alt="">
    <h1>{{ Prenom }} {{ Nom }}</h1>
</div>

</template>