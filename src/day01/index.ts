import fs from "fs";

const part1 = () => {
  console.log("DAY 1 Part 1");

  const allFileContents = fs.readFileSync("./src/day01/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  for (let i = 0; i < lines.length; i++) {
    for (let j = i + 1; j < lines.length; j++) {
      if (Number.parseInt(lines[i]) + Number.parseInt(lines[j]) === 2020) {
        console.log(`NUMBERS ${lines[i]} | ${lines[j]} === 2020`);
        console.log(
          `RESULT ${Number.parseInt(lines[i]) * Number.parseInt(lines[j])} `
        );
        return;
      }
    }
  }
};

const part2 = () => {
  console.log("DAY 1 Part 1");

  const allFileContents = fs.readFileSync("./src/day01/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  for (let i = 0; i < lines.length; i++) {
    for (let j = i + 1; j < lines.length; j++) {
      for (let k = j + 1; k < lines.length; k++) {
        if (
          Number.parseInt(lines[i]) +
            Number.parseInt(lines[j]) +
            Number.parseInt(lines[k]) ===
          2020
        ) {
          console.log(
            `NUMBERS ${lines[i]} + ${lines[j]} + ${lines[k]} === 2020`
          );
          console.log(
            `RESULT ${
              Number.parseInt(lines[i]) *
              Number.parseInt(lines[j]) *
              Number.parseInt(lines[k])
            } `
          );
          return;
        }
      }
    }
  }
};

export default () => {
  part1();
  part2();
};
