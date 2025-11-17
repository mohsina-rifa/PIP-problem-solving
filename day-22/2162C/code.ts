import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const [aStr, bStr] = readline().split(" ");
  
  const n = parseInt(aStr);
  const m = parseInt(bStr);

  let k = 1;
  
  while (k <= n) {
    k *= 2;
  }

  if (k <= m) {
    console.log(-1);
  } else {
    console.log(2);
    console.log(`${(k - 1) ^ n} ${(k - 1) ^ m}`);
  }
};

const main = (): void => {
  // input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
  input = fs
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .map((line) => line.trim());
  const testcases: number = parseInt(readline());

  let loop = testcases;
  while (loop--) {
    solve();
  }
};

main();
