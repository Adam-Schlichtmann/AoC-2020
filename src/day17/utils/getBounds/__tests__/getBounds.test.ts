import getBounds from "../getBounds";
import test from "ava";

test("getBounds tests", async (t) => {
  t.deepEqual(
    getBounds([
      [1, 2, 1],
      [-1, 1, -2],
      [0, 2, 0],
      [3, 0, 2],
    ]),
    [
      [-2, 5],
      [-1, 4],
      [-3, 4],
    ]
  );

  t.deepEqual(
    getBounds([
      [1, 2, 1, 4],
      [-1, 1, -2, 5],
      [0, 2, 0, 8],
      [3, 0, 2, 9],
    ]),
    [
      [-2, 5],
      [-1, 4],
      [-3, 4],
      [3, 11],
    ]
  );
});
