import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const n = parseInt(readline(), 10);
  const arr: number[] = [];

  while (arr.length < n) {
    const parts = readline().split(/\s+/).filter(Boolean);
    for (const p of parts) {
      arr.push(parseInt(p, 10));
    }
  }

  let tot = 0;
  let ans = 0;

  const heap: number[] = [];

  const popMax = (): number | undefined => {
    if (heap.length === 0) {
      return undefined;
    }

    let maxIdx = 0;

    for (let i = 1; i < heap.length; i++) {
      if (heap[i] > heap[maxIdx]) {
        maxIdx = i;
      }
    }

    const val = heap[maxIdx];
    heap.splice(maxIdx, 1);

    return val;
  };

  for (let i = 0; i < n; i++) {
    const tmp = arr[i];

    if (tmp < 0) {
      heap.push(-tmp);
    }

    ans++;
    tot += tmp;

    if (tot < 0) {
      const largest = popMax();

      if (largest !== undefined) {
        tot += largest;
        ans--;
      }
    }
  }

  console.log(ans);
};

const main = (): void => {
  // input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
  input = fs
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .map((line) => line.trim());
  const testcases: number = 1;

  let loop = testcases;
  while (loop--) {
    solve();
  }
};

main();
