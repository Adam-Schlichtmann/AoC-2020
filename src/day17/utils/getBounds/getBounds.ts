import { exit } from "process";

export default (active: number[][]) => {
  const bounds: [number, number][] = Array(active[0].length).fill([0, 0]);
  // max is compared with +2
  // +1 for padding the edge of the cube
  // +1 for the comparison in the for loop
  // min is compared with -1
  // -1 for padding the edge of the cube
  for (let i = 0; i < active[0].length; i++) {
    for (let j = 0; j < active.length; j++) {
      if (active[j][i] - 1 < bounds[i][0]) {
        bounds[i][0] = active[j][i] - 1;
      }
      if (active[j][i] + 2 > bounds[i][1]) {
        bounds[i][1] = active[j][i] + 2;
      }
    }
  }
  return bounds;
};
