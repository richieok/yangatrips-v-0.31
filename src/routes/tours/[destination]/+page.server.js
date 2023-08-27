import { error } from "@sveltejs/kit";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { access } from "$lib/s3access.js";

let keys = await access.getAccessKeys()

let bucketName = "yanga-trips-markup"
const region = "us-east-1"

export async function load( {params, fetch} ){
    let {destination} = params
    let markUp = ""
    const res = await fetch(`/api/destination?destination=${destination}`)
    let j = await res.json()
    j.description = ""
    if (res.ok){
        try {
            markUp = await getMarkup(destination)
            j.description = markUp
        }
        catch (err) {
            console.log(err.message);
        }
        return j
    }
    throw error(404, 'Not Found')
}

async function getMarkup(name){
    const s3Client = new S3Client({
        region: region,
        credentials: {
            accessKeyId: keys.accessKeyId,
            secretAccessKey: keys.secretAccessKey
        }
    })
    const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: `${name}/dest_desc.html`
    })
    const response = await s3Client.send(command)
    const content = await response.Body.transformToString()
    return content
}