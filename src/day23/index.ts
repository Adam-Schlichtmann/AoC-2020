import fs from "fs";

const P1_ROUNDS = 100;

const play = (rounds: number, inputCups: number[], start: number) => {
  let cups = [...inputCups];
  let currentCup = start;

  for (let round = 0; round < rounds; round++) {
    const first = cups[currentCup];
    const second = cups[first];
    const third = cups[second];
    let destination = currentCup - 1;
    if (destination <= 0) {
      destination = cups.length - 1;
    }
    // Decrement destination until we find a valid destination
    while (
      destination === first ||
      destination === second ||
      destination === third
    ) {
      destination--;
      if (destination <= 0) {
        destination = cups.length - 1;
      }
    }
    // Current now points to what was after third
    cups[currentCup] = cups[third];
    // Cup following destination stored in temp
    const temp = cups[destination];
    // first goes after destination
    cups[destination] = first;
    // Third cup points to previous after desination
    cups[third] = temp;
    // Go to the next cup to start a new round
    currentCup = cups[currentCup];
  }
  return cups;
};
const part1 = () => {
  // This was rewritten after doing part 2. It was pretty bad...
  console.log("DAY 23 Part 1");
  const allFileContents = fs.readFileSync("./src/day23/input.txt", "utf-8");

  const input = allFileContents
    .split(/\r?\n/)
    .filter((f) => !!f)
    .reduce<number[]>(
      (acc, row) => [...acc, ...row.split("").map((n) => Number.parseInt(n))],
      []
    );
  // Cups is a "linked list"
  // EG: cups[x] = y. Reads as the cup following x is y
  const cups = Array(input.length + 1)
    .fill(0)
    .map((_, i) => -1);
  input.forEach((v, i) => {
    if (i >= input.length - 1) {
      cups[v] = input[0];
    } else {
      cups[v] = input[i + 1];
    }
  });
  console.log(cups);

  const result = play(P1_ROUNDS, cups, input[0]);

  let next = result[1];
  let answer = "";
  while (next !== 1) {
    answer += `${next}`;
    next = result[next];
  }

  console.log("ANSWER", answer);
};

const P2_ROUNDS = 10000000;
const part2 = () => {
  console.log("DAY 23 Part 2");

  const allFileContents = fs.readFileSync("./src/day23/input.txt", "utf-8");

  const input = allFileContents
    .split(/\r?\n/)
    .filter((f) => !!f)
    .reduce<number[]>(
      (acc, row) => [...acc, ...row.split("").map((n) => Number.parseInt(n))],
      []
    );
  // Cups is a "linked list"
  // EG: cups[x] = y. Reads as the cup following x is y
  const cups = Array(1000001)
    .fill(0)
    .map((_, i) => i + 1);

  input.forEach((v, i) => {
    if (i >= input.length - 1) {
      cups[v] = 10;
    } else {
      cups[v] = input[i + 1];
    }
  });
  cups[1000000] = input[0];

  const result = play(P2_ROUNDS, cups, input[0]);

  console.log("Answer:", result[1] * result[result[1]]);
};

export default () => {
  part1();
  part2();
};
