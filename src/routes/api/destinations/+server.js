import { database } from "$lib/db.js";
import {json} from "@sveltejs/kit";

export const GET = async () => {
    let client = await database.getClient();
    let db = await client.db('yangatrips')
    let destinations = await db.collection('destinations').find().toArray()
    return json(destinations)
}