import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline());
  const s = readline();

  let i = 0;
  let count = 0;

  while (i < n - 2) {
    const seg = s.slice(i, i + 3);
    
    if (seg === "map" || seg === "pie") {
      count++;
      i += 3;
    } else {
      i++;
    }
  }

  console.log(count.toString());
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
