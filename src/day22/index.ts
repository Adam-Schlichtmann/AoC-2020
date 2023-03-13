import fs from "fs";

type Player = {
  name: string;
  deck: number[];
};

const part1 = () => {
  console.log("DAY 22 Part 1");

  const allFileContents = fs.readFileSync("./src/day22/input.txt", "utf-8");
  const players = allFileContents
    .split(/\r?\n/)
    .filter((f) => !!f)
    .reduce<Player[]>((acc, item) => {
      if (item.trim()) {
        if (item.includes("Player")) {
          return [
            ...acc,
            { name: item.trim().slice(0, item.trim().length - 1), deck: [] },
          ];
        } else {
          return [
            ...acc.slice(0, acc.length - 1),
            {
              ...acc[acc.length - 1],
              deck: [...acc[acc.length - 1].deck, Number.parseInt(item)],
            },
          ];
        }
      }
      return acc;
    }, []);

  if (players.length !== 2) {
    console.log("PANIC");
  }

  const p1Deck = players[0].deck;
  const p2Deck = players[1].deck;

  let round = 1;
  while (p1Deck.length && p2Deck.length) {
    const p1 = p1Deck.shift();
    const p2 = p2Deck.shift();
    if (p1 && p2) {
      if (p1 > p2) {
        p1Deck.push(...[p1, p2]);
      } else {
        p2Deck.push(...[p2, p1]);
      }
    }
    round++;
  }

  const score = (p1Deck.length ? p1Deck : p2Deck).reduce(
    (acc, item, i, arr) => acc + (arr.length - i) * item,
    0
  );
  console.log(score);
};

const part2 = () => {
  console.log("DAY 22 Part 2");

  const allFileContents = fs.readFileSync("./src/day22/input.txt", "utf-8");
  const players = allFileContents
    .split(/\r?\n/)
    .filter((f) => !!f)
    .reduce<Player[]>((acc, item) => {
      if (item.trim()) {
        if (item.includes("Player")) {
          return [
            ...acc,
            { name: item.trim().slice(0, item.trim().length - 1), deck: [] },
          ];
        } else {
          return [
            ...acc.slice(0, acc.length - 1),
            {
              ...acc[acc.length - 1],
              deck: [...acc[acc.length - 1].deck, Number.parseInt(item)],
            },
          ];
        }
      }
      return acc;
    }, []);

  if (players.length !== 2) {
    console.log("PANIC");
  }

  const p1Deck = players[0].deck;
  const p2Deck = players[1].deck;
  const [p1Result, p2Result] = playRecursiveGame(p1Deck, p2Deck);
  const score = (p1Result.length ? p1Result : p2Result).reduce(
    (acc, item, i, arr) => acc + (arr.length - i) * item,
    0
  );
  console.log(score);
};

const isDuplicate = (
  history: Record<number, [number[], number[]]>,
  round: number,
  p1: number[],
  p2: number[]
) => {
  let t = round;
  while (t > 0) {
    if (p1.length === history[t]?.[0].length) {
      if (p2.length === history[t]?.[1].length) {
        if (
          p1.every((c, i) => c === history[t][0][i]) &&
          p2.every((c, i) => c === history[t][1][i])
        ) {
          return true;
        }
      }
    }
    t--;
  }
  return false;
};

const playRecursiveGame = (
  p1Deck: number[],
  p2Deck: number[],
  game = 1
): [number[], number[]] => {
  const history: Record<number, [number[], number[]]> = {};
  let round = 1;
  while (p1Deck.length && p2Deck.length) {
    // Check for existing state
    if (isDuplicate(history, round, p1Deck, p2Deck)) {
      return [p1Deck, []];
    } else {
      // Add current state to history
      history[round] = [[...p1Deck], [...p2Deck]];
    }

    const p1 = p1Deck.shift();
    const p2 = p2Deck.shift();

    if (p1 && p2) {
      if (p1 <= p1Deck.length && p2 <= p2Deck.length) {
        const result = playRecursiveGame(
          p1Deck.slice(0, p1),
          p2Deck.slice(0, p2),
          game + 1
        );

        if (result[0].length) {
          p1Deck.push(...[p1, p2]);
        } else {
          p2Deck.push(...[p2, p1]);
        }
      } else if (p1 > p2) {
        p1Deck.push(...[p1, p2]);
      } else {
        p2Deck.push(...[p2, p1]);
      }
    }
    round++;
  }
  return [p1Deck, p2Deck];
};

export default () => {
  part1();
  part2();
};
