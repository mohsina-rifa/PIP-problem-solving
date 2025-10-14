import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const [n, k] = readline().split(" ").map(BigInt);

  const elements = readline().split(" ").map(BigInt);

  let mn_rem = k;
  let even = BigInt(0);
  let odd = BigInt(0);

  for (let i = 0; i < Number(n); i++) {
    const e = elements[i];

    if (e % BigInt(2) === BigInt(0)) {
      even++;
    } else {
      odd++;
    }

    const rem = ((e + k - BigInt(1)) / k) * k - e;

    if (rem < mn_rem) {
      mn_rem = rem;
    }
  }

  if (mn_rem === BigInt(0)) {
    console.log(0);
    return;
  }

  if (k === BigInt(4)) {
    if (even >= BigInt(2)) {
      console.log(0);
      return;
    } else if (even === BigInt(1)) {
      if (odd > BigInt(0)) {
        const result = mn_rem < BigInt(1) ? mn_rem : BigInt(1);
        console.log(result.toString());
        return;
      }
    } else if (odd >= BigInt(2)) {
      const result = mn_rem < BigInt(2) ? mn_rem : BigInt(2);
      console.log(result.toString());
      return;
    }
  }

  console.log(mn_rem.toString());
};

const main = (): void => {
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
