import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const [nStr, mStr] = readline().split(" ");
  
  const n = Number(nStr);
  const m = Number(mStr);

  let pt = 0;
  let px = 0, py = 0;

  for (let i = 0; i < n; i++) {
    const [xStr, yStr] = readline().split(" ");
    
    const x = Number(xStr);
    const y = Number(yStr);

    pt += x - px;
    
    if (((x - px + 2) % 2) !== ((y - py + 2) % 2)) {
      pt--;
    }
    
    px = x;
    py = y;
  }

  if (px !== m) {
    pt += m - px;
  }

  console.log(pt);
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
