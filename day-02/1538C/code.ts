import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const tokens: string[] = [];

  const nextToken = (): string => {
    while (tokens.length === 0) {
      const line = readline();
      tokens.push(...line.split(/\s+/).filter(Boolean));
    }

    return tokens.shift()!;
  };

  const n = parseInt(nextToken(), 10);
  const l = parseInt(nextToken(), 10);
  const r = parseInt(nextToken(), 10);

  const a: number[] = [];

  for (let i = 0; i < n; i++) {
    a.push(parseInt(nextToken(), 10));
  }

  a.sort((x, y) => x - y);

  const countLessOrEqual = (value: number): number => {
    let count = 0;
    let left = 0;
    let right = n - 1;

    while (left < right) {
      if (a[left] + a[right] > value) {
        right--;
      } else {
        count += (right - left);
        left++;
      }
    }
    return count;
  };
  
  const totalForR = countLessOrEqual(r);
  const totalForLMinus1 = countLessOrEqual(l - 1);

  console.log((totalForR - totalForLMinus1).toString());
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
