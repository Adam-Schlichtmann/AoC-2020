import sumChildren from "../sumChildren";
import test from "ava";

const allBags = [
  {
    name: "shiny gold",
    children: [{ count: 2, name: "dark red" }],
    contains: false,
  },
  {
    name: "dark red",
    children: [{ count: 2, name: "dark orange" }],
    contains: false,
  },
  {
    name: "dark orange",
    children: [{ count: 2, name: "dark yellow" }],
    contains: false,
  },
  {
    name: "dark yellow",
    children: [{ count: 2, name: "dark green" }],
    contains: false,
  },
  {
    name: "dark green",
    children: [{ count: 2, name: "dark blue" }],
    contains: false,
  },
  {
    name: "dark blue",
    children: [{ count: 2, name: "dark violet" }],
    contains: false,
  },
  { name: "dark violet", children: [], contains: false },
];

test("sumChildren tests", async (t) => {
  t.is(
    sumChildren(
      {
        name: "shiny gold",
        children: [{ count: 2, name: "dark red" }],
        contains: false,
      },
      allBags
    ),
    126
  );
});
