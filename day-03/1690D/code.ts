import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const parts = readline().split(/\s+/);
  
  const n = parseInt(parts[0], 10);
  const k = parseInt(parts[1], 10);
  
  const s = readline();

  let white = 0;
  
  for (let i = 0; i < k; i++) {
    if (s[i] === "W") white++;
  }
  
  let color = white;

  for (let i = 1; i <= n - k; i++) {
    if (s[i - 1] === "W") {
      white--;
    }
    
    if (s[i + k - 1] === "W") {
      white++;
    }
    
    if (white < color) {
      color = white;
    }
  }

  console.log(color);
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
