<script setup lang="ts">
import {pb, Oneprofil } from '@/backend';
import type { ProfilResponse } from '@/pocketbase-types';
import type { ProfilRecord } from '@/pocketbase-types';
import type { RouterLinkProps } from 'vue-router';
import type { RouterViewProps } from 'vue-router';

const id = defineProps<{ Profil : string }>();
const profil = await Oneprofil(id.Profil);
const img0 = profil.PhotoProfil
const urlImg = pb.getFileUrl(profil, img0, {thumb: '306x306'});
</script>

<template>
    <main class="ml-6 mr-6 mt-4 ">
        <div>
            <h2>{{ profil.Prenom }} {{ profil.Nom }}</h2>
            <div class="flex justify-center">
                <img :src="urlImg" alt="PhotoProfil">
            </div>
            <div>
                {{ profil.Mail }}
            </div>
            <div>{{ profil.RecetteProposee }}
            </div>
        </div>

    </main>
</template>