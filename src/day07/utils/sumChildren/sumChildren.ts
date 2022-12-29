import { Bag } from "../..";

const sumChildren = (bag: Bag, allBags: Bag[]): number =>
  bag.children.reduce((acc, item) => {
    const child = allBags.find((b) => b.name === item.name);
    if (!child) return acc;
    if (child.children.length === 0) return acc + item.count;
    return acc + item.count + item.count * sumChildren(child, allBags);
  }, 0);

export default sumChildren;
