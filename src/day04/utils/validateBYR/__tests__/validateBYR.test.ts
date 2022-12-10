import test from "ava";

import validateBYR from "../validateBYR";

test("handles invalid values", async (t) => {
  t.is(validateBYR("124d"), false);
  t.is(validateBYR("1919"), false);
  t.is(validateBYR("2003"), false);
});

test("handle valid values", async (t) => {
  t.is(validateBYR("1920"), true);
  t.is(validateBYR("2002"), true);
  t.is(validateBYR("2001"), true);
  t.is(validateBYR("1921"), true);
  t.is(validateBYR("1950"), true);
});
