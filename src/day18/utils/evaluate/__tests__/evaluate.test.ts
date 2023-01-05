import evaluate from "../evaluate";
import test from "ava";

test("evaluate tests", async (t) => {
  t.is(evaluate("2 * 3 + (4 * 5)".replace(/\s/g, "").split("")), 26);
  t.is(
    evaluate("5 + (8 * 3 + 9 + 3 * 4 * 3)".replace(/\s/g, "").split("")),
    437
  );
  t.is(
    evaluate(
      "5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))".replace(/\s/g, "").split("")
    ),
    12240
  );
  t.is(
    evaluate(
      "((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"
        .replace(/\s/g, "")
        .split("")
    ),
    13632
  );
});
