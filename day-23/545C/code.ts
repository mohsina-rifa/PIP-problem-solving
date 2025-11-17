import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const N = parseInt(readline());
  
  const X: number[] = [];
  const H: number[] = [];

  for (let i = 0; i < N; i++) {
    const [xi, hi] = readline().split(" ").map(Number);
    
    X.push(xi);
    H.push(hi);
  }

  if (N === 1) {
    console.log(1);
    return;
  }

  let ans = 2;
  let L = X[0];

  for (let i = 1; i < N - 1; i++) {
    if (X[i] - H[i] > L) {
      ans++;
      L = X[i];
    } else if (X[i] + H[i] < X[i + 1]) {
      ans++;
      L = X[i] + H[i];
    } else {
      L = X[i];
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
  const testcases: number = 1;

  let loop = testcases;
  while (loop--) {
    solve();
  }
};

main();
