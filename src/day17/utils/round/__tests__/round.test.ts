import round from "../round";
import test from "ava";

test("round tests", async (t) => {
  let activeCoords = [
    [1, 0, 0],
    [2, 1, 0],
    [0, 2, 0],
    [1, 2, 0],
    [2, 2, 0],
  ];
  for (let r = 0; r < 6; r++) {
    activeCoords = round(activeCoords);
  }

  t.is(activeCoords.length, 368);
});

test("round tests 2", async (t) => {
  let activeCoords = [
    [1, 0, 0, 0],
    [2, 1, 0, 0],
    [0, 2, 0, 0],
    [1, 2, 0, 0],
    [2, 2, 0, 0],
  ];
  for (let r = 0; r < 6; r++) {
    activeCoords = round(activeCoords);
  }

  t.is(activeCoords.length, 848);
});
