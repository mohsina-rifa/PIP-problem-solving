import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const firstTokens = readline().trim().split(" ").filter(Boolean);

  const n = parseInt(firstTokens[0], 10);
  const x = parseInt(firstTokens[1], 10);

  let arrLine: string[] = [];

  if (firstTokens.length > 2) {
    arrLine = arrLine.concat(firstTokens.slice(2));
  }

  while (arrLine.length < n) {
    const parts = readline().trim().split(" ").filter(Boolean);
    arrLine = arrLine.concat(parts);
  }

  const arr = arrLine.slice(0, n).map((v) => parseInt(v, 10));

  arr.sort((a, b) => a - b);

  let l = arr[0];
  let r = arr[n - 1] + x;
  let height = l;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    let need = 0;
    let impossible = false;

    for (let i = 0; i < n; i++) {
      if (arr[i] < mid) {
        need += mid - arr[i];
        if (need > x) {
          impossible = true;
          break;
        }
      }
    }

    if (!impossible && need <= x) {
      height = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  console.log(height);
};

const main = (): void => {
  input = fs
    .readFileSync(0, "utf8")
    .trim()
    .split("\n");
    
  const testcases: number = parseInt(readline());

  let loop = testcases;
  while (loop--) {
    solve();
  }
};

main();