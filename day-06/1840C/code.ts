import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const [n, k, q] = readline().split(" ").map(Number);
  const arr = readline().split(" ").map(Number);
  
  let ways = 0;
  let len = 0;
  
  for (let i = 0; i < n; i++) {
    if (arr[i] <= q) {
      len++;
    } else {
      if (len >= k) {
        ways += ((len - k + 1) * (len - k + 2)) / 2;
      }
      len = 0;
    }
  }
  
  if (len >= k) {
    ways += ((len - k + 1) * (len - k + 2)) / 2;
  }

  console.log(ways);
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
