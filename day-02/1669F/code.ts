import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++] || "";
};

const solve = (): void => {
  let tokens: string[] = [];
  let tidx = 0;
  const next = (): string => {
    while (tidx >= tokens.length) {
      const line = readline();
      tokens = line.split(/\s+/).filter(Boolean);
      tidx = 0;
    }
    return tokens[tidx++];
  };

  const n = parseInt(next(), 10);
  const v: number[] = new Array(n);
  for (let k = 0; k < n; k++) v[k] = parseInt(next(), 10);

  const prefixsum: number[] = new Array(n);
  prefixsum[0] = v[0];
  for (let i = 1; i < n; i++) {
    prefixsum[i] = prefixsum[i - 1] + v[i];
  }

  const suffixsum: number[] = new Array(n);
  suffixsum[n - 1] = v[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixsum[i] = suffixsum[i + 1] + v[i];
  }

  let i = 0;
  let j = n - 1;
  let ans = 0;
  while (i < j) {
    if (prefixsum[i] === suffixsum[j]) {
      ans = Math.max(ans, i + 1 + (n - j));
      i++;
      j--;
    } else if (prefixsum[i] < suffixsum[j]) {
      i++;
    } else {
      j--;
    }
  }

  console.log(ans.toString());
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