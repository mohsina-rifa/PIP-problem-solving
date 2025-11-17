import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const [n, q] = readline().split(" ").map(Number);
  const a = [0, ...readline().split(" ").map(Number)];
  
  const freq = Array(n + 2).fill(0);

  for (let i = 0; i < q; i++) {
    const [l, r] = readline().split(" ").map(Number);
    
    freq[l]++;
    freq[r + 1]--;
  }

  for (let i = 1; i <= n; i++) {
    freq[i] += freq[i - 1];
  }
  
  freq.pop();

  const arr = a.slice(1);
  const f = freq.slice(1, n + 1);

  arr.sort((x, y) => x - y);
  f.sort((x, y) => x - y);

  let res = 0;
  
  for (let i = 0; i < n; i++) {
    res += arr[i] * f[i];
  }
  
  console.log(res);
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
