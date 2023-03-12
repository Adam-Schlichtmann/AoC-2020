import getMonsterCoords from "../getMonsterCoords";

export default (x: number, y: number, grid: string[]) =>
  getMonsterCoords(x, y).every((c) => grid[c[1]][c[0]] === "#");
