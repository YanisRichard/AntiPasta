<script setup lang="ts">
import { pb } from '@/backend' ;
import type { ProfilResponse } from '@/pocketbase-types'
import { ListeProfil } from '@/backend';
import { Oneprofil } from '@/backend';
import Templateprofil from '@/components/TemplateProfil.vue'
import TemplateRecette from '@/components/TemplateRecette.vue'

const props = defineProps<{ id: string }>();
const unprofil = await Oneprofil(props.id)
</script>

<template>
<div>
    <Templateprofil v-bind="{...unprofil}"/>

    
</div>
</template>