import createPlaceholder from "../createPlaceholder";
import test from "ava";

test("createPlaceholder tests", async (t) => {
  t.deepEqual(createPlaceholder(["row", "row", "row"]), ["   ", "   ", "   "]);
});
