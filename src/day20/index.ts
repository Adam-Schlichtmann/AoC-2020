import fs from "fs";
import {
  cleanTile,
  rotateGrid,
  checkMonster,
  getMonsterCoords,
  getNeighbors,
  isUpperLeft,
  rotateNeighbors,
  flipGrid,
  getEdge,
} from "./utils";
import { Tile } from "./Types";

const part1 = () => {
  console.log("DAY 20 Part 1");

  const allFileContents = fs.readFileSync("./src/day20/input.txt", "utf-8");
  const rawTiles = allFileContents.split(/\n\n/).filter((f) => !!f);

  const tiles = rawTiles.map<Tile>((raw) => {
    const lines = raw.split(/\r?\n/);

    let left: string = "";
    let right: string = "";
    for (let i = 1; i < lines.length; i++) {
      left += lines[i][0];
      right += lines[i][lines[i].length - 1];
    }

    return {
      id: Number.parseInt(lines[0].replace(/[^0-9]/g, "")),
      sides: [lines[1], right, lines[lines.length - 1], left],
      tile: lines.slice(1, lines.length),
      neighbors: Array(4).fill(-1),
    };
  });
  const fullTiles = tiles.map((t) => getNeighbors(t, tiles));

  const corners = fullTiles.filter(
    (f) => f.neighbors.filter((f) => f > 0).length === 2
  );
  console.log(
    `Product of corners ${corners.reduce((acc, item) => item.id * acc, 1)}`
  );
};

const part2 = () => {
  console.log("DAY 20 Part 2");
  const allFileContents = fs.readFileSync("./src/day20/test.txt", "utf-8");
  const rawTiles = allFileContents.split(/\n\n/).filter((f) => !!f);

  const tiles = rawTiles
    .map<Tile>((raw) => {
      const lines = raw.split(/\r?\n/);
      const tile = lines.slice(1, lines.length);
      return {
        id: Number.parseInt(lines[0].replace(/[^0-9]/g, "")),
        sides: [
          lines[1],
          getEdge(tile, 1),
          lines[lines.length - 1],
          getEdge(tile, 3),
        ],
        tile,
        neighbors: Array(4).fill(-1),
      };
    })
    .map((t, _, array) => getNeighbors(t, array))
    .sort((a, b) =>
      a.neighbors.filter((f) => f > 0).length >
      b.neighbors.filter((f) => f > 0).length
        ? -1
        : 1
    );

  //  === Attempts here ===

  // Issue is that the tiles need to be rotated
  // let grid: string[] = [];
  //   let queue = [...tiles];
  //   let current = queue.find((t) => isUpperLeft(t.neighbors));
  //   let firstInRow = current;
  //   let rowIndex = 1;
  //   if (!current) {
  //     console.log("Unable to find next tile");
  //     return;
  //   }
  //   while (queue.length) {
  //     console.log(queue.length);
  //     console.log("ID:", current?.id);
  //     if (!current || !firstInRow) {
  //       console.log("error finding next tile");
  //       return;
  //     }
  //     // Remove current from queue
  //     queue = queue.filter((t) => t.id !== current?.id);

  //     // Add to Grid
  //     if (!grid.length) {
  //       grid = [...cleanTile(current)];
  //     } else {
  //       cleanTile(current).forEach(
  //         (row, i, array) =>
  //           (grid[i + rowIndex * array.length] = `${
  //             grid[i + rowIndex * array.length]
  //           }${row}`)
  //       );
  //     }
  //     // Find next to the right
  //     current = queue.find((t) => t.neighbors[1] === current?.id);
  //     if (!current) {
  //       console.log("GOING TO NEW ROW");
  //       rowIndex++;
  //       // If there isn't a next on the right go to next row
  //       current = queue.find((t) => t.neighbors[0] === firstInRow?.id);
  //       firstInRow = current;
  //     }
  //   }
  //   console.log(grid);
};

export default () => {
  part1();
  part2();
};

const buildRow = (
  tiles: Tile[],
  current: Tile,
  grid: string[] = []
): string[] => {
  // Handle Right
  if (current.neighbors[1] > 0) {
    const right = tiles.find((t) => t.id === current.neighbors[1]);
    if (right) {
      const cleaned = cleanTile(right);
      return buildRow(
        tiles,
        right,
        grid.map((r, i) => `${r}${cleaned[i]}`)
      );
    }
  }
  return grid;
};

// Issue is that the tiles need to be rotated
// Was trying to start top left
// let grid: string[] = [];
//   let queue = [...tiles];
//   let current = queue.find((t) => isUpperLeft(t.neighbors));
//   let firstInRow = current;
//   let rowIndex = 1;
//   if (!current) {
//     console.log("Unable to find next tile");
//     return;
//   }
//   while (queue.length) {
//     console.log(queue.length);
//     console.log("ID:", current?.id);
//     if (!current || !firstInRow) {
//       console.log("error finding next tile");
//       return;
//     }
//     // Remove current from queue
//     queue = queue.filter((t) => t.id !== current?.id);

//     // Add to Grid
//     if (!grid.length) {
//       grid = [...cleanTile(current)];
//     } else {
//       cleanTile(current).forEach(
//         (row, i, array) =>
//           (grid[i + rowIndex * array.length] = `${
//             grid[i + rowIndex * array.length]
//           }${row}`)
//       );
//     }
//     // Find next to the right
//     current = queue.find((t) => t.neighbors[1] === current?.id);
//     if (!current) {
//       console.log("GOING TO NEW ROW");
//       rowIndex++;
//       // If there isn't a next on the right go to next row
//       current = queue.find((t) => t.neighbors[0] === firstInRow?.id);
//       firstInRow = current;
//     }
//   }
//   console.log(grid);

// Same thing basically was trying to start from middle out
// console.log(tiles);
// let grid: string[] = [];
// let queue = [...tiles];
// let current = queue.find((t) => t.neighbors.every((n) => n > 0));

// if (!current) {
//   console.log("Unable to find next tile");
//   return;
// }
// while (queue.length) {
//   console.log(queue.length);
//   console.log("ID:", current?.id);
//   if (!current) {
//     console.log("error finding next tile");
//     return;
//   }
//   // Remove current from queue
//   queue = queue.filter((t) => t.id !== current?.id);
//   current.neighbors.forEach((n, i) => {
//     const neighbor = tiles.find((t) => t.id === n);
//     if (!neighbor) {
//       return;
//     }
//     if (i === 0) {
//       grid;
//     }
//   });
//   // Add to Grid
//   if (!grid.length) {
//     grid = [...cleanTile(current)];
//   } else {
//   }
//   // Find next to the right
//   current = queue.find((t) => t.neighbors[1] === current?.id);
// }
// console.log(grid);
