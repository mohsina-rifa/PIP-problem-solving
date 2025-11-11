import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const [nStr, cStr] = readline().split(" ");
  
  const n = parseInt(nStr);
  let c = parseInt(cStr);

  const a = readline().split(" ").map(Number);

  const costs: number[] = [];
  
  for (let i = 0; i < n; i++) {
    costs.push(a[i] + (i + 1));
  }

  costs.sort((x, y) => x - y);

  let ans = 0;
  
  for (let i = 0; i < n; i++) {
    if (c >= costs[i]) {
      c -= costs[i];
      ans++;
    } else {
      break;
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
