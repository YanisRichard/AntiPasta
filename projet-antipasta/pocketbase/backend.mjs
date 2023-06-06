import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090');

export async function ListeProfil(){
    const ProfilRecords = await pb.collection('profil').getFullList();
   return ProfilRecords;

};

export async function ListeRecette(){
    const RecetteRecords = await pb.collection('recette').getFullList();
    return RecetteRecords;
}

export async function Onerecette(id){
    const Onerecetterecord = await pb.collection('recette').getFullList();
    const OnerecetterecordID = Onerecetterecord.filter(Onerecetterecord => Onerecetterecord.id === id);
    return OnerecetterecordID;
}

export async function Oneprofil(id){
    const Oneprofilrecord = await pb.collection('profil').getFullList();
    const OneprofilrecordID = Oneprofilrecord.filter(Oneprofilrecord => Oneprofilrecord.id === id);
    return OneprofilrecordID;
}

export async function nomrecetteparsaison(Saison){
    const RecetteRecords = await pb.collection('recette').getFullList();
    const RecetteRecordsSaison = RecetteRecords.filter(RecetteRecords => RecetteRecords.Saisons === Saison);
    return RecetteRecordsSaison;
}

export async function Recettecreeparprofil(id){
    const Recettecreeparprofillist = await pb.collection('recette').getFullList();
    const RecetteRecordsProfil = Recettecreeparprofillist.filter(Recettecreeparprofillist => Recettecreeparprofillist.CreePar === id);
    return RecetteRecordsProfil;
}