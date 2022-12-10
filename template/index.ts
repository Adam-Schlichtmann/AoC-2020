import fs from "fs";

const part1 = () => {
  console.log("DAY 1 Part 1");

  const allFileContents = fs.readFileSync("./src/dayXX/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  console.log("LINES", lines);
};

const part2 = () => {
  console.log("DAY 1 Part 2");

  const allFileContents = fs.readFileSync("./src/dayXX/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  console.log("LINES", lines);
};

export default () => {
  part1();
  part2();
};
