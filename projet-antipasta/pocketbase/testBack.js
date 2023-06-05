import { stringify } from "querystring";
import { pb } from "./backend.mjs"
import { ListeProfil } from "./backend.mjs";

try {
    const records = await ListeProfil();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}