import fs from "fs";
import { exit } from "process";
import { parseChildBag, sumChildren } from "./utils";
import search from "./utils/bagContains/bagContains";

export type BagChild = {
  name: string;
  count: number;
};

export type Bag = {
  name: string;
  children: BagChild[];
  contains: boolean;
};

const SEARCH_FOR = "shiny gold";
const part1 = () => {
  console.log("DAY 7 Part 1");

  const allFileContents = fs.readFileSync("./src/day07/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);

  const bags = lines.map<Bag>((l) => {
    const [parent, rawChildren] = l.split(" bags contain ");

    return {
      name: parent,
      children: rawChildren.includes("no other bags")
        ? []
        : rawChildren.split(",").map((c) => parseChildBag(c)),
      contains: false,
    };
  });

  const updatedBags = bags.map((bag) => ({
    ...bag,
    contains: search(bag.children, bags, SEARCH_FOR),
  }));

  console.log(
    `${updatedBags.filter((b) => b.contains).length} bags contain ${SEARCH_FOR}`
  );
};

const part2 = () => {
  console.log("DAY 7 Part 2");

  const allFileContents = fs.readFileSync("./src/day07/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);

  const bags = lines.map<Bag>((l) => {
    const [parent, rawChildren] = l.split(" bags contain ");

    return {
      name: parent,
      children: rawChildren.includes("no other bags")
        ? []
        : rawChildren.split(",").map((c) => parseChildBag(c)),
      contains: false,
    };
  });

  const shinyGold = bags.find((b) => b.name === SEARCH_FOR);
  if (!shinyGold) {
    console.log("NO SHINY GOLD BAG!!!");
    exit();
  }

  console.log(`${SEARCH_FOR} contains ${sumChildren(shinyGold, bags)} bags`);
};

export default () => {
  part1();
  part2();
};
