import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());

  const tokens = readline().split(/\s+/).filter(Boolean);
  const v: number[] = new Array(n + 2).fill(1e12);

  for (let i = 1; i <= n; i++) {
    v[i] = Number(tokens[i - 1]);
  }

  let maxn = 0;
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    maxn = Math.max(maxn, v[i]);

    if (i % 2 === 0 && v[i] < maxn) {
      v[i] = maxn;
    }
  }

  for (let i = 1; i <= n; i += 2) {
    if (v[i] === v[i + 1]) {
      cnt += 1;
      v[i] -= 1;
    }
    
    if (v[i] >= v[i - 1]) {
      cnt += v[i] - v[i - 1] + 1;
    }
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
