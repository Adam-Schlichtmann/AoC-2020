export default (tile: string[]) => {
  const newTile: string[] = [];
  for (let x = 0; x < tile[0].length; x++) {
    let row = "";
    for (let y = 0; y < tile.length; y++) {
      row = tile[y].charAt(x) + row;
    }
    newTile.push(row);
  }
  return newTile;
};
