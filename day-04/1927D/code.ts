import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  
  const inp = readline()
    .split(" ")
    .filter(Boolean)
    .map((x) => parseInt(x));
    
  const arr: number[] = [0];

  for (let i = 0; i < n; i++) {
    arr.push(inp[i]);
  }

  const vec: number[] = [];
  
  for (let i = 1; i + 1 <= n; i++) {
    if (arr[i] !== arr[i + 1]) {
      vec.push(i);
    }
  }

  const q = parseInt(readline());
  
  let query = q;
  
  while (query--) {
    const parts = readline().split(" ").filter(Boolean);
    
    const l1 = parseInt(parts[0]);
    const r1 = parseInt(parts[1]);

    let l = 0;
    let r = vec.length - 1;
    
    let ans = Number.MAX_SAFE_INTEGER;
    
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      
      if (vec[mid] < l1) {
        l = mid + 1;
      } else {
        ans = Math.min(ans, vec[mid]);
        r = mid - 1;
      }
    }

    if (ans >= r1) {
      console.log("-1 -1");
    } else {
      console.log(`${ans} ${ans + 1}`);
    }
  }
  
  console.log();
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
