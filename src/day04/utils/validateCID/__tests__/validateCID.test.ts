import validateCID from "../validateCID";

import test from "ava";

test("always true", async (t) => {
  t.is(validateCID(), true);
  // @ts-expect-error It will just ignore it
  t.is(validateCID("123"), true);
  // @ts-expect-error It will just ignore it
  t.is(validateCID(""), true);
});
