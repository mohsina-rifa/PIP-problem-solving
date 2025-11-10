import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  const arr = readline().split(" ").map(Number);

  const mp: number[] = Array(1001).fill(0);

  for (let i = 0; i < n; ++i) {
    mp[arr[i]] = i + 1;
  }

  const gcd = (a: number, b: number): number => {
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  let ans = -1;
  
  for (let i = 1; i <= 1000; ++i) {
    for (let j = 1; j <= 1000; ++j) {
      if (mp[i] && mp[j] && gcd(i, j) === 1) {
        ans = Math.max(ans, mp[i] + mp[j]);
      }
    }
  }

  console.log(ans);
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
