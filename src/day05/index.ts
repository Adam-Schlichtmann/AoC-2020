import fs from "fs";
import { getBinary, getSeatID } from "./utils";

const part1 = () => {
  console.log("DAY 5 Part 1");

  const allFileContents = fs.readFileSync("./src/day05/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  let maxSeatID = 0;
  lines.forEach((line) => {
    const row = getBinary(line.slice(0, 7));
    const seat = getBinary(line.slice(7));
    const id = getSeatID(row, seat);
    if (id > maxSeatID) maxSeatID = id;
  });
  console.log(`Highest Seat ID: ${maxSeatID}`);
};

const printPlane = (plane: string[][]) => {
  console.log(plane.map((r) => r.join("")).join("\n"));
};

const findSeat = (plane: string[][]) => {
  let id = 0;

  const ids = plane.map((r, i) =>
    r.map((s, j) => (s === "O" ? -1 : getSeatID(i, j)))
  );

  ids.forEach((r, i) =>
    r.forEach((s, j) => {
      if (s === -1) {
        const myId = getSeatID(i, j);
        if (
          ids.flat().filter((id) => id === myId - 1 || id === myId + 1)
            .length === 2
        ) {
          id = myId;
        }
      }
    })
  );

  return id;
};

const part2 = async () => {
  console.log("DAY 5 Part 2");

  const allFileContents = fs.readFileSync("./src/day05/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  const plane: string[][] = [];
  for (let i = 0; i < 128; i++) {
    plane.push(["O", "O", "O", "O", "O", "O", "O", "O"]);
  }
  console.log(plane);

  lines.forEach((line) => {
    const row = getBinary(line.slice(0, 7));
    const seat = getBinary(line.slice(7));
    console.log("SEATING", row, seat);
    plane[row][seat] = "X";

    // printPlane(plane);
    console.log("EMPTY SEATS", plane.flat().filter((f) => f === "O").length);

    printPlane(plane);
    console.log("================");
  });

  console.log(`My Seat ID: ${findSeat(plane)}`);
};

export default () => {
  part1();
  part2();
};
