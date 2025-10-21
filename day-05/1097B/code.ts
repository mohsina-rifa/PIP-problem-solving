import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n: number = parseInt(readline());
  const vec: number[] = [];

  for (let i = 0; i < n; i++) {
    vec.push(parseInt(readline()));
  }

  let counter = 0;

  for (let i = 0; i < (1 << n); i++) {
    let rotation = 0;
    
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        rotation += vec[j];
      } else {
        rotation -= vec[j];
      }
    }

    if (rotation % 360 === 0) {
      counter++;
      break;
    }
  }

  if (counter > 0) {
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
  const testcases: number = 1;

  let loop = testcases;
  while (loop--) {
    solve();
  }
};

main();
