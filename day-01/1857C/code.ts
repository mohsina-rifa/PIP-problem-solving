import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  const m = (n * (n - 1)) / 2;
  
  const arr: number[] = new Array(m);
  let last = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < m; i++) {
    arr[i] = parseInt(readline());
    last = Math.max(last, arr[i]);
  }
  
  arr.sort((a, b) => a - b);
  
  let jump = n;
  
  const out: string[] = [];
  
  for (let i = 0; i < m; i+=--jump) {
    out.push(arr[i] + " ");
  }
  
  out.push(last.toString());
  console.log(out.join(""));
};

const main = (): void => {
  input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(line => line.trim());
  const testcases: number = parseInt(readline());

  let loop = testcases;
  while (loop--) {
    solve();
  }
};

main();