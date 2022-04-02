import {createClient} from "@astrajs/collections"
import jwt from "jsonwebtoken"
import { MongoClient, ServerApiVersion } from "mongodb"


export async function post ({request}) {
    let body = await request.json();
    console.log("asdf")
    console.log(body.hello);
    const uri = "mongodb+srv://ethano:SenorGatoSpeakseo941248169@survey.4offd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    
    async function run (){
        await  client.connect().then(() => {console.log("conencted")}).catch(err => {console.log(err)})
        const database = client.db("mydb");
        const collection = database.collection("customers");
        const results = await collection.find({})
        this.data = await results.map(el => {
            return {hello: el.hello, id: el._id}
        })
        return this.data.toArray()
    }

    
    
    

    return {status: 200, body: {
        wow: await run()
    }}
}