import removeBorders from "../removeBorders";
import test from "ava";

test("removeBorders tests", async (t) => {
  t.is(removeBorders("#........#", 10), "........");
  t.is(removeBorders("#........##....#...#", 10), "............#...");
  t.is(
    removeBorders(".#.#.#.#.#.#.#.#.#.#.#.#.#.#.#", 10),
    "#.#.#.#.#.#.#.#.#.#.#.#."
  );
});
