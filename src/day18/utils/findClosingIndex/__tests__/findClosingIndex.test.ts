import findClosingIndex from "../findClosingIndex";
import test from "ava";

test("findClosingIndex tests", async (t) => {
  t.is(findClosingIndex("1+1)".split("")), 4);
  t.is(findClosingIndex("(1+4)*5)".split("")), 8);
  t.is(findClosingIndex("1+(1*(2+1*99)))".split("")), 15);
  t.is(findClosingIndex("2*3)+(4*(5+6))".split("")), 4);
});
