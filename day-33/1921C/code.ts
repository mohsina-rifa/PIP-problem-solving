import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const parts = readline().split(/\s+/).filter(Boolean);

  const n = parseInt(parts[0], 10);

  let f = Number(parts[1]);

  const a = Number(parts[2]);
  const b = Number(parts[3]);

  const mLine = readline().split(/\s+/).filter(Boolean);
  const m: number[] = mLine.map((x) => Number(x));

  let prev = 0;
  let ok = true;

  for (let i = 0; i < n; ++i) {
    const dt = m[i] - prev;
    const onCost = a * dt;

    const cost = onCost < b ? onCost : b;

    f -= cost;

    if (f <= 0) {
      ok = false;
      break;
    }

    prev = m[i];
  }

  console.log(ok ? "YES" : "NO");
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
