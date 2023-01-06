import buildRegexString from "../buildRegexString";
import test from "ava";

const rules = {
  0: [[1, 2, 3]],
  1: [
    [4, 5],
    [5, 4],
  ],
  2: [
    [4, 4],
    [5, 5],
  ],
  3: [
    [1, 2],
    [2, 3],
  ],
  4: "b",
  5: "a",
};

test("buildRegexString tests", async (t) => {
  t.is(
    buildRegexString(0, rules),
    "((ba|ab)(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((|)(|)|(|)(|)))))))))))))))"
  );
  t.is(buildRegexString(1, rules), "(ba|ab)");
  t.is(buildRegexString(2, rules), "(bb|aa)");
  t.is(
    buildRegexString(3, rules),
    "((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((ba|ab)(bb|aa)|(bb|aa)((|)(|)|(|)(|)))))))))))))))"
  );
  t.is(buildRegexString(4, rules), "b");
  t.is(buildRegexString(5, rules), "a");
});
