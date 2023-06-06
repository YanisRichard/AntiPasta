<script setup lang="ts">
import { pb } from '@/backend' ;
import type { ProfilResponse } from '@/pocketbase-types'
import { Oneprofil } from '@/backend'

const props: ProfilResponse = defineProps<ProfilResponse>()

const img0= props.PhotoProfil
// // si pas d'image (undefined) garde undefined
const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })

// const props=defineProps<{id: string,}>();
const info = await Oneprofil(props.id);
</script>

<template>
    
    <h3 class="">{{Prenom}}</h3>

</template>