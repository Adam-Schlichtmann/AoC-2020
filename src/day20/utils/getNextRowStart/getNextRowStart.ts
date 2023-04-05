import { Tile2 } from "../../Types";
import getTileSides from "../getTileSides";

export default (grid: string[][], tiles: Tile2[]) => {
  const lastRow = grid[grid.length - 1][grid[grid.length - 1].length - 1];
  return tiles.find((t) => getTileSides(t).find((s) => lastRow.startsWith(s)));
};
