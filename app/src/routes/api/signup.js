import {createClient} from "@astrajs/collections"
import jwt from "jsonwebtoken"

export async function post ({request}) {
    let body = await request.json();
    console.log("asdf")
    console.log(body.hello);
    
    return {status: 200, body: {
        wow: "hi!"
    }}
}