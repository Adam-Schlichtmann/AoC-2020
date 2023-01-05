import customHas from "../customHas";
import test from "ava";

test("customHas tests", async (t) => {
  t.is(customHas([], [0, 0, 0]), false);
  t.is(
    customHas(
      [
        [1, 0, 0],
        [0, 0, 1],
      ],
      [0, 0, 0]
    ),
    false
  );
  t.is(
    customHas(
      [
        [1, 0, 0],
        [0, 0, 1],
      ],
      [1, 0, 0]
    ),
    true
  );
  t.is(
    customHas(
      [
        [1, 0, 0],
        [0, 1, 1],
        [0, 0, 1],
      ],
      [1, 1, 0]
    ),
    false
  );
  t.is(
    customHas(
      [
        [1, 0, 0],
        [0, 1, 1],
        [0, 0, 1],
      ],
      [0, 1, 1]
    ),
    true
  );
});
