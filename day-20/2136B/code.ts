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
  
  let s = readline();
  s = " " + s;

  let bad = false;
  
  for (let i = 1, j = 1; i <= n; i = ++j) {
    if (s[i] === '1') {
      while (j < n && s[j + 1] === '1') {
        ++j;
      }
      
      if (j - i + 1 >= k) {
        console.log("NO");
        
        bad = true;
        break;
      }
    }
  }
  
  if (bad) {
    return ;
  }

  console.log("YES");
 
  let c1 = 0;
  
  for (let i = 1; i <= n; ++i) if (s[i] === '1') {
    ++c1;
  }
  
  let c2 = 0;
  
  let res: number[] = [];
  
  for (let i = 1; i <= n; ++i) {
    if (s[i] === '1') {
      res.push(++c2);
    } else {
      res.push(++c1);
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
