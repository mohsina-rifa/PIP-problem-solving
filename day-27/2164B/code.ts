import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  const a = readline().split(/\s+/).map(Number);

  let found = false;
  
  let x = -1;
  let y = -1;

  for (let i = 1; i < n && !found; i++) {
    for (let j = 0; j < i && !found; j++) {
      const xi = a[j];
      const yi = a[i];
      
      if ((yi % xi) % 2 === 0) {
        x = xi;
        y = yi;
        
        found = true;
      }
    }
  }

  if (found) {
    console.log(`${x} ${y}`);
  } else {
    console.log(-1);
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
