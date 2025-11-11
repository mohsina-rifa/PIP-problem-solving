import * as fs from "fs";

let input: string[];
let currentLine = 0;

const readline = (): string => {
  return input[currentLine++];
};

const solve = (): void => {
  const [n, q] = readline().split(" ").map(Number);
  
  const a = readline().split(" ").map(Number);
  const k = readline().split(" ").map(Number);

  let sum = 0;
  let mx = 0;
  
  const vec: Array<[number, number]> = [];
  
  for (let i = 0; i < n; i++) {
    sum += a[i];
    
    mx = Math.max(mx, a[i]);
    vec.push([mx, sum]);
  }

  vec.sort((x, y) => x[0] - y[0]);
  
  for (let i = 1; i < n; i++) {
    vec[i][1] = Math.max(vec[i][1], vec[i - 1][1]);
  }

  const res: number[] = [];
  
  for (let i = 0; i < q; i++) {
    const key = k[i];
    
    let l = 0;
    let r = n - 1;
    
    let ans = -1;
    
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      
      if (vec[mid][0] <= key) {
        ans = mid;
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    
    if (ans === -1) {
      res.push(0);
    } else {
      res.push(vec[ans][1]);
    }
  }
  console.log(res.join(" "));
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
