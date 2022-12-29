import parseChildBag from "../parseChildBag";
import test from "ava";

test("parseChildBag tests", async (t) => {
  t.deepEqual(parseChildBag("2 faded coral bags"), {
    name: "faded coral",
    count: 2,
  });
  t.deepEqual(parseChildBag("3 striped crimson bags"), {
    name: "striped crimson",
    count: 3,
  });
  t.deepEqual(parseChildBag("1 faded red bag."), {
    name: "faded red",
    count: 1,
  });
});
