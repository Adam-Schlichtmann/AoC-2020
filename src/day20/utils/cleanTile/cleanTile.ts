import { Tile } from "../../Types";

// Removes the border of a tile
export default (tile: Tile): string[] =>
  tile.tile
    .map((row) => row.slice(1, row.length - 1))
    .slice(1, tile.tile.length - 1);
