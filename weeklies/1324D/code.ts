import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const tokens: string[] = [];
  
  const nextToken = (): string => {
    while (tokens.length === 0) {
      const line = readline();
      
      if (line === undefined) {
        return "";
      }
      
      tokens.push(...line.split(/\s+/).filter(Boolean));
    }
    
    return tokens.shift()!;
  };

  const n = parseInt(nextToken(), 10);
  
  const arr: number[] = new Array(n);
  const brr: number[] = new Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = parseInt(nextToken(), 10);
  }
  for (let i = 0; i < n; i++) {
    brr[i] = parseInt(nextToken(), 10);
  }

  const drr: number[] = new Array(n);
  
  for (let i = 0; i < n; i++) {
    drr[i] = arr[i] - brr[i];
  }

  drr.sort((x, y) => x - y);

  let counter = 0;
  
  for (let i = 0; i < n; i++) {
    const current = -drr[i];
    
    let left = i + 1;
    let right = n;
    
    while (left < right) {
      const mid = (left + right) >> 1;

      if (drr[mid] > current) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    const reduce = left;
    counter += n - reduce;
  }

  console.log(counter.toString());
};

const main = (): void => {
  // input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
  input = fs
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .map((line) => line.trim());
  solve();
};

main();
