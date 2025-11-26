import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const first = readline().split(" ").filter(Boolean);
  
  const n = parseInt(first[0], 10);
  const k = parseInt(first[1], 10);

  const arrLine = readline().split(" ").filter(Boolean);
  const v = arrLine.map((s) => parseInt(s, 10));
  
  v.sort((a, b) => a - b);

  let left = 0;
  let right = n - 1;
  let score = 0;
  
  while (left < right) {
    const s = v[left] + v[right];
    
    if (s === k) {
      score++;
      left++;
      right--;
    } else if (s < k) {
      left++;
    } else {
      right--;
    }
  }

  console.log(score);
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
