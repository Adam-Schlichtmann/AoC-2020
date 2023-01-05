import countActiveNeighbors from "../countActiveNeighbors";
import customHas from "../customHas";
import getBounds from "../getBounds";

export default (active: number[][]): number[][] => {
  const bounds = getBounds(active);
  const next: number[][] = [];
  const shouldUseW = bounds.length === 4;

  for (let b = 0; b < bounds.length; b++) {
    for (let x = bounds[0][0]; x < bounds[0][1]; x++) {
      for (let y = bounds[1][0]; y < bounds[1][1]; y++) {
        for (let z = bounds[2][0]; z < bounds[2][1]; z++) {
          for (
            let w = shouldUseW ? bounds[3][0] : 0;
            w < (shouldUseW ? bounds[3][1] : 1);
            w++
          ) {
            const coords = [x, y, z];
            if (shouldUseW) coords.push(w);
            const activeCount = countActiveNeighbors(coords, active);

            if (
              customHas(active, coords) &&
              (activeCount === 2 || activeCount === 3) &&
              !customHas(next, coords)
            ) {
              next.push(coords);
            } else if (
              !customHas(active, coords) &&
              activeCount === 3 &&
              !customHas(next, coords)
            ) {
              next.push(coords);
            }
          }
        }
      }
    }
  }
  return next;
};
