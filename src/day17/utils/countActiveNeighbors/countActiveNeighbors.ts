import customHas from "../customHas";

export default (coords: number[], active: number[][]) => {
  let count = 0;
  const shouldUseW = coords.length === 4;
  for (let dz = -1; dz < 2; dz++) {
    for (let dy = -1; dy < 2; dy++) {
      for (let dx = -1; dx < 2; dx++) {
        for (let dw = shouldUseW ? -1 : 0; dw < (shouldUseW ? 2 : 1); dw++) {
          if (dz !== 0 || dy !== 0 || dx !== 0 || dw !== 0) {
            const checkCoords = [
              coords[0] + dx,
              coords[1] + dy,
              coords[2] + dz,
            ];

            if (shouldUseW) checkCoords.push(coords[3] + dw);
            if (customHas(active, checkCoords)) {
              count++;
            }
          }
        }
      }
    }
  }
  return count;
};
