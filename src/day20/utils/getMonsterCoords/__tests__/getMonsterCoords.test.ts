import getMonsterCoords from "../getMonsterCoords";
import test from "ava";

test("getMonsterCoords tests", async (t) => {
  t.deepEqual(getMonsterCoords(0, 0), [
    [18, -1],
    [0, 0],
    [5, 0],
    [6, 0],
    [11, 0],
    [12, 0],
    [17, 0],
    [18, 0],
    [19, 0],
    [1, 1],
    [4, 1],
    [7, 1],
    [10, 1],
    [13, 1],
    [16, 1],
  ]);

  t.deepEqual(getMonsterCoords(5, 5), [
    [23, 4],
    [5, 5],
    [10, 5],
    [11, 5],
    [16, 5],
    [17, 5],
    [22, 5],
    [23, 5],
    [24, 5],
    [6, 6],
    [9, 6],
    [12, 6],
    [15, 6],
    [18, 6],
    [21, 6],
  ]);
});
