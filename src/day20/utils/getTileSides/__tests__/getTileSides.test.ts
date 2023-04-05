import { t1171, t1951 } from "../../tile.testdata";
import getTileSides from "../getTileSides";
import test from "ava";

test("getTileSides tests", async (t) => {
  t.deepEqual(getTileSides(t1951), [
    "#.##...##.",
    ".##...##.#",
    ".#####..#.",
    ".#..#####.",
    "#...##.#..",
    "..#.##...#",
    "##.#..#..#",
    "#..#..#.##",
  ]);

  t.deepEqual(getTileSides(t1171), [
    "####...##.",
    ".##...####",
    ".#..#.....",
    ".....#..#.",
    ".....##...",
    "...##.....",
    "###....##.",
    ".##....###",
  ]);
});
