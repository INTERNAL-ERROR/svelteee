export async function get(req) {
  // Simulate a delay... instead you'd do something interesting here...
    let emojis = [
        "xD",
        ":)",
        ":(",
        "lol",
        "wow",
        "hahaha",
        "jk"
    ]
   let c = emojis[Math.floor(Math.random() * 7)]

  return { body: { emoji:  c} }
}