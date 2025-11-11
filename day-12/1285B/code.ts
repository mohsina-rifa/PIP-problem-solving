import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  const a = readline().split(" ").map(Number);

  const total = a.reduce((acc, val) => acc + val, 0);

  let mx1 = Number.NEGATIVE_INFINITY;
  let c1 = 0;
  
  for (let i = 0; i < n - 1; i++) {
    c1 = Math.max(c1 + a[i], a[i]);
    mx1 = Math.max(mx1, c1);
  }

  let mx2 = Number.NEGATIVE_INFINITY;
  let c2 = 0;
  
  for (let i = 1; i < n; i++) {
    c2 = Math.max(c2 + a[i], a[i]);
    mx2 = Math.max(mx2, c2);
  }

  if (total > Math.max(mx1, mx2)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
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
