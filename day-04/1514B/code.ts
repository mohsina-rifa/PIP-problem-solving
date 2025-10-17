import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const line = readline();
  const parts = line.split(" ").filter(Boolean);

  const n = BigInt(parts[0]);
  let exp = BigInt(parts[1]);

  const MOD = BigInt(1000000007);

  let base = n % MOD;
  let ans = BigInt(1);

  while (exp > BigInt(0)) {
    if ((exp & BigInt(1)) === BigInt(1)) {
      ans = (ans * base) % MOD;
    }
    base = (base * base) % MOD;
    exp = exp / BigInt(2);
  }

  console.log(ans.toString());
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
