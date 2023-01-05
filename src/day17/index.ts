import fs from "fs";
import { round } from "./utils";

const START_UP_ROUNDS = 6;
const part1 = () => {
  console.log("DAY 17 Part 1");

  const allFileContents = fs.readFileSync("./src/day17/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  let activeCoords: number[][] = [];

  lines.forEach((l, y) =>
    l.split("").forEach((c, x) => {
      if (c === "#") {
        activeCoords.push([x, y, 0]);
      }
    })
  );

  for (let r = 0; r < START_UP_ROUNDS; r++) {
    console.log(`=== ROUND ${r + 1} ===`);
    activeCoords = round(activeCoords);
  }

  console.log(`Active cubes: ${activeCoords.length}`);
};

const part2 = () => {
  console.log("DAY 17 Part 2");

  const allFileContents = fs.readFileSync("./src/day17/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  let activeCoords: number[][] = [];

  lines.forEach((l, y) =>
    l.split("").forEach((c, x) => {
      if (c === "#") {
        activeCoords.push([x, y, 0, 0]);
      }
    })
  );

  for (let r = 0; r < START_UP_ROUNDS; r++) {
    console.log(`=== ROUND ${r + 1} ===`);
    activeCoords = round(activeCoords);
  }

  console.log(`Active cubes: ${activeCoords.length}`);
};

export default () => {
  part1();
  part2();
};
