import { Tile2 } from "../../Types";

export default (tile: Tile2) => [
  // Top
  tile.tile[0],
  tile.tile[0].split("").reverse().join(""),
  // Left
  tile.tile.map((t) => t[t.length - 1]).join(""),
  tile.tile
    .map((t) => t[t.length - 1])
    .reverse()
    .join(""),
  // Bottom
  tile.tile[tile.tile.length - 1],
  tile.tile[tile.tile.length - 1].split("").reverse().join(""),
  // Right
  tile.tile.map((t) => t[0]).join(""),
  tile.tile
    .map((t) => t[0])
    .reverse()
    .join(""),
];
