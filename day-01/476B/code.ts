import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const s1 = readline().trim();
  const s2 = readline().trim();

  let required = 0;

  for (const char of s1) {
    required += char === "+" ? 1 : -1;
  }

  const unknown = s2.split("").filter((char) => char === "?").length;

  let counter = 0;
  const total = 1 << unknown;

  for (let mask = 0; mask < total; mask++) {
    let current = 0;
    let index = 0;

    for (const char of s2) {
      if (char === "+") {
        current++;
      } else if (char === "-") {
        current--;
      } else {
        if ((mask >> index) & 1) {
          current++;
        } else {
          current--;
        }
        index++;
      }
    }

    if (current === required) {
      counter++;
    }
  }

  const probability = total > 0 ? counter / total : counter === 1 ? 1.0 : 0.0;
  console.log(probability.toFixed(12));
};

const main = (): void => {
  input = fs
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .filter((line) => line.length > 0);

  solve();
};

main();
