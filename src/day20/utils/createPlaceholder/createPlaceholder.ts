import { Tile } from "../../Types";

export default (tile: Tile["tile"]) =>
  tile.map((row) => row.replace(/[a-zA-Z]/g, " "));
