const fs = require("fs");

text = fs.readFileSync("./assets/sample.txt", "utf-8");

console.log(text);
