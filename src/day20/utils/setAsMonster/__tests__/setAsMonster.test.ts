import setAsMonster from "../setAsMonster";
import test from "ava";

test("setAsMonster tests", async (t) => {
  t.is(setAsMonster("#.#.#", 2), "#.O.#");
  t.is(setAsMonster("#.#.###.##..#", 8), "#.#.###.O#..#");
});
