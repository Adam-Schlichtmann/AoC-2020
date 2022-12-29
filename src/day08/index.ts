import fs from "fs";

const runProgram = (lines: string[]) => {
  let acc = 0;
  const visited: number[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (visited.includes(i)) {
      console.log("LOOP FOUND! Acc Value:", acc);
      return false;
    }
    visited.push(i);
    const [operation, value] = lines[i].split(" ");
    if (operation === "acc") {
      acc += Number.parseInt(value);
    } else if (operation === "jmp") {
      i += Number.parseInt(value);
      i -= 1;
    }
  }
  console.log("TERMINATED!", acc);
  return true;
};

const part1 = () => {
  console.log("DAY 8 Part 1");

  const allFileContents = fs.readFileSync("./src/day08/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  runProgram(lines);
};

const part2 = () => {
  console.log("DAY 8 Part 2");

  const allFileContents = fs.readFileSync("./src/day08/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("nop")) {
      if (
        runProgram([
          ...lines.slice(0, i),
          lines[i].replace("nop", "jmp"),
          ...lines.slice(i + 1),
        ])
      ) {
        return;
      }
    } else if (lines[i].includes("jmp")) {
      if (
        runProgram([
          ...lines.slice(0, i),
          lines[i].replace("jmp", "nop"),
          ...lines.slice(i + 1),
        ])
      ) {
        return;
      }
    }
  }
};

export default () => {
  part1();
  part2();
};
