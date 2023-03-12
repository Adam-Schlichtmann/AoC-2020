export default (neighbors: number[]) => {
  const last = neighbors[neighbors.length - 1];
  neighbors.unshift(last);
  return neighbors.slice(0, neighbors.length - 1);
};
