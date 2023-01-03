import fs from "fs";
import { round, roundv2 } from "./utils";

const part1 = () => {
  console.log("DAY 1 Part 1");

  const allFileContents = fs.readFileSync("./src/day11/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  const map: string[][] = [];
  lines.forEach((line, y) => (map[y] = line.split("")));
  let change = true;
  let m = [...map];
  let count = 0;
  while (change) {
    count++;
    [m, change] = round(m);
  }
  console.log(`Steady state after ${count} rounds`);
  console.log(
    `Steady state includes ${m.reduce(
      (acc, item) => item.filter((seat) => seat === "#").length + acc,
      0
    )} occupied seats`
  );
};

const part2 = () => {
  console.log("DAY 1 Part 2");

  const allFileContents = fs.readFileSync("./src/day11/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  const map: string[][] = [];
  lines.forEach((line, y) => (map[y] = line.split("")));
  let change = true;
  let m = [...map];
  let count = 0;
  while (change) {
    count++;
    [m, change] = roundv2(m);
  }
  console.log(`Steady state after ${count} rounds`);
  console.log(
    `Steady state includes ${m.reduce(
      (acc, item) => item.filter((seat) => seat === "#").length + acc,
      0
    )} occupied seats`
  );
};

export default () => {
  part1();
  part2();
};
