import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  const s = readline();

  const operations = (c: string): number => {
    const pos: number[] = [];
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === c) pos.push(i);
    }
    
    const m = pos.length;

    if (m === 0) {
      return 0;
    }
    
    const mid = Math.floor(m / 2);
    const anchor = pos[mid] - mid;
    
    let total = 0;
    
    for (let i = 0; i < m; i++) {
      total += Math.abs(pos[i] - (anchor + i));
    }
    
    return total;
  };

  if (n === 1) {
    console.log(0);
    return;
  }

  const aTotal = operations("a");
  const bTotal = operations("b");
  console.log(Math.min(aTotal, bTotal));
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
