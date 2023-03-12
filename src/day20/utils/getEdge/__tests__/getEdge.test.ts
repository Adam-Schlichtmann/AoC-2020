import getEdge from "../getEdge";
import test from "ava";

const smallGrid: string[] = ["#.", ".#"];

const bigGrid: string[] = ["#.#..", "#..##", "..##.", "###..", ".#..#"];
test("getEdge tests", async (t) => {
  t.is(getEdge(smallGrid, 0), "#.");
  t.is(getEdge(smallGrid, 1), ".#");
  t.is(getEdge(smallGrid, 2), ".#");
  t.is(getEdge(smallGrid, 3), "#.");

  t.is(getEdge(bigGrid, 0), "#.#..");
  t.is(getEdge(bigGrid, 1), ".#..#");
  t.is(getEdge(bigGrid, 2), ".#..#");
  t.is(getEdge(bigGrid, 3), "##.#.");
});
