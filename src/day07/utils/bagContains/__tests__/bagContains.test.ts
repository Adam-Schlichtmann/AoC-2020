import bagContains from "../bagContains";
import test from "ava";

const allBags = [
  {
    name: "light red",
    contains: false,
    children: [
      { count: 1, name: "bright white" },
      { count: 2, name: "muted yellow" },
    ],
  },
  {
    name: "dark orange",
    contains: false,
    children: [
      { count: 3, name: "bright white" },
      { count: 4, name: "muted yellow" },
    ],
  },
  {
    name: "bright white",
    contains: false,
    children: [{ count: 1, name: "shiny gold" }],
  },
  {
    name: "muted yellow",
    contains: false,
    children: [
      { count: 2, name: "shiny gold" },
      { count: 9, name: "faded blue" },
    ],
  },
  {
    name: "shiny gold",
    contains: false,
    children: [
      { count: 1, name: "dark olive" },
      { count: 2, name: "vibrant plum" },
    ],
  },
  {
    name: "dark olive",
    contains: false,
    children: [
      { count: 3, name: "faded blue" },
      { count: 4, name: "dotted black" },
    ],
  },
  {
    name: "vibrant plum",
    contains: false,
    children: [
      { count: 5, name: "faded blue" },
      { count: 6, name: "dotted black" },
    ],
  },
  { name: "faded blue", contains: false, children: [] },
  { name: "dotted black", contains: false, children: [] },
];

test("bagContains tests", async (t) => {
  t.is(
    bagContains([{ name: "dotted black", count: 5 }], allBags, "faded blue"),
    false
  );
  t.is(
    bagContains([{ name: "vibrant plum", count: 5 }], allBags, "vibrant plum"),
    true
  );

  t.is(
    bagContains(
      [
        { count: 1, name: "dark olive" },
        { count: 2, name: "vibrant plum" },
      ],
      allBags,
      "dotted black"
    ),
    true
  );
});
