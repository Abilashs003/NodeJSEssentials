console.log(process.argv);

const [, , firstName, LastName] = process.argv;

console.log(firstName);
console.log(LastName);

const grab = (flag) => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  console.log(indexAfterFlag);
  console.log(process.argv[indexAfterFlag]);
  return process.argv[indexAfterFlag];
};

const user = grab("--user");

console.log(user);
