import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  
  const a: [number, number][] = [];
  const b: [number, number][] = [];
  const c: [number, number][] = [];

  const aVals = readline().split(" ").map(Number);
  
  for (let i = 0; i < n; i++) {
    a.push([aVals[i], i]);
  }

  const bVals = readline().split(" ").map(Number);
  
  for (let i = 0; i < n; i++) {
    b.push([bVals[i], i]);
  }

  const cVals = readline().split(" ").map(Number);
  
  for (let i = 0; i < n; i++) {
    c.push([cVals[i], i]);
  }

  a.sort((x, y) => y[0] - x[0]);
  b.sort((x, y) => y[0] - x[0]);
  c.sort((x, y) => y[0] - x[0]);

  let ans = -Infinity;
  
  for (let i = 0; i < Math.min(3, n); i++) {
    for (let j = 0; j < Math.min(3, n); j++) {
      for (let k = 0; k < Math.min(3, n); k++) {
        const ai = a[i][1];
        const bj = b[j][1];
        const ck = c[k][1];
        
        if (ai === bj || bj === ck || ck === ai) {
          continue;
        }
        
        const sum = a[i][0] + b[j][0] + c[k][0];
        ans = Math.max(ans, sum);
      }
    }
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
