import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { access } from "$lib/s3access.js";
import * as dotenv from 'dotenv'
dotenv.config()

const bucketName = 'yanga-trips-site-images'

const d_images = [
    "desktop2-pexels-addie-3152126 (1).jpg",
    "desktop3-pexels-pixabay-2363.jpg",
    "desktop4-pexels-sudipta-mondal-1603650.jpg"
]

const m_images = [
    "mobile1-pexels-alex-azabache-3723038.jpg",
    "mobile2-pexels-oleksandr-pidvalnyi-2070485.jpg",
    "mobile3-pexels-nextvoyage-3780224.jpg"
]

let m_signed_urls = []
let d_signed_urls = []

const createPresignedUrlWithClient = async ({ region, bucket, key }) => {
    if (process.env?.LOCATION === 'local'){
        let keys = await access.getAccessKeys()
        const client = new S3Client({
            region,
            credentials: {
                accessKeyId: keys.accessKeyId,
                secretAccessKey: keys.secretAccessKey
            }
        });
        const command = new GetObjectCommand({ Bucket: bucket, Key: key });
        return getSignedUrl(client, command, { expiresIn: 3600 });
    }
    const client = new S3Client({
        region
    });
    const command = new GetObjectCommand({ Bucket: bucket, Key: key });
    return getSignedUrl(client, command, { expiresIn: 3600 });
};

export async function load({ fetch }) {
    d_images.forEach( async image => {
        let url = await createPresignedUrlWithClient({ region: 'us-east-1', bucket: bucketName, key: image })
        d_signed_urls.push(url)
    })
    m_images.forEach(async image => {
        let url = await createPresignedUrlWithClient({ region: 'us-east-1', bucket: bucketName, key: image })
        m_signed_urls.push(url)
    })
    return {
        d_signed_urls,
        m_signed_urls
    }
}