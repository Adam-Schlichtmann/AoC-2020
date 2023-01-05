export default (active: number[][]) => {
  const bounds: [number, number][] = Array(active[0].length)
    .fill(0)
    .map(() => [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]);
  // max is compared with +2
  // +1 for padding the edge of the cube
  // +1 for the comparison in the for loop
  // min is compared with -1
  // -1 for padding the edge of the cube
  for (let i = 0; i < active.length; i++) {
    for (let p = 0; p < active[0].length; p++) {
      if (active[i][p] - 1 < bounds[p][0]) {
        bounds[p][0] = active[i][p] - 1;
      }
      if (active[i][p] + 2 > bounds[p][1]) {
        bounds[p][1] = active[i][p] + 2;
      }
    }
  }
  return bounds;
};
