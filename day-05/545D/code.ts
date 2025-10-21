import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  const vec: number[] = readline().split(' ').map(Number);

  vec.sort((a, b) => a - b);

  let time = 0;
  let change = 0;
  
  for (let i = 0; i < n; i++) {
    if (time <= vec[i]) {
      change++;
      time += vec[i];
    }
  }

  console.log(change);
};

const main = (): void => {
  // input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
  input = fs
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .map((line) => line.trim());
  const testcases: number = 1;

  let loop = testcases;
  while (loop--) {
    solve();
  }
};

main();
