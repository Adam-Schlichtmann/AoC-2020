import countActiveNeighbors from "../countActiveNeighbors";
import test from "ava";

test("countActiveNeighbors tests", async (t) => {
  t.is(
    countActiveNeighbors(
      [0, 0, 0],
      [
        [-1, 1, 0],
        [-1, 0, 0],
        [0, 0, 0],
        [0, 1, 1],
        [0, -1, 1],
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 0],
        [1, 1, 1],
        [-1, 2, 0],
        [-2, 0, 0],
      ]
    ),
    8
  );

  t.is(
    countActiveNeighbors(
      [0, 0, 0, 0],
      [
        [-1, 1, 0, 0],
        [-1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 1],
        [0, -1, 1, 0],
        [1, 0, 1, -1],
        [1, 1, 0, -1],
        [1, 0, 0, 0],
        [1, 1, 1, 1],
        [-1, 2, 0, 0],
        [-2, 0, 2, 0],
      ]
    ),
    8
  );
});
