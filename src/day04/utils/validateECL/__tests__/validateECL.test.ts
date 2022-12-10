import test from "ava";

import validateECL from "../validateECL";

test("handle valid eye colors", async (t) => {
  t.is(validateECL("amb"), true);
  t.is(validateECL("blu"), true);
  t.is(validateECL("brn"), true);
  t.is(validateECL("gry"), true);
  t.is(validateECL("grn"), true);
  t.is(validateECL("hzl"), true);
  t.is(validateECL("oth"), true);
});

test("handle invalid eye colors", async (t) => {
  t.is(validateECL(""), false);
  t.is(validateECL("am"), false);
  t.is(validateECL("cj"), false);
  t.is(validateECL("a"), false);
  t.is(validateECL("gna"), false);
  t.is(validateECL("hzla"), false);
  t.is(validateECL("oto"), false);
});
