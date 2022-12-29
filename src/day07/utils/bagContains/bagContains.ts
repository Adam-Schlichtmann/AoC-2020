import { Bag, BagChild } from "../..";

const bagContains = (
  children: BagChild[],
  allBags: Bag[],
  searchFor: string
): boolean =>
  children.some((c) => {
    const bag = allBags.find((b) => b.name === c.name);
    if (!bag) return false;
    if (bag.name === searchFor) return true;
    if (bag.children.length === 0) return false;
    return bagContains(bag.children, allBags, searchFor);
  });

export default bagContains;
