import flipGrid from "../flipGrid";
import test from "ava";

const smallGrid: string[] = ["#.", ".#"];

const bigGrid: string[] = ["#.#..", "#..##", "..##.", "###..", ".#..#"];

test("flipGrid tests", async (t) => {
  t.deepEqual(flipGrid(smallGrid), [".#", "#."]);
  t.deepEqual(flipGrid(flipGrid(smallGrid)), smallGrid);

  t.deepEqual(flipGrid(bigGrid), ["..#.#", "##..#", ".##..", "..###", "#..#."]);
  t.deepEqual(flipGrid(flipGrid(bigGrid)), bigGrid);
});
