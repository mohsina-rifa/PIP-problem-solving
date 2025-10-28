import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  const s = readline();

  let sum = 0;
  
  const seen = new Set<string>();
  
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    
    if (!seen.has(ch)) {
      sum += (n - i);
      seen.add(ch);
    }
  }

  console.log(sum);
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
