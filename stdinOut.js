// process.stdout.write("Hello");
// process.stdout.write("How are you");

const questions = ["what", "why", "where"];

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
};

ask();

process.stdin.on("data", (data) => {
  process.stdout.write(data);
  process.exit();
});
