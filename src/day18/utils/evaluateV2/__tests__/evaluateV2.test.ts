import evaluateV2 from "../evaluateV2";
import test from "ava";

test("evaluateV2 tests", async (t) => {
  t.is(
    evaluateV2("1 + (2 * 3) + (4 * (5 + 6))".replace(/\s/g, "").split("")),
    51
  );
  t.is(evaluateV2("2 * 3 + (4 * 5)".replace(/\s/g, "").split("")), 46);
  t.is(
    evaluateV2("5 + (8 * 3 + 9 + 3 * 4 * 3)".replace(/\s/g, "").split("")),
    1445
  );
  t.is(
    evaluateV2(
      "5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))".replace(/\s/g, "").split("")
    ),
    669060
  );
  t.is(
    evaluateV2(
      "((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"
        .replace(/\s/g, "")
        .split("")
    ),
    23340
  );
});
