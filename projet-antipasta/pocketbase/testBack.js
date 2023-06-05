import { stringify } from "querystring";
import { pb } from "./backend.mjs"
import { ListeProfil } from "./backend.mjs";

try {
    const ProfilRecords = await ListeProfil();
    console.log(JSON.stringify(ProfilRecords, null, 2));
} catch (e) {
    console.error(e);
}