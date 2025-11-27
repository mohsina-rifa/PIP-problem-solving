import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const x = readline();

  const hours = x.slice(0, 2);
  const minutes = x.slice(3, 5);

  const hrNum = parseInt(hours, 10);

  let displayHr: number;
  let suffix: string;

  if (hrNum === 0) {
    displayHr = 12;
    suffix = "AM";
  } else if (hrNum === 12) {
    displayHr = 12;
    suffix = "PM";
  } else if (hrNum > 12) {
    displayHr = hrNum - 12;
    suffix = "PM";
  } else {
    displayHr = hrNum;
    suffix = "AM";
  }

  const displayHours = String(displayHr).padStart(2, "0");

  console.log(`${displayHours}:${minutes} ${suffix}`);
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
