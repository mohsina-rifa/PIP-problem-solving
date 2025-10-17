import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const a = readline();
  const b = readline();

  const x = a.length;
  const y = b.length;

  let ans = x + y;

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (b[j] === a[i]) {
        let p = j;
        let q = i;

        while (p < y && q < x && b[p] === a[q]) {
          p++;
          q++;
        }

        ans = Math.min(ans, i + j + (x - q) + (y - p));
      }
    }
  }

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
