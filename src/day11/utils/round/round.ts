export default (map: string[][]): [string[][], boolean] => {
  const validCoords = (y: number, x: number): boolean =>
    y >= 0 && y < map.length && x >= 0 && x < map[y].length;

  const shouldSwitch = (y: number, x: number) => {
    let empty = 0;
    let occupied = 0;
    for (let dy = -1; dy < 2; dy++) {
      for (let dx = -1; dx < 2; dx++) {
        if (dy !== 0 || dx !== 0) {
          if (validCoords(y + dy, x + dx) && map[y + dy][x + dx] === "L")
            empty++;
          if (validCoords(y + dy, x + dx) && map[y + dy][x + dx] === "#")
            occupied++;
        }
      }
    }
    return (
      (map[y][x] === "L" && occupied === 0) ||
      (map[y][x] === "#" && occupied >= 4)
    );
  };
  let change = false;
  // Sort of dirty way to deep copy array
  const newMap: string[][] = JSON.parse(JSON.stringify(map));
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if ((map[y][x] === "L" || map[y][x] === "#") && shouldSwitch(y, x)) {
        change = true;
        newMap[y][x] = map[y][x] === "L" ? "#" : "L";
      }
    }
  }

  return [newMap, change];
};
