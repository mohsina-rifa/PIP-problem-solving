import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const parts = readline().trim().split(/\s+/);
  
  const x = Number(parts[0]);
  const y = Number(parts[1]);
  const k = Number(parts[2]);

  const a = Math.floor((x + k - 1) / k);
  const b = Math.floor((y + k - 1) / k);

  let move: number;

  if (a === b) move = 2 * a;
  else if (a > b) move = 2 * a - 1;
  else move = 2 * b;

  console.log(move);
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
