import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090');

export async function ListeProfil(){
    const ProfilRecords = await pb.collection('profil').getFullList();
   return ProfilRecords;

};

export async function recettesbysaison