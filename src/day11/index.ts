import fs from "fs";

const round = (map: string[][]): [string[][], boolean] => {
  const validCoords = (y: number, x: number): boolean =>
    y >= 0 && y < map.length && x >= 0 && x < map[y].length;

  const shouldSwitch = (y: number, x: number) => {
    let empty = 0;
    let occupied = 0;
    for (let dy = -1; dy < 2; dy++) {
      for (let dx = -1; dx < 2; dx++) {
        if (dy !== 0 || dx !== 0) {
          if (validCoords(y + dy, x + dx) && map[y + dy][x + dx] === "L")
            empty++;
          if (validCoords(y + dy, x + dx) && map[y + dy][x + dx] === "#")
            occupied++;
        }
      }
    }
    return (
      (map[y][x] === "L" && occupied === 0) ||
      (map[y][x] === "#" && occupied >= 4)
    );
  };
  let change = false;
  // Sort of dirty way to deep copy array
  const newMap: string[][] = JSON.parse(JSON.stringify(map));
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if ((map[y][x] === "L" || map[y][x] === "#") && shouldSwitch(y, x)) {
        change = true;
        newMap[y][x] = map[y][x] === "L" ? "#" : "L";
      }
    }
  }

  return [newMap, change];
};

const roundV2 = (map: string[][]): [string[][], boolean] => {
  const validCoords = (y: number, x: number): boolean =>
    y >= 0 && y < map.length && x >= 0 && x < map[y].length;

  const shouldSwitch = (y: number, x: number) => {
    let empty = 0;
    let occupied = 0;
    for (let dy = -1; dy < 2; dy++) {
      for (let dx = -1; dx < 2; dx++) {
        if (dy !== 0 || dx !== 0) {
          let multiplier = 1;
          while (validCoords(y + dy * multiplier, x + dx * multiplier)) {
            if (map[y + dy * multiplier][x + dx * multiplier] === "L") {
              empty++;
              break;
            } else if (map[y + dy * multiplier][x + dx * multiplier] === "#") {
              occupied++;
              break;
            } else {
              multiplier++;
            }
          }
        }
      }
    }
    return (
      (map[y][x] === "L" && occupied === 0) ||
      (map[y][x] === "#" && occupied >= 5)
    );
  };
  let change = false;
  // Sort of dirty way to deep copy array
  const newMap: string[][] = JSON.parse(JSON.stringify(map));
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if ((map[y][x] === "L" || map[y][x] === "#") && shouldSwitch(y, x)) {
        change = true;
        newMap[y][x] = map[y][x] === "L" ? "#" : "L";
      }
    }
  }

  return [newMap, change];
};

const part1 = () => {
  console.log("DAY 1 Part 1");

  const allFileContents = fs.readFileSync("./src/day11/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  const map: string[][] = [];
  lines.forEach((line, y) => (map[y] = line.split("")));
  let change = true;
  let m = [...map];
  let count = 0;
  while (change) {
    count++;
    [m, change] = round(m);
  }
  console.log(`Steady state after ${count} rounds`);
  console.log(
    `Steady state includes ${m.reduce(
      (acc, item) => item.filter((seat) => seat === "#").length + acc,
      0
    )} occupied seats`
  );
};

const part2 = () => {
  console.log("DAY 1 Part 2");

  const allFileContents = fs.readFileSync("./src/day11/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  const map: string[][] = [];
  lines.forEach((line, y) => (map[y] = line.split("")));
  let change = true;
  let m = [...map];
  let count = 0;
  while (change) {
    count++;
    [m, change] = roundV2(m);
  }
  console.log(`Steady state after ${count} rounds`);
  console.log(
    `Steady state includes ${m.reduce(
      (acc, item) => item.filter((seat) => seat === "#").length + acc,
      0
    )} occupied seats`
  );
};

export default () => {
  part1();
  part2();
};
