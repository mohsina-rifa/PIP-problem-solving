import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const header = readline().split(/\s+/).map(Number);

  const n = header[0];
  const m = header[1];

  const sets: number[][] = [];

  const mp: Map<number, number> = new Map();

  for (let i = 0; i < n; i++) {
    const parts = readline().split(/\s+/).map(Number);

    const len = parts[0];
    const element = parts.slice(1, 1 + len);

    sets.push(element);

    for (const x of element) {
      mp.set(x, (mp.get(x) || 0) + 1);
    }
  }

  let counter = 0;

  for (let i = 0; i < n; i++) {
    let freq = 1;

    for (let j = 0; j < sets[i].length; j++) {
      const val = sets[i][j];

      if ((mp.get(val) || 0) <= 1) {
        freq = 0;
        break;
      }
    }

    if (freq) counter++;
  }

  for (let i = 1; i <= m; i++) {
    if (!mp.has(i)) {
      counter = 0;
      break;
    }
  }

  if (counter >= 2) {
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
