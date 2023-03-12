// Assuming x,y is the end of the tail
export default (x: number, y: number): [number, number][] => [
  // Head
  [x + 18, y - 1],
  // End of tail
  [x, y],
  // Body on same row as end of tail
  [x + 5, y],
  [x + 6, y],
  [x + 11, y],
  [x + 12, y],
  [x + 17, y],
  [x + 18, y],
  [x + 19, y],
  // Body on row after end of tail
  [x + 1, y + 1],
  [x + 4, y + 1],
  [x + 7, y + 1],
  [x + 10, y + 1],
  [x + 13, y + 1],
  [x + 16, y + 1],
];
