import test from "ava";

import validateHCL from "../validateHCL";

test("handle invalid values", async (t) => {
  t.is(validateHCL(""), false);
  t.is(validateHCL("#"), false);
  t.is(validateHCL("#fff"), false);
  t.is(validateHCL("192821"), false);
  t.is(validateHCL("acb411"), false);
  t.is(validateHCL("#abcnqw"), false);
});

test("handle valid values", async (t) => {
  t.is(validateHCL("#ffffff"), true);
  t.is(validateHCL("#000000"), true);
  t.is(validateHCL("#000fff"), true);
  t.is(validateHCL("#adf342"), true);
  t.is(validateHCL("#f6f6f6"), true);
  t.is(validateHCL("#090111"), true);
});
