export default (value: string) => {
  const chars = value.split("");
  return chars.reduce((acc, item, i) => {
    if (item === "F" || item === "L") {
      return acc;
    }
    if (item === "B" || item === "R") {
      return acc + 2 ** (chars.length - 1 - i);
    }
    return acc;
  }, 0);
};
