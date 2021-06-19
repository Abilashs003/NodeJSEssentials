const fs = require("fs");

// reading files synchronously

console.log("started reading files");
const files = fs.readdirSync("./assets");
console.log("complete");

console.log(files);

// reading files asynchronously

console.log("read async");

fs.readdir("./assets", (err, files) => {
  if (err) {
    console.log(err);
    process.exit();
  } else {
    console.log(files);
    console.log("complete");
  }
});
