import fs from "fs";

const part1 = () => {
  console.log("DAY 6 Part 1");

  const allFileContents = fs.readFileSync("./src/day06/input.txt", "utf-8");
  const groups: string[][] = allFileContents
    .split(/\n\n/)
    .filter((f) => !!f)
    .map((g) => g.split(/\r?\n/).filter((f) => !!f));

  const numbers = groups.map((group) => new Set(group.join("").split("")).size);

  console.log(`Totalled Yes Answers: ${numbers.reduce((a, b) => a + b, 0)}`);
};

const part2 = () => {
  console.log("DAY 6 Part 2");

  const allFileContents = fs.readFileSync("./src/day06/input.txt", "utf-8");
  const groups: string[][] = allFileContents
    .split(/\n\n/)
    .filter((f) => !!f)
    .map((g) => g.split(/\r?\n/).filter((f) => !!f));

  const characters = groups.map((group) => group.map((g) => g.split("")));
  let count = 0;
  characters.forEach((group) => {
    group[0].forEach((question) => {
      if (group.every((g) => g.includes(question))) {
        count += 1;
      }
    });
  });
  console.log(`Totalled All Yes Answers: ${count}`);
};

export default () => {
  part1();
  part2();
};
