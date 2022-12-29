import fs from "fs";

const PREAMBLE_SIZE = 25;

const validateNumber = (number: number, preamble: number[]): boolean => {
  for (let i = 0; i < preamble.length; i++) {
    for (let j = i; j < preamble.length; j++) {
      if (preamble[i] + preamble[j] === number) return true;
    }
  }
  return false;
};
const part1 = () => {
  console.log("DAY 9 Part 1");

  const allFileContents = fs.readFileSync("./src/day09/input.txt", "utf-8");
  const lines = allFileContents
    .split(/\r?\n/)
    .filter((f) => !!f)
    .map((m) => Number.parseInt(m));

  for (let i = PREAMBLE_SIZE; i < lines.length; i++) {
    if (!validateNumber(lines[i], [...lines.slice(i - PREAMBLE_SIZE, i)])) {
      console.log("FAILED TO VALIDATE:", lines[i]);
      return;
    }
  }
};

const part2 = () => {
  console.log("DAY 9 Part 2");

  const allFileContents = fs.readFileSync("./src/day09/input.txt", "utf-8");
  const lines = allFileContents
    .split(/\r?\n/)
    .filter((f) => !!f)
    .map((m) => Number.parseInt(m));
  let invalidNumber = -1;
  for (let i = PREAMBLE_SIZE; i < lines.length; i++) {
    if (!validateNumber(lines[i], [...lines.slice(i - PREAMBLE_SIZE, i)])) {
      console.log("FAILED TO VALIDATE:", lines[i]);
      invalidNumber = lines[i];
      break;
    }
  }
  for (let i = 0; i < lines.length; i++) {
    let sum = 0;
    let end = i;
    while (sum < invalidNumber) {
      sum += lines[end];
      if (sum === invalidNumber) {
        const set = lines.slice(i, end).sort();
        console.log(
          `Smallest: ${set[0]}, Biggest: ${set[set.length - 1]}, Cipher: ${
            set[0] + set[set.length - 1]
          }`
        );
        return;
      }
      end++;
    }
  }
};

export default () => {
  part1();
  part2();
};
