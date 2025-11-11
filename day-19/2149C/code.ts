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

  const a = new Array(n + 1).fill(0);
  
  const arr = readline().split(" ").map(Number);
  
  for (let i = 0; i < n; i++) {
    a[arr[i]]++;
  }

  let ans = 0;
  
  for (let i = 0; i < k; i++) {
    if (a[i] === 0) ans++;
  }

  if (a[k] === 0) {
    console.log(ans);
  } else if (a[k] >= ans) {
    console.log(a[k]);
  } else {
    console.log(ans);
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
