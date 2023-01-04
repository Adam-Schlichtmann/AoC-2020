import fs from "fs";

const part1 = () => {
  console.log("DAY 15 Part 1");

  const allFileContents = fs.readFileSync("./src/day15/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  const starting = lines[0].split(",").map((n) => Number.parseInt(n));
  // const starting = [0, 3, 6];
  const history: Record<number, number[]> = {};
  let last: number = -1;
  starting.forEach((n, i) => {
    history[n] = [i];
    if (i === starting.length - 1) {
      last = n;
    }
  });
  // Round is 0 indexed
  for (let round = starting.length; round < 2020; round++) {
    // Last time was first time
    if (history[last] && history[last].length === 1) {
      history[0] = [...(history[0] ?? []), round];
      last = 0;
    } else if (history[last] && history[last].length > 1) {
      const next =
        history[last][history[last].length - 1] -
        history[last][history[last].length - 2];
      history[next] = [...(history[next] ?? []), round];
      last = next;
    }
  }
  console.log(last);
};

const ROUNDS = 30000000;
const part2 = () => {
  console.log("DAY 15 Part 2");

  const allFileContents = fs.readFileSync("./src/day15/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  const starting = lines[0].split(",").map((n) => Number.parseInt(n));
  // This definition is KEY!!!! Thank you Reddit
  const history: number[] = Array(ROUNDS);
  let current: number = starting[starting.length - 1];
  starting.forEach((n, i) => {
    if (i < starting.length - 1) history[n] = i + 1;
  });
  // Round is 1 indexed
  for (let round = 1; round <= ROUNDS; round++) {
    if (round < starting.length + 1) {
      current = starting[round - 1];
    }

    // Last time was first time
    if (!history[current]) {
      history[current] = round;
      if (round !== ROUNDS) current = 0;
    } else {
      let next = round - history[current];
      history[current] = round;
      if (round !== ROUNDS) current = next;
    }
  }
  console.log(current);
};

export default () => {
  part1();
  part2();
};
