import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  
  const arr: number[] = [];
  
  while (arr.length < n) {
    const parts = readline().split(/\s+/).filter(Boolean).map(Number);
    for (const part of parts) arr.push(part);
  }

  const brr: number[] = new Array(n + 1);
  const mp: Map<number, number> = new Map();
  
  for (let i = 1; i <= n; i++) {
    brr[i] = arr[i - 1];
    mp.set(brr[i], i);
  }

  const sorted = [0].concat(arr.slice().sort((x, y) => x - y));
  const limit = 2 * n - 1;
  
  let counter = 0;
  
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const product = 1 * sorted[i] * sorted[j];
      
      if (product > limit) {
        break;
      }
      
      const sum = (mp.get(sorted[i]) ?? 0) + (mp.get(sorted[j]) ?? 0);
      
      if (product === sum) {
        counter++;
      }
    }
  }

  console.log(counter);
};

const main = (): void => {
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
