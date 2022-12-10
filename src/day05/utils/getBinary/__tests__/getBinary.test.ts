import getBinary from "../getBinary";
import test from "ava";

test("getBinary tests", async (t) => {
  t.is(getBinary("FFFFFFF"), 0);
  t.is(getBinary("BBBBBBB"), 127);
  t.is(getBinary("BFFBBFF"), 76);
  t.is(getBinary("FBBFFBB"), 51);
});
