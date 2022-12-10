import test from "ava";

import validateEYR from "../validateEYR";

test("handle invalid values", async (t) => {
  t.is(validateEYR(""), false);
  t.is(validateEYR("ldka2"), false);
  t.is(validateEYR("2019"), false);
  t.is(validateEYR("2031"), false);
});

test("handle valid values", async (t) => {
  t.is(validateEYR("2020"), true);
  t.is(validateEYR("2030"), true);
  t.is(validateEYR("2025"), true);
});
