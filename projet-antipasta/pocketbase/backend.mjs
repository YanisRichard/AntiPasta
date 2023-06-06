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

// export async function Recettesparsaisons(){
//     const RecettesRecords = await pb.collection('recette').getFullList({
//         filter: recette.Saisons = '${Saisons}' ,
//         expand: 'recette',
//     });
//     return RecettesRecords;
// }