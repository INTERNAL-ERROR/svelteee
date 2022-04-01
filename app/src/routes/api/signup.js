import {createClient} from "@astrajs/collections"
import jwt from "jsonwebtoken"
import { MongoClient, ServerApiVersion } from "mongodb"


export async function post ({request}) {
    let body = await request.json();
    console.log("asdf")
    console.log(body.hello);
   
        const uri = "mongodb+srv://ethano:SenorGatoSpeakseo941248169@survey.4offd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        MongoClient.connect(uri, function(err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");
          var myobj = {hello:"world"}
            
            dbo.collection("customers").insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                
              });
            dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
        });
    
    return {status: 418, body: {
        wow: "hi!"
    }}
}