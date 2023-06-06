<script setup lang="ts">
import {pb, Oneprofil } from '@/backend';
import type { ProfilResponse } from '@/pocketbase-types';
import type { ProfilRecord } from '@/pocketbase-types';
import type { RouterLinkProps } from 'vue-router';
import type { RouterViewProps } from 'vue-router';

const props: ProfilResponse = defineProps<ProfilResponse>();

const img0= props.PhotoProfil
const urlImg = pb.getFileUrl(props, img0, {thumb: '100x200'});

const info = await Oneprofil(props.id);

// const id = defineProps<{ profil : string }>();
// const profil = await Oneprofil(id.profil);
// const img0 = profil.PhotoProfil
// const urlImg = pb.getFileUrl(profil, img0, {thumb: '306x306'});
</script>

<template>
    <main class="ml-6 mr-6 mt-4 ">
        <div>
            <h2>{{ Prenom }} {{ Nom }}</h2>
            <div class="flex justify-center">
                <img :src="urlImg" alt="PhotoProfil">
            </div>
            <div>
                {{ Mail }}
            </div>
            <div>{{ RecetteProposee }}
            </div>
        </div>

    </main>
</template>