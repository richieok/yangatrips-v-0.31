#!/usr/bin/env node
import * as dotenv from 'dotenv'
dotenv.config()
import { handler } from './build/handler.js';
import express from 'express';

console.log(process.env.PORT);

const app = express();
const PORT = process.env.PORT || 3000;

try{
    app.use(handler);
    
    app.listen(PORT, ()=> {
        console.log(`listening on port: ${PORT}`);
    });

}
catch(e){
    console.log("ERROR!!!");
    console.log(e.message);
}