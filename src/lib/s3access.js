import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";
import * as dotenv from 'dotenv'
dotenv.config()

async function accessParameter(paraName) {
    const client = new SSMClient({ region: "us-east-1" });
    const input = {
        Name: paraName,
        WithDecryption: true
    }
    const command = new GetParameterCommand(input);
    const response = await client.send(command);
    return response.Parameter.Value
}

export const access = ( function() {
    let access
    async function init(){
        let accessKeyId
        let secretAccessKey
        if (process.env?.LOCATION === 'local') {
            accessKeyId = process.env.ACCESS_KEY_ID
            secretAccessKey = process.env.SECRET_ACCESS_KEY
        } else {
            accessKeyId = await accessParameter(`/yanga-app/s3-access/access-key-id`)
            secretAccessKey = await accessParameter(`/yanga-app/s3-access/secret-access-key`)
        }
        console.log(accessKeyId, secretAccessKey);
        access = {
            accessKeyId,
            secretAccessKey
        }
    }
    return {
        getAccessKeys: async ()=>{
            if (!access) {
                await init()
            }
            return access
        }
    }
})()