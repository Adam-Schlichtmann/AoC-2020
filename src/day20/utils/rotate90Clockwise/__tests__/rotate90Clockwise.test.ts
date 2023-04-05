import { t1427 } from "../../tile.testdata";
import { t1951 } from "../../tile.testdata";
import rotate90Clockwise from "../rotate90Clockwise";
import test from "ava";

test("rotate90Clockwise tests", async (t) => {
  t.deepEqual(rotate90Clockwise(t1951.tile), [
    "#..#..#.##",
    "..####....",
    ".#####..##",
    "..#.#...##",
    "##.#.##.#.",
    "#..##.###.",
    "....#.#...",
    "##.##.#..#",
    "..###.##.#",
    ".#..#####.",
  ]);

  t.deepEqual(rotate90Clockwise(t1427.tile), [
    "......#..#",
    "..#....###",
    "##....#..#",
    "#.###..#..",
    "..#.######",
    "####.....#",
    ".###..###.",
    ".#.##.#.##",
    "#.####....",
    ".#.#.###..",
  ]);
});
