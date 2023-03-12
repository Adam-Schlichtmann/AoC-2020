export default (grid: string[]) => {
  const newGrid: string[] = [];
  grid.forEach((row) => {
    newGrid.push(row.split("").reverse().join(""));
  });

  return newGrid;
};
