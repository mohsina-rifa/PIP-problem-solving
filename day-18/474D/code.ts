import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const MOD = 1000000007;
const MAX_N = 100005;

let K = 0;

let dp: number[] = new Array(MAX_N).fill(0);
let pref: number[] = new Array(MAX_N).fill(0);

const dpTable = (): void => {
  dp[0] = 1;
  
  for (let i = 1; i < MAX_N; i++) {
    dp[i] = dp[i - 1];
    
    if (i >= K) {
      dp[i] = (dp[i] + dp[i - K]) % MOD;
    }
  }
  
  pref[0] = 0;
  
  for (let i = 1; i < MAX_N; i++) {
    pref[i] = (pref[i - 1] + dp[i]) % MOD;
  }
};

const solve = (): void => {
  const [aStr, bStr] = readline().split(/\s+/);
  
  const a = parseInt(aStr, 10);
  const b = parseInt(bStr, 10);
  
  const ans = (pref[b] - pref[a - 1] + MOD) % MOD;
  
  console.log(ans);
};

const main = (): void => {
  // input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
  input = fs
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .map((line) => line.trim());
  const inputLine = readline().split(/\s+/);
  
  let loop = parseInt(inputLine[0], 10);
  K = parseInt(inputLine[1], 10);
  
  dpTable();
  
  while (loop--) {
    solve();
  }
};

main();
