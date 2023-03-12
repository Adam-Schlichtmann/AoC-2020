import { Tile } from "../../Types";

export default (currentTile: Tile, allTiles: Tile[]): Tile => {
  const neighbors = Array(4).fill(-1);
  currentTile.sides.forEach((side, sideIndex) => {
    const neighbor = allTiles.find(
      (t) =>
        t.id !== currentTile.id &&
        (t.sides.includes(side) ||
          t.sides.includes(side.split("").reverse().join("")))
    );

    if (neighbor) neighbors[(sideIndex + 2) % 4] = neighbor.id;
  });

  return { ...currentTile, neighbors };
};
