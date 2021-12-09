const { readFileSync, writeFileSync } = require("fs");

//path, encoded format
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

//filename, value we want to pass

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first}, ${second}`
);

//apend
writeFileSync(
    "./content/result-sync.txt",
    `Here is the result from 2nd addition${first}, ${second}`, {flag:'a'}
  );

  