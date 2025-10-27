import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const parts = readline().trim().split(/\s+/).map(Number);
  const [a, b, c, d] = parts;

  let y = 0;

  let s1 = 0;
  
  if ((a > c) || (b > d)) {
    s1++;
  }

  let o1 = 0;
  
  if ((c > a) || (d > b)) {
    o1++;
  }

  if (s1 > o1) {
    y++;
  }

  let s2 = 0;
  
  if ((a > d) || (b > c)) {
    s2++;
  }

  let o2 = 0;
  
  if ((d > a) || (c > b)) {
    o2++;
  }

  if (s2 > o2) {
    y++;
  }

  console.log(y * 2);
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
