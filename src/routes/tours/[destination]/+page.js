import { error } from "@sveltejs/kit";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const region = "eu-west-3"
const accessKeyId = "AKIAYV7NLEXLZFHOGZ5N"
const secretAccessKey = "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"

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
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey
        }
    })
    const command = new GetObjectCommand({
        Bucket: 'yangatrips.com',
        Key: `images/${name}/dest_desc.html`
    })
    const response = await s3Client.send(command)
    // console.log(response)
    const content = await response.Body.transformToString()
    return content
}