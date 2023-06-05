import { ListeProfil } from "./backend.mjs";
import { recettesbysaison } from "./backend.mjs";

// try {
//     const records = await ListeProfil();
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e);
// }*

try {
    const recettesbysaison = await recettesbysaison('Hiver');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}