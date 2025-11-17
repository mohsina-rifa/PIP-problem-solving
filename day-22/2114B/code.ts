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

  const c0 = s.split("").filter((ch) => ch === "0").length;
  const c1 = n - c0;

  const total_pairs = n / 2;
  const bad = total_pairs - k;

  let ok = true;
  
  if (c0 < bad || (c0 - bad) % 2 !== 0) {
    ok = false;
  }
  if (c1 < bad || (c1 - bad) % 2 !== 0) {
    ok = false;
  }
  
  if (ok) {
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
