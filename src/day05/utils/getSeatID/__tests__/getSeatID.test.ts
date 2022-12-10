import getSeatID from "../getSeatID";
import test from "ava";

test("getSeatID tests", async (t) => {
  t.is(getSeatID(0, 0), 0);
  t.is(getSeatID(10, 5), 85);
  t.is(getSeatID(50, 5), 405);
  t.is(getSeatID(127, 8), 1024);
});
