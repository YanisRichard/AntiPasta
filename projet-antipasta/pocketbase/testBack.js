// import { ListeProfil } from "./backend.mjs";
// import { ListeRecette } from "./backend.mjs";
// import { nomrecetteparsaison } from "./backend.mjs";
// import { Recettecreeparprofil } from "./backend.mjs";
import { Onerecette } from "./backend.mjs";
import { Oneprofil } from "./backend.mjs";


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

// try{
//     const RecetteRecords = await ListeRecette();
//     console.log(JSON.stringify(RecetteRecords, null, 2));
// } catch (e) {
//     console.error(e);
// }

// try{
//     const RecetteRecordsSaison = await nomrecetteparsaison("Hiver");
//     console.log(JSON.stringify(RecetteRecordsSaison, null, 2));
// } catch (e) {
//     console.error(e);
// }

// try{
//     const RecetteRecordsProfil = await Recettecreeparprofil("wymleqxj87ntbr9");
//     console.log(JSON.stringify(RecetteRecordsProfil, null, 2));
// } catch (e) {
//     console.error(e);
// }

// try{
//     const OnerecetterecordID = await Onerecette("re6ekznebq5w1ps");
//     console.log(JSON.stringify(OnerecetterecordID, null, 2));
// } catch (e) {
//     console.error(e);
// }

try{
    const OneprofilrecordID = await Oneprofil("wymleqxj87ntbr9");
    console.log(JSON.stringify(OneprofilrecordID, null, 2));
} catch (e) {
    console.error(e);
}
