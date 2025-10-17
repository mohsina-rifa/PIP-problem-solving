import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  let tokens: string[] = readline().split(/\s+/).filter(Boolean);
  while (tokens.length < n) {
    tokens = tokens.concat(readline().split(/\s+/).filter(Boolean));
  }
  const a: number[] = tokens.slice(0, n).map(Number);

  const evens: number[] = [];
  const odds: number[] = [];
  for (const v of a) {
    if (v % 2 === 0) evens.push(v);
    else odds.push(v);
  }

  let ans = 0;
  if (odds.length > 0) {
    ans += evens.reduce((s, x) => s + x, 0);
  }

  odds.sort((x, y) => y - x);
  const take = Math.ceil(odds.length / 2);
  for (let i = 0; i < take; i++) ans += odds[i];

  console.log(ans.toString());
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
