import { database } from "$lib/db.js";
import {json} from "@sveltejs/kit";

export const GET = async ({url})=>{
    const dest = url.searchParams.get('destination')
    let client = await database.getClient();
    let db = await client.db('yangatrips')
    console.log(`dest: ${dest} requested`);
    let destination = await db.collection('destinations').findOne({name: dest})
    console.log(JSON.stringify(destination));
    return json(destination)
    // return new Response(JSON.stringify(destination))
}