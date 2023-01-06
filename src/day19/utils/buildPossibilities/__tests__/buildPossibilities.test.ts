import buildPossibilities from "../buildPossibilities";
import test from "ava";

const testRules = {
  "0": [[4, 1, 5]],
  "1": [
    [2, 3],
    [3, 2],
  ],
  "2": [
    [4, 4],
    [5, 5],
  ],
  "3": [
    [4, 5],
    [5, 4],
  ],
  "4": "a",
  "5": "b",
};

test("buildPossibilities tests", async (t) => {
  t.deepEqual(buildPossibilities(0, testRules), [
    "aaaabb",
    "abbabb",
    "aaabab",
    "abbbab",
    "aabaab",
    "abaaab",
    "aabbbb",
    "ababbb",
  ]);
  t.deepEqual(buildPossibilities(1, testRules), [
    "aaab",
    "bbab",
    "aaba",
    "bbba",
    "abaa",
    "baaa",
    "abbb",
    "babb",
  ]);
  t.deepEqual(buildPossibilities(2, testRules), ["aa", "bb"]);
  t.deepEqual(buildPossibilities(3, testRules), ["ab", "ba"]);
  t.deepEqual(buildPossibilities(4, testRules), ["a"]);
  t.deepEqual(buildPossibilities(5, testRules), ["b"]);
});
