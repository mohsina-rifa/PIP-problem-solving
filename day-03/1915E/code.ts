import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  
  const tokens: string[] = [];
  while (tokens.length < n) {
    const line = readline();
    if (!line) break;
    
    const parts = line.split(/\s+/).filter(Boolean);
    for (let j = 0; j < parts.length; j++) {
      tokens.push(parts[j]);
    }
  }
  
  const arr: number[] = tokens.slice(0, n).map(Number);

  const mp = new Map<number, number>();

  let sum = 0;
  mp.set(0, 1);

  for (let i = 0; i < n; i++) {
    let val = arr[i];

    if (i % 2 === 1) {
      val *= -1;
    }

    sum += val;

    if (mp.has(sum)) {
      console.log("YES");
      return;
    }

    mp.set(sum, (mp.get(sum) || 0) + 1);
  }

  console.log("NO");
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
