import { BagChild } from "../..";

export default (child: string): BagChild => {
  const [count, ...rest] = child.trim().split(" ");
  const name = rest.slice(0, rest.length - 1).join(" ");
  return {
    count: Number.parseInt(count),
    name,
  };
};
