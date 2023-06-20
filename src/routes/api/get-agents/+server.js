import { database } from "$lib/db.js";
import {json} from "@sveltejs/kit";

export const GET = async function() {
    let client = await database.getClient();
    let db = await client.db('yangatrips')
    let agents = await db.collection('agents').find().toArray()
    // console.log(agents);
    return json(agents);
}