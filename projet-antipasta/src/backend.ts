import PocketBase from 'pocketbase' ;
import type { ProfilResponse, RecetteResponse } from '@/pocketbase-types';
export const pb = new PocketBase('http://127.0.0.1:8090');

export async function ListeProfil(){
    const ProfilRecords = await pb.collection('profil').getFullList<ProfilResponse>();
   return ProfilRecords;

};

export async function ListeRecette(){
    const RecetteRecords = await pb.collection('recette').getFullList<RecetteResponse>();
    return RecetteRecords;
}

export async function Onerecette(id: string){
    const OnerecetteRecord = await pb.collection('recette').getOne<RecetteResponse>(id, {expand: 'CreePar'});
    return OnerecetteRecord;
}

export async function Oneprofil(id: string){
    const Oneprofilrecord = await pb.collection('profil').getOne<ProfilResponse>(id, {expand: 'recette'});
    return Oneprofilrecord;
}

export async function nomrecetteparsaison(Saison: string){
    const RecetteRecords = await pb.collection('recette').getFullList<RecetteResponse>();
    const RecetteRecordsSaison = RecetteRecords.filter(RecetteRecords => RecetteRecords.Saisons === Saison);
    return RecetteRecordsSaison;
}

export async function Recettecreeparprofil(id: string){
    const Recettecreeparprofillist = await pb.collection('recette').getFullList<RecetteResponse>();
    const RecetteRecordsProfil = Recettecreeparprofillist.filter(Recettecreeparprofillist => Recettecreeparprofillist.CreePar === id);
    return RecetteRecordsProfil;
}

export async function recettesoneprofil(id: string){
    const RecetteRecords = await pb.collection('recette').getFullList<RecetteResponse>();
    const RecetteRecordsProfil = RecetteRecords.filter(RecetteRecords => RecetteRecords.CreePar === id);
    return RecetteRecordsProfil;
}