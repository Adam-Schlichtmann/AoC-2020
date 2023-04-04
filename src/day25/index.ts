import fs from "fs";

const part1 = () => {
  console.log("DAY 25 Part 1");

  const allFileContents = fs.readFileSync("./src/day25/input.txt", "utf-8");
  const keys = allFileContents
    .split(/\r?\n/)
    .filter((f) => !!f)
    .map((n) => Number.parseInt(n));

  const loops: number[] = keys.map((publicKey) => {
    let temp = (1 * 7) % 20201227;

    let l = 1;
    while (temp !== publicKey) {
      l++;
      temp = (temp * 7) % 20201227;
    }
    return l;
  });

  const encryptionKeys = keys.map((key, i) => {
    let temp = (1 * key) % 20201227;

    for (let l = 1; l < loops[i === 0 ? 1 : 0]; l++) {
      temp = (temp * key) % 20201227;
    }
    return temp;
  });

  console.log("Answer (Should be the same):", encryptionKeys);
};

const part2 = () => {
  console.log("DAY 25 Part 2");

  const allFileContents = fs.readFileSync("./src/day25/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
};

export default () => {
  part1();
  part2();
};
