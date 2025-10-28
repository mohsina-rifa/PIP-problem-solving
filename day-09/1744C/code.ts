import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const parts = readline().split(" ");
  
  const n = parseInt(parts[0], 10);
  const c = parts[1];
  const s = readline();

  const t = s + s;
  const m = t.length;
  
  const nextG: number[] = new Array(m).fill(-1);
  
  let last = -1;
  
  for (let i = m - 1; i >= 0; --i) {
    if (t[i] === "g") {
      last = i;
    }
    
    nextG[i] = last;
  }

  let ans = 0;
  
  for (let i = 0; i < n; ++i) {
    if (s[i] === c) {
      const idx = nextG[i];
      
      if (idx !== -1) {
        ans = Math.max(ans, idx - i);
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
