export default (grid: string[], edge: 0 | 1 | 2 | 3): string => {
  // Top
  if (edge === 0) {
    return grid[0];
  }
  if (edge === 1) {
    return grid.map((row) => row[row.length - 1]).join("");
  }
  if (edge === 2) {
    return grid[grid.length - 1];
  }
  if (edge === 3) {
    return grid.map((row) => row[0]).join("");
  }
  return "";
};
