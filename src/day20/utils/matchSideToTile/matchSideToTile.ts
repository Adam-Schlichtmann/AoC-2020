import { Tile2 } from "../../Types";
import getTileSides from "../getTileSides";

export default (tile: Tile2, tiles: Tile2[]) => {
  const sides = [
    // Top
    tile.tile[0],
    // Left
    tile.tile.map((t) => t[t.length - 1]).join(""),
    // Bottom
    tile.tile[tile.tile.length - 1],
    // Right
    tile.tile.map((t) => t[0]).join(""),
  ];
  const matches = sides.map((s) => {
    const sideMatch = tiles.find((n) => {
      if (n.id === tile.id) return false;
      const nSides = getTileSides(n);
      return nSides.includes(s);
    });
    return sideMatch?.id ?? -1;
  });
  return matches;
};
