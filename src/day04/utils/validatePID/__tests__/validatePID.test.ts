import test from "ava";
import validatePID from "../validatePID";

test("handles invalid values", async (t) => {
  t.is(validatePID("a999999999"), false);
  t.is(validatePID("9d919d19d"), false);
  t.is(validatePID("09192991"), false);
  t.is(validatePID("1110029101928"), false);
});

test("handles valid values", async (t) => {
  t.is(validatePID("123456789"), true);
  t.is(validatePID("000000000"), true);
  t.is(validatePID("999999999"), true);
  t.is(validatePID("192810291"), true);
});
