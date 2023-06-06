<script setup lang="ts">
import { pb } from '@/backend' ;
import type { ProfilResponse } from '@/pocketbase-types'
import { Oneprofil } from '@/backend'

const props: ProfilResponse = defineProps<ProfilResponse>()
const img0= props.PhotoProfil
const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })


</script>

<template>
    
<p>test</p>

</template>