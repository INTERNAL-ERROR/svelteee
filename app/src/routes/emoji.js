import {createClient} from "@astrajs/collections"
// create an {astra_db} client


export async function get(req) {
  // Simulate a delay... instead you'd do something interesting here...
    //let db = await fetch("")
    
    let emojis = [
        "xD",
        ":)",
        ":(",
        "lol",
        "wow",
        "hahaha",
        "jk"
    ]
   let c = emojis[Math.floor(Math.random() * 7)] + import.meta.env.VITE_ASTRA_DB_ID + " | "
    //console.log(users)

  return { body: { emoji:  c} }
}