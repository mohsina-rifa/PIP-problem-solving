import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const s = readline();
  const t = readline();

  const str = s.split("");
  
  let i = 0;
  let j = 0;

  while (i < str.length && j < t.length) {
    if (str[i] === "?") {
      str[i] = t[j];
      
      i++;
      j++;
    } else {
      if (str[i] === t[j]) {
        i++;
        j++;
      } else {
        i++;
      }
    }
  }

  if (j === t.length) {
    for (let k = 0; k < str.length; k++) {
      if (str[k] === "?") {
        str[k] = "x";
      }
    }
    console.log("YES");
    console.log(str.join(""));
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
