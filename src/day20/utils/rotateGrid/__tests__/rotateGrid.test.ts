import rotateGrid from "../rotateGrid";
import test from "ava";

const smallGrid: string[] = ["#.", ".#"];

const bigGrid: string[] = ["#.#..", "#..##", "..##.", "###..", ".#..#"];
test("rotateGrid tests", async (t) => {
  t.deepEqual(rotateGrid(smallGrid), [".#", "#."]);
  t.deepEqual(rotateGrid(rotateGrid(smallGrid)), smallGrid);
  t.deepEqual(rotateGrid(rotateGrid(rotateGrid(smallGrid))), [".#", "#."]);
  t.deepEqual(
    rotateGrid(rotateGrid(rotateGrid(rotateGrid(smallGrid)))),
    smallGrid
  );

  t.deepEqual(rotateGrid(bigGrid), [
    ".#.##",
    "##...",
    ".##.#",
    "..##.",
    "#..#.",
  ]);
  t.deepEqual(rotateGrid(rotateGrid(bigGrid)), [
    "#..#.",
    "..###",
    ".##..",
    "##..#",
    "..#.#",
  ]);
  t.deepEqual(rotateGrid(rotateGrid(rotateGrid(bigGrid))), [
    ".#..#",
    ".##..",
    "#.##.",
    "...##",
    "##.#.",
  ]);
  t.deepEqual(rotateGrid(rotateGrid(rotateGrid(rotateGrid(bigGrid)))), bigGrid);
});
