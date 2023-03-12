export default (neighbors: number[]) => {
  if (neighbors.length !== 4) {
    console.log("PANIC NEIGHBORS IS TO BIG");
    return false;
  }
  return (
    neighbors[0] === -1 &&
    neighbors[1] > -1 &&
    neighbors[2] > -1 &&
    neighbors[3] === -1
  );
};
