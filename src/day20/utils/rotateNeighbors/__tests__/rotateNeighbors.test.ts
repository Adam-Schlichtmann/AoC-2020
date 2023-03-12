import rotateNeighbors from "../rotateNeighbors";
import test from "ava";

test("rotateNeighbors tests", async (t) => {
  t.deepEqual(rotateNeighbors([-1, 2, 3, -1]), [-1, -1, 2, 3]);
  t.deepEqual(rotateNeighbors([-1, -1, 2, 3]), [3, -1, -1, 2]);
  t.deepEqual(rotateNeighbors([3, -1, -1, 2]), [2, 3, -1, -1]);
  t.deepEqual(rotateNeighbors([2, 3, -1, -1]), [-1, 2, 3, -1]);
});
