import { ListeProfil } from "./backend.mjs";
import { recettesclassedbysaison } from "./backend.mjs";

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
    const recettesRecords = await recettesclassedbysaison('Hiver');
    console.log(JSON.stringify(recettesRecords, null, 2));
} catch (e) {
    console.error(e);
}