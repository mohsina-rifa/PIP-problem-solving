import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  
  const h: number[] = [];
  const i: number[] = [];

  for (let a = 0; a < n; a++) {
    const m = parseInt(readline());
    const arr = readline().split(" ").map(Number);

    let f = Number.MAX_SAFE_INTEGER;
    let s = Number.MAX_SAFE_INTEGER;

    for (let x of arr) {
      if (x < f) {
        s = f;
        f = x;
      } else if (x < s) {
        s = x;
      }
    }
    
    h.push(f);
    i.push(s);
  }

  h.sort((a, b) => a - b);
  i.sort((a, b) => a - b);

  let ans = h[0];
  
  for (let a = 1; a < n; a++) {
    ans += i[a];
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
  const testcases: number = parseInt(readline());

  let loop = testcases;
  while (loop--) {
    solve();
  }
};

main();
