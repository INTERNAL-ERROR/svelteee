async function get(req) {
  let emojis = [
    "xD",
    ":)",
    ":(",
    "lol",
    "wow",
    "hahaha",
    "jk"
  ];
  let c = emojis[Math.floor(Math.random() * 7)] + "Bob";
  return { body: { emoji: c } };
}
export { get };
