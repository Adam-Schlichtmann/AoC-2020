import fs from "fs";
import { evaluate, evaluateV2 } from "./utils";

const part1 = () => {
  console.log("DAY 18 Part 1");

  const allFileContents = fs.readFileSync("./src/day18/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  let sum = 0;
  lines.forEach((line) => {
    sum += evaluate(line.replace(/\s/g, "").split(""));
  });
  console.log(`Total ${sum}`);
};

const part2 = () => {
  console.log("DAY 18 Part 2");

  const allFileContents = fs.readFileSync("./src/day18/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  let sum = 0;
  lines.forEach((line) => {
    sum += evaluateV2(line.replace(/\s/g, "").split(""));
  });
  console.log(`Total ${sum}`);
};

export default () => {
  part1();
  part2();
};
