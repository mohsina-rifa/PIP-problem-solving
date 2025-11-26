import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const line = readline();
  const [a, b, c, d] = line.split(/\s+/).map(Number);

  let s = "";

  for (let i = 1; i <= 12; i++) {
    if (i === a || i === b) {
      s += "a";
    } else if (i === c || i === d) {
      s += "b";
    }
  }
  
  if (s === "abab" || s === "baba") {
    console.log("YES");
  } else {
    console.log("NO");
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
