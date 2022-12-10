import test from "ava";

import validateHGT from "../validateHGT";

test("handle invalid values", async (t) => {
  t.is(validateHGT(""), false);
  t.is(validateHGT("123"), false);
  t.is(validateHGT("cm"), false);
  t.is(validateHGT("asdfcm"), false);
  t.is(validateHGT("149cm"), false);
  t.is(validateHGT("194cm"), false);
  t.is(validateHGT("58in"), false);
  t.is(validateHGT("77in"), false);
});

test("handle valid values", async (t) => {
  t.is(validateHGT("150cm"), true);
  t.is(validateHGT("193cm"), true);
  t.is(validateHGT("167cm"), true);
  t.is(validateHGT("59in"), true);
  t.is(validateHGT("76in"), true);
  t.is(validateHGT("70in"), true);
});
