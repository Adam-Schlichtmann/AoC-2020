import fs from "fs";

import getNeighbors from "../getNeighbors";
import test from "ava";
import { Tile } from "../../../Types";

const tiles = (() => {
  const allFileContents = fs.readFileSync("./src/day20/test.txt", "utf-8");
  const rawTiles = allFileContents.split(/\n\n/).filter((f) => !!f);

  return rawTiles.map<Tile>((raw) => {
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
})();

test("getNeighbors tests", async (t) => {
  const tile2971 = tiles.find((t) => t.id === 2971)!;
  t.deepEqual(getNeighbors(tile2971, tiles), {
    ...tile2971,
    neighbors: [2729, -1, -1, 1489],
  });
  const tile1427 = tiles.find((t) => t.id === 1427)!;
  t.deepEqual(getNeighbors(tile1427, tiles), {
    ...tile1427,
    neighbors: [2311, 2729, 1489, 2473],
  });
  const tile1489 = tiles.find((t) => t.id === 1489)!;
  t.deepEqual(getNeighbors(tile1489, tiles), {
    ...tile1489,
    neighbors: [1427, 2971, -1, 1171],
  });
  const tile2729 = tiles.find((t) => t.id === 2729)!;
  t.deepEqual(getNeighbors(tile2729, tiles), {
    ...tile2729,
    neighbors: [1951, -1, 2971, 1427],
  });
});
