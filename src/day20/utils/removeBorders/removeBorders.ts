export default (str: string, tileWidth: number) =>
  str
    .split("")
    .map((a, i) => {
      if (i === 0) {
        return "";
      }
      if (i === 1) return a;
      if (i === str.length - 1) {
        return "";
      }
      if (i === str.length - 2) {
        return a;
      }
      return i % tileWidth === 9 || i % tileWidth === 0 ? "" : a;
    })
    .join("");
