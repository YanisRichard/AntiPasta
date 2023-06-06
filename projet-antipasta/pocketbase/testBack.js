// import { ListeProfil } from "./backend.mjs";
import { ListeRecette } from "./backend.mjs";

// // try {
// //     const records = await ListeProfil();
// //     console.log(JSON.stringify(records, null, 2));
// // } catch (e) {
// //     console.error(e);
// // }*

// try{
//     const ProfilRecords = await ListeProfil();
//     console.log(JSON.stringify(ProfilRecords, null, 2));
// } catch (e) {
//     console.error(e);
// }

try{
    const RecetteRecords = await ListeRecette();
    console.log(JSON.stringify(RecetteRecords, null, 2));
} catch (e) {
    console.error(e);
}
