<script setup lang="ts">
import { pb } from '@/backend' ;
import type { RecetteResponse } from '@/pocketbase-types'

const props: RecetteResponse = defineProps<RecetteResponse>()

</script>

<template>
<p>{{ NomRecette }}</p>
</template>