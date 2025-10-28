import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const [nStr, kStr] = readline().split(" ");

  const n = parseInt(nStr);
  const k = parseInt(kStr);

  const arr = readline().split(" ").map(Number);

  arr.sort((a, b) => a - b);

  for (let i = 1; i < n; i++) {
    arr[i] += arr[i - 1];
  }

  let ans = Number.MIN_SAFE_INTEGER;

  let i = 0;
  let j = n - k - 1;

  while (j < n) {
    let prev: number = 0;
    
    if (i !== 0) {
      prev = arr[i - 1];
    }

    ans = Math.max(ans, arr[j] - prev);

    i += 2;
    j++;
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
