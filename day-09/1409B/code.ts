import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const [a, b, x, y, n] = readline().split(" ").map(BigInt);

  let dax;
  
  if (n < a - x) {
    dax = n;
  } else {
    dax = a - x;
  }
  
  const na1 = a - dax;
  const r1 = n - dax;

  let nb1;
  
  if (b - r1 > y) {
    nb1 = b - r1;
  } else {
    nb1 = y;
  }
  
  const p1 = na1 * nb1;

  let dby;
  
  if (n < b - y) {
    dby = n;
  } else {
    dby = b - y;
  }
  
  const nb2 = b - dby;
  const r2 = n - dby;

  let na2;
  
  if (a - r2 > x) {
    na2 = a - r2;
  } else {
    na2 = x;
  }
  
  const p2 = na2 * nb2;

  if (p1 < p2) {
    console.log(p1.toString());
  } else {
    console.log(p2.toString());
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
