import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const inp = readline().split(/\s+/).map(Number);

  const n: number = inp[0];
  const k: number = inp[1];

  const arr: number[] = readline().split(/\s+/).map(Number);
  const brr: number[] = readline().split(/\s+/).map(Number);

  const prefix: number[] = new Array(n + 1).fill(0);
  for (let i = 0; i < n; ++i) {
    prefix[i + 1] = prefix[i] + arr[i];
  }

  let remax = 0;

  let exp = 0;
  let temp = 0;

  const K = Math.min(n, k);

  for (let i = 0; i < K; ++i) {
    let e = 0;

    remax = Math.max(remax, brr[i]);
    e = prefix[i + 1] + (k - i - 1) * remax;
    exp = Math.max(exp, e);
  }

  if (k > n) {
    for (let i = 0; i < n; ++i) {
      remax = Math.max(remax, brr[i]);
      temp += arr[i];
    }

    temp += (n - k) * remax;
    exp = Math.max(exp, temp);
  }

  console.log(exp);
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
