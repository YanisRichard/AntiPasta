import PocketBase from 'pocketbase' ;
import type { ProfilResponse, RecetteResponse } from '@/pocketbase-types';
export const pb = new PocketBase('http://0.0.0.0:80');

export async function ListeProfil(){
    const ProfilRecords = await pb.collection('profil').getFullList();
   return ProfilRecords;

};

export async function ListeRecette(){
    const RecetteRecords = await pb.collection('recette').getFullList();
    return RecetteRecords;
}

export async function Onerecette(id: string){
    const Onerecetterecord = await pb.collection('recette').getFullList();
    const OnerecetterecordID = Onerecetterecord.filter(Onerecetterecord => Onerecetterecord.id === id);
    return OnerecetterecordID;
}

export async function Oneprofil(id: string){
    const Oneprofilrecord = await pb.collection('profil').getOne<ProfilResponse>(id);
    return Oneprofilrecord;
}

export async function nomrecetteparsaison(Saison: string){
    const RecetteRecords = await pb.collection('recette').getFullList();
    const RecetteRecordsSaison = RecetteRecords.filter(RecetteRecords => RecetteRecords.Saisons === Saison);
    return RecetteRecordsSaison;
}

export async function Recettecreeparprofil(id: string){
    const Recettecreeparprofillist = await pb.collection('recette').getFullList();
    const RecetteRecordsProfil = Recettecreeparprofillist.filter(Recettecreeparprofillist => Recettecreeparprofillist.CreePar === id);
    return RecetteRecordsProfil;
}

export async function recettesoneprofil(id: string){
    const RecetteRecordsProfil = await pb.collection('recette').getFullList<RecetteResponse>({expand: 'profil', filter: `profil.id = '${id}'`});
    return RecetteRecordsProfil;
}