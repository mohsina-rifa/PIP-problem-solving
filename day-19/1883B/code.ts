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
  const s = readline();

  const freq: Record<string, number> = {};
  
  for (const ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  let odd = 0;
  
  for (const count of Object.values(freq)) {
    if (count % 2 !== 0) {
      odd += 1;
    }
  }

  if (odd > k + 1) {
    console.log("NO");
  } else {
    console.log("YES");
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
