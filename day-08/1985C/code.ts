import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  const parts = readline().split(/\s+/).filter(Boolean).map(Number);
  const vec = parts.slice(0, n);

  if (n === 0) {
    console.log(0);
    return;
  }

  const prefixSum: number[] = new Array(n);
  const prefixMax: number[] = new Array(n);

  prefixSum[0] = vec[0];
  prefixMax[0] = vec[0];

  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + vec[i];
    prefixMax[i] = Math.max(prefixMax[i - 1], vec[i]);
  }

  let cnt = vec[0] === 0 ? 1 : 0;
  for (let i = 1; i < n; i++) {
    if (prefixSum[i] - prefixMax[i] === prefixMax[i]) cnt++;
  }

  console.log(cnt);
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
