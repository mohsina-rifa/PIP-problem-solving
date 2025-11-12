import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  const s = readline();
  
  let count = 0;
  
  const pos: number[] = [];
  
  for (let i = 0; i < n; ++i) {
    if (s[i] === '1') {
      count++;
      pos.push(i + 1);
    }
  }
  console.log(count);
  
  if (count > 0) {
    console.log(pos.join(' '));
  } else {
    console.log();
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
