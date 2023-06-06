<script setup lang="ts">
import { pb } from '@/backend' ;
import type { ProfilResponse } from '@/pocketbase-types'
import { ListeRecette } from '@/backend';
import { Onerecette } from '@/backend';
import TemplateRecette from '@/components/TemplateRecette.vue'

const props = defineProps<{ id: string }>();
const unerecette = await Onerecette(props.id)
</script>

<template>
    <div>
        <TemplateRecette v-bind="{...unerecette}"/>
    </div>
</template>