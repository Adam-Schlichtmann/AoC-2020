export default (grid: string[]) => {
  let newGrid: string[] = [];
  for (let y = 0; y < grid.length; y++) {
    if (y === 0) {
      newGrid = grid[y].split("");
    } else {
      const oldRow = grid[y].split("");
      newGrid = newGrid.map((row, i) => oldRow[i] + row);
    }
  }
  return newGrid;
};
