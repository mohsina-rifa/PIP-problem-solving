import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const parts = readline().split(" ").filter(Boolean);

  const n = parseInt(parts[0], 10);
  const q = parseInt(parts[1], 10);
  const s = readline();

  const vals: number[] = [];

  while (vals.length < q) {
    vals.push(
      ...readline()
        .split(" ")
        .filter(Boolean)
        .map((x) => parseInt(x, 10))
    );
  }

  const B = (s.match(/B/g) || []).length;

  for (let i = 0; i < q; i++) {
    let current_val = vals[i];

    if (B === 0) {
      console.log(current_val.toString());
      continue;
    }

    let ans = 0;

    while (current_val > 0) {
      for (const ch of s) {
        if (current_val === 0) {
          break;
        }

        ans++;

        if (ch === "A") {
          current_val -= 1;
        } else {
          current_val = Math.floor(current_val / 2);
        }
      }
    }

    console.log(ans.toString());
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
