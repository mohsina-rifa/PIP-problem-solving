import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const s = readline().trim();

  const indexOfAllZero: number[] = [];
  const indexOfAllOne: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      indexOfAllZero.push(i);
    } else {
      indexOfAllOne.push(i);
    }
  }

  let t = s.split("");

  const minPairs = Math.min(indexOfAllZero.length, indexOfAllOne.length);

  for (let i = 0; i < minPairs; i++) {
    t[indexOfAllZero[i]] = "1";
    t[indexOfAllOne[i]] = "0";
  }

  let cost = 0;
  let point = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[point]) {
      cost++;
    } else {
      point++;
    }
  }

  console.log(cost);
};

const main = (): void => {
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
