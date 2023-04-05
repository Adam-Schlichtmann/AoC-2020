import { Tile2 } from "../../Types";
import getTileSides from "../getTileSides";

export default (tiles: Tile2[]) =>
  tiles.find((tile) => {
    const sides = getTileSides(tile);
    const neighbors = tiles.filter((n) => {
      if (n.id === tile.id) return false;
      const nSides = getTileSides(n);
      return sides.some((s) => nSides.includes(s));
    });
    return neighbors.length === 2;
  });
