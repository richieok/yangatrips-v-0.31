
import { MongoClient } from 'mongodb';
import { SSMClient, GetParametersCommand, GetParameterCommand } from "@aws-sdk/client-ssm";
// import { env } from "$env/dynamic/private"
import * as dotenv from 'dotenv'
dotenv.config()

let username = ''
let password = ''
const appName = 'yanga-app'

if (process.env?.LOCATION === 'local') {
    username = process.env.DB_USER
    password = process.env.DB_PASSWORD
} else {
    username = await accessParameter(`/${appName}/mongodb/username`)
    password = await accessParameter(`/${appName}/mongodb/password`)
}

export const database = ( function () {
    let client
    const DB_URI = `mongodb+srv://${username}:${password}@cluster0.z8ae8.mongodb.net/?retryWrites=true&w=majority`;
    function init(){
        client = new MongoClient(DB_URI, { useUnifiedTopology: true })
    }
    return {
        getClient: () => {
            if (!client) {
                console.log("Initializing DB");
                init()
            }
            console.log('Initialized');
            return client
        }
    }
})()

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
