import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090');

export async function ListeProfil(){
    const ProfilRecords = await pb.collection('profil').getFullList();
   return ProfilRecords;
<<<<<<< HEAD
};

=======
}

export async function recettesbysaison(saison){
    const trirecettesbyraison = await pb.collection('recettes').getFullList();
    const recettesbysaison = recettes.filter(recette => recette.saison == saison);
    return recettesbysaison;
}
>>>>>>> d973cc33e497e0ec52759edeccf2a339c063b1f5
