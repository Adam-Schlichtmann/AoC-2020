import test from "ava";

import validateIYR from "../validateIYR";

test("handle invalid values", async (t) => {
  t.is(validateIYR(""), false);
  t.is(validateIYR("ldka2"), false);
  t.is(validateIYR("2009"), false);
  t.is(validateIYR("2021"), false);
});

test("handle valid values", async (t) => {
  t.is(validateIYR("2010"), true);
  t.is(validateIYR("2020"), true);
  t.is(validateIYR("2015"), true);
});
