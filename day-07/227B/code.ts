import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  let arrTokens = readline().trim().split(/\s+/).map(Number);
  
  while (arrTokens.length < n) {
    arrTokens = arrTokens.concat(readline().trim().split(/\s+/).map(Number));
  }

  const m = parseInt(readline());
  let qTokens = readline().trim().split(/\s+/).map(Number);
  
  while (qTokens.length < m) {
    qTokens = qTokens.concat(readline().trim().split(/\s+/).map(Number));
  }

  const pos = new Array<number>(n + 1);
  
  for (let i = 0; i < n; i++) {
    pos[arrTokens[i]] = i + 1;
  }

  let vasya = 0;
  let petya = 0;
  
  for (let i = 0; i < m; i++) {
    const v = qTokens[i];
    const p = pos[v];
    
    vasya += p;
    petya += n - p + 1;
  }

  console.log(vasya + " " + petya);
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
