import isUpperLeft from "../isUpperLeft";
import test from "ava";

test("isUpperLeft tests", async (t) => {
  t.is(isUpperLeft([-1, -1, -1, -1, -1]), false);
  t.is(isUpperLeft([-1, -1, -1, -1]), false);
  t.is(isUpperLeft([-1, 1, -1, -1]), false);
  t.is(isUpperLeft([-1, -1, 1, -1]), false);
  t.is(isUpperLeft([-1, -1, 1, 2]), false);
  t.is(isUpperLeft([2, -1, 1, 3]), false);
  t.is(isUpperLeft([3, 4, 1, 2]), false);
  t.is(isUpperLeft([-1, 1, 2, -1]), true);
});
