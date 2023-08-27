import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { access } from "s3access.js";

let keys = await access.getAccessKeys()

const createPresignedUrlWithClient = ({ region, bucket, key }) => {
    const client = new S3Client({
        region,
        credentials: {
            accessKeyId: keys.accessKeyId,
            secretAccessKey: keys.secretAccessKey
        }
    });
    const command = new GetObjectCommand({ Bucket: bucket, Key: key });
    return getSignedUrl(client, command, { expiresIn: 3600 });
};

export const signedUrls = async ( keys ) => {
    const client = new S3Client({
        region,
        credentials: {
            accessKeyId: keys.accessKeyId,
            secretAccessKey: keys.secretAccessKey
        }
    });
    const command = new GetObjectCommand({ Bucket: bucket, Key: key });
}
