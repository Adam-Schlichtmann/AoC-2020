import { t2311, tile3079, tiles } from "../../tile.testdata";
import getNextInRow from "../getNextInRow";
import test from "ava";

test("getNextInRow tests", async (t) => {
  t.deepEqual(
    getNextInRow(
      [
        [
          "#...##.#..",
          "..#.#..#.#",
          ".###....#.",
          "###.##.##.",
          ".###.#####",
          ".##.#....#",
          "#...######",
          ".....#..##",
          "#.####...#",
          "#.##...##.",
        ],
      ],
      0,
      tiles.filter((t) => t.id !== 1951)
    ),
    t2311
  );

  t.deepEqual(
    getNextInRow(
      [
        [
          "#...##.#....###..###",
          "..#.#..#.####...#.#.",
          ".###....#...#....#..",
          "###.##.##..#.#.#..##",
          ".###.#######...#.###",
          ".##.#....###.##.###.",
          "#...##########.#...#",
          ".....#..###...##..#.",
          "#.####...###..#.....",
          "#.##...##...##.#..#.",
        ],
      ],
      0,
      tiles.filter((t) => t.id !== 1951 && t.id !== 2311)
    ),
    tile3079
  );
});
