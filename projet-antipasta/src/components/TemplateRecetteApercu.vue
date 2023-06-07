<script setup lang="ts">
import { pb } from '@/backend' ;
import type { RecetteResponse } from '@/pocketbase-types'

const props: RecetteResponse = defineProps<RecetteResponse>();

const img0= props.PhotoRecette
const urlImg = pb.files.getUrl(props, img0, { thumb : '100x200'})
</script>

<template>

    <div class="flex flex-col my-10">

        <div class="transition-transform duration-300 transform-gpu hover:scale-105">
        <div class="flex justify-center">
            <img class="h-64 w-fit justify-center border border-[6px]" :src="urlImg">
        </div>

        <div class="flex justify-center text-black text-xl text-center py-2 mx-10 lg:mx-36 lg:px-10">
            <p>{{ NomRecette }}</p>
        </div>
        </div>
    </div>
</template>