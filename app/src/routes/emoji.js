export async function get(req) {
  // Simulate a delay... instead you'd do something interesting here...
    let emojis = [
        "xD",
        ":)",
        ":(",
    ]
    let c = emojis[Math.random * (emojis.length-1)]

  return { body: { emoji:  "a"} }
}