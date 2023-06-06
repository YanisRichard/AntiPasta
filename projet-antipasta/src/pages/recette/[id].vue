<script setup lang="ts">
import { pb } from '@/backend' ;
import type { RecetteResponse } from '@/pocketbase-types'
import { Onerecette } from '@/backend'

const props: RecetteResponse = defineProps<RecetteResponse>()

const img0= props.PhotoRecette
// // si pas d'image (undefined) garde undefined
const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })

// const props=defineProps<{id: string,}>();
const info = await Onerecette(props.id);
</script>

<template>
    
    <h3 class="">{{NomRecette}}</h3>

</template>