const { stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

rl.question("Hello who are you", (ans) => {
  console.log(ans);
});
