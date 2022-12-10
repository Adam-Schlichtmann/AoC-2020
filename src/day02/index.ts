import fs from "fs";
import { PassThrough } from "stream";

type ParsedLine = {
  max: number;
  min: number;
  password: string;
  character: string;
};

const parseLine = (line: string): ParsedLine => {
  const [rule, password] = line.split(":");
  const [range, character] = rule.split(" ");
  const [min, max] = range.split("-");
  return {
    max: Number.parseInt(max),
    min: Number.parseInt(min),
    character,
    password: password.trim(),
  };
};

const isValid = ({ max, min, character, password }: ParsedLine): boolean => {
  const count = password.split("").filter((c) => c == character).length;
  return count >= min && count <= max;
};

const part1 = () => {
  console.log("DAY 2 Part 1");

  const allFileContents = fs.readFileSync("./src/day02/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);

  let validCount = 0;
  lines.forEach((line) => {
    if (isValid(parseLine(line))) {
      validCount += 1;
    }
  });
  console.log(`VALID PASSWORDS: ${validCount}`);
};

const isValid2 = ({ max, min, character, password }: ParsedLine): boolean => {
  const first = password[min - 1] === character;
  const second = password[max - 1] === character;

  return first ? !second : second;
};

const part2 = () => {
  console.log("DAY 2 Part 2");

  const allFileContents = fs.readFileSync("./src/day02/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);

  let validCount = 0;
  lines.forEach((line) => {
    if (isValid2(parseLine(line))) {
      validCount += 1;
    }
  });
  console.log(`VALID PASSWORDS: ${validCount}`);
};

export default () => {
  part1();
  part2();
};
