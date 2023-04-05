import fs from "fs";
import {
  getCornerTile,
  getMonsterCoords,
  getNextInRow,
  getNextRowStart,
  getTileSides,
  matchSideToTile,
  rotate90Clockwise,
  setAsMonster,
  removeBorders,
} from "./utils";
import { Tile, Tile2 } from "./Types";

// Did not feel like writing up test data on all of these larger helpers

const orientTopLeftCornerTile = (corner: Tile2, tiles: Tile2[]) => {
  const sides = getTileSides(corner);
  const neighbors = tiles.filter((n) => {
    if (n.id === corner.id) return false;
    const nSides = getTileSides(n);
    return sides.some((s) => nSides.includes(s));
  });
  const matches = matchSideToTile(corner, neighbors);
  if (matches[0] > 0 && matches[1] > 0) {
    return corner.tile.reverse();
  }
  if (matches[0] > 0 && matches[2] > 0) {
    console.log("THIS IS AN ERROR!!!");
    return corner.tile;
  }
  if (matches[0] > 0 && matches[3] > 0) {
    return corner.tile.map((r) => r.split("").reverse().join("")).reverse();
  }
  if (matches[1] > 0 && matches[2] > 0) {
    return corner.tile;
  }
  if (matches[1] > 0 && matches[3] > 0) {
    console.log("THIS IS AN ERROR!!!");
    return corner.tile;
  }
  if (matches[2] > 0 && matches[3] > 0) {
    return corner.tile.map((r) => r.split("").reverse().join(""));
  }
  console.log("THIS IS AN ERROR!!!");
  return corner.tile;
};

const orientNextInRow = (grid: string[][], currentRow: number, next: Tile2) => {
  const side = grid[currentRow].map((r) => r[r.length - 1]).join("");

  const nextSides = getTileSides(next);
  const matchIndex = nextSides.findIndex((s) => s === side);
  if (matchIndex === -1) {
    console.log("ERROR: next tile is not matching on row");
    return next.tile;
  }
  if (matchIndex === 0) {
    // Flip vertically
    // Rotate 90 clockwise
    return rotate90Clockwise(next.tile.reverse());
  }
  if (matchIndex === 1) {
    // Rotate 90 counter clock
    return rotate90Clockwise(rotate90Clockwise(rotate90Clockwise(next.tile)));
  }
  if (matchIndex === 2) {
    // Flip horizontal
    return next.tile.map((r) => r.split("").reverse().join(""));
  }
  if (matchIndex === 3) {
    // Rotate 180 clockwise
    return rotate90Clockwise(rotate90Clockwise(next.tile));
  }
  if (matchIndex === 4) {
    // Rotate 90 clockwise
    return rotate90Clockwise(next.tile);
  }
  if (matchIndex === 5) {
    // flip vertically
    // Rotate 90 counter
    return rotate90Clockwise(
      rotate90Clockwise(rotate90Clockwise(next.tile.reverse()))
    );
  }
  if (matchIndex === 6) {
    // Do nothing
    return next.tile;
  }
  if (matchIndex === 7) {
    // flip vertically
    return next.tile.reverse();
  }
  return next.tile;
};

const orientNextRowStart = (grid: string[][], next: Tile2): string[] => {
  const lastRow = grid[grid.length - 1][grid[grid.length - 1].length - 1];

  const nextSides = getTileSides(next);
  const matchIndex = nextSides.findIndex((s) => lastRow.startsWith(s));
  if (matchIndex === -1) {
    console.log("ERROR: next tile is not matching on row");
    return next.tile;
  }
  if (matchIndex === 0) {
    // Do nothing
    return next.tile;
  }
  if (matchIndex === 1) {
    // Flip horizontal
    return next.tile.map((r) => r.split("").reverse().join(""));
  }
  if (matchIndex === 2) {
    // Rotate 90 counter clockwise
    return rotate90Clockwise(rotate90Clockwise(rotate90Clockwise(next.tile)));
  }
  if (matchIndex === 3) {
    // Flip vertically
    // Rotate 90 clockwise
    return rotate90Clockwise(next.tile.reverse());
  }
  if (matchIndex === 4) {
    // Flip vertical
    return next.tile.reverse();
  }
  if (matchIndex === 5) {
    // Rotate 180 clockwise
    return rotate90Clockwise(rotate90Clockwise(next.tile));
  }
  if (matchIndex === 6) {
    // Flip vertical
    // Rotate 90 clockwise
    return rotate90Clockwise(next.tile.reverse());
  }
  if (matchIndex === 7) {
    // Rotate 90 clockwise
    return rotate90Clockwise(next.tile);
  }
  return next.tile;
};

const part1 = () => {
  console.log("DAY 20 Part 1");

  const allFileContents = fs.readFileSync("./src/day20/input.txt", "utf-8");
  const rawTiles = allFileContents.split(/\n\n/).filter((f) => !!f);

  const tiles = rawTiles.map<Tile2>((raw) => {
    const lines = raw.split(/\r?\n/);
    const tile = lines.slice(1, lines.length);
    return {
      id: Number.parseInt(lines[0].replace(/[^0-9]/g, "")),
      tile,
    };
  });
  const corners: Tile2[] = [];
  for (let i = 0; i < 4; i++) {
    const nextCorner = getCornerTile(
      // Move already found tiles to the back
      tiles.sort((t) => (corners.some((c) => c.id === t.id) ? 1 : -1))
    );
    console.log(nextCorner?.id);
    if (nextCorner) {
      corners.push(nextCorner);
    } else {
      console.log("MISSING A CORNER");
    }
  }

  console.log(
    `Product of corners: ${corners.reduce((acc, item) => item.id * acc, 1)}`
  );
};

const part2 = () => {
  console.log("DAY 20 Part 2");
  const allFileContents = fs.readFileSync("./src/day20/input.txt", "utf-8");
  const rawTiles = allFileContents.split(/\n\n/).filter((f) => !!f);

  const tiles = rawTiles.map<Tile2>((raw) => {
    const lines = raw.split(/\r?\n/);
    const tile = lines.slice(1, lines.length);
    return {
      id: Number.parseInt(lines[0].replace(/[^0-9]/g, "")),
      tile,
    };
  });

  const topLeftCorner = getCornerTile(tiles);
  if (!topLeftCorner) {
    console.log("No corner tile found");
    return;
  }

  let queue = [...tiles.filter((t) => t.id !== topLeftCorner.id)];

  const grid: string[][] = [[...orientTopLeftCornerTile(topLeftCorner, tiles)]];

  let row = 0;
  let nextTile = getNextInRow(grid, row, queue);
  let a = 0;
  if (!nextTile) {
    return;
  }

  while (nextTile) {
    a++;

    const nextTileOriented = orientNextInRow(grid, row, nextTile);
    nextTileOriented.forEach((line, i) => {
      grid[row][i] = grid[row][i] + line;
    });
    queue = queue.filter((t) => t.id !== nextTile?.id);
    nextTile = getNextInRow(grid, row, queue);

    // We need to jump rows
    if (!nextTile) {
      row++;
      nextTile = getNextRowStart(grid, queue);
      if (queue.length) {
        if (!nextTile) {
          console.log("Error going to next row");
          return;
        }
        const nextRowStartOrientated = orientNextRowStart(grid, nextTile);
        grid.push(nextRowStartOrientated);
        queue = queue.filter((t) => t.id !== nextTile?.id);
        nextTile = getNextInRow(grid, row, queue);
      }
    }

    if (a > 1000) return;
  }
  const final = grid
    .map((tileRow) => {
      return tileRow
        .slice(1, tileRow.length - 1)
        .map((r) => removeBorders(r, topLeftCorner.tile[0].length));
    })
    .flat();
  let flipped = final;
  for (let flip = 0; flip < 2; flip++) {
    flipped = flip === 0 ? final : final.reverse();
    for (let rotate = 0; rotate < 4; rotate++) {
      for (let r = 0; r < rotate; r++) {
        flipped = rotate90Clockwise(flipped);
      }
      let found = false;
      for (let y = 0; y < flipped.length; y++) {
        for (let x = 0; x < flipped[y].length; x++) {
          const monster = getMonsterCoords(x, y);
          if (
            monster.every(
              ([mx, my]) =>
                my >= 0 &&
                my < flipped.length &&
                mx >= 0 &&
                mx < flipped[my].length &&
                (flipped[my].charAt(mx) === "#" ||
                  flipped[my].charAt(mx) === "O")
            )
          ) {
            found = true;
            monster.forEach(([mx, my]) => {
              flipped[my] = setAsMonster(flipped[my], mx);
            });
          }
        }
      }
      if (found) break;
    }
  }
  flipped.forEach((r) => console.log(r));

  console.log(
    "Answer",
    flipped.reduce(
      (acc, row) => acc + row.split("").filter((c) => c === "#").length,
      0
    )
  );
};

export default () => {
  part1();
  part2();
};
