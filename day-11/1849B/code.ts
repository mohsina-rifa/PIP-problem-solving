import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const [nStr, kStr] = readline().split(" ");
  
  const n = parseInt(nStr);
  const k = parseInt(kStr);
  
  const arr = readline().split(" ").map(Number);

  const hp_idx: Array<[number, number]> = [];

  for (let i = 0; i < n; i++) {
    let rem = arr[i] % k;
    
    if (rem === 0) {
      rem = k;
    }
    
    hp_idx.push([rem, -i]);
  }

  hp_idx.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    
    return a[1] - b[1];
  });

  const res: number[] = [];
  
  for (let i = n - 1; i >= 0; i--) {
    res.push(Math.abs(hp_idx[i][1]) + 1);
  }
  
  console.log(res.join(" "));
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
