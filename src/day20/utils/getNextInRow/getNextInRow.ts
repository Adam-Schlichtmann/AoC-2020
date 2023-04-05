import { Tile2 } from "../../Types";
import getTileSides from "../getTileSides";

export default (grid: string[][], currentRow: number, tiles: Tile2[]) => {
  const side = grid[currentRow].map((r) => r[r.length - 1]).join("");
  return tiles.find((t) => getTileSides(t).includes(side));
};
