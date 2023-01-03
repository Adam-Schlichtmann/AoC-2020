import fs from "fs";

const part1 = () => {
  console.log("DAY 10 Part 1");

  const allFileContents = fs.readFileSync("./src/day10/input.txt", "utf-8");
  const lines = allFileContents
    .split(/\r?\n/)
    .filter((f) => !!f)
    .map((n) => Number.parseInt(n))
    .sort((a, b) => (a < b ? -1 : 1));

  lines.push(lines[lines.length - 1] + 3);
  console.log("LINES", lines);
  let count1 = 0;
  let count3 = 0;
  let joltage = 0;
  lines.forEach((adapter) => {
    if (adapter - joltage > 3) {
      console.log("PANIC!!!");
    }
    if (adapter - joltage === 1) {
      count1++;
      joltage = adapter;
    }
    if (adapter - joltage === 3) {
      count3++;
      joltage = adapter;
    }
  });
  console.log(`1 Dif: ${count1}`);
  console.log(`3 Dif: ${count3}`);
  console.log(`Result ${count1 * count3}`);
};

const part2 = () => {
  console.log("DAY 10 Part 2");

  const allFileContents = fs.readFileSync("./src/day10/input.txt", "utf-8");
  const lines = allFileContents
    .split(/\r?\n/)
    .filter((f) => !!f)
    .map((n) => Number.parseInt(n))
    .sort((a, b) => (a < b ? -1 : 1));
  lines.push(lines[lines.length - 1] + 3);

  // Object of the value mapped to how many possible ways to get there from the previous 3 adapters
  const paths: Record<number, number> = { 0: 1 };
  lines.forEach((line) => {
    paths[line] =
      (paths[line - 3] ?? 0) + (paths[line - 2] ?? 0) + (paths[line - 1] ?? 0);
  });
  console.log(`Total Options: ${paths[lines[lines.length - 1]]}`);
};

export default () => {
  part1();
  part2();
};
