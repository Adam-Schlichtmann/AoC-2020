import fs from "fs";

const findTrees = (grid: string[][], stepX: number, stepY: number) => {
  let x = 0;
  let y = 0;
  let trees = 0;

  while (y < grid.length) {
    if (grid[y][x % grid[y].length] === "#") {
      trees += 1;
    }
    // Step
    x += stepX;
    y += stepY;
  }
  return trees;
};

const part1 = () => {
  console.log("DAY 3 Part 1");

  const allFileContents = fs.readFileSync("./src/day03/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  const grid = lines.map((line) => line.split(""));
  const trees = findTrees(grid, 3, 1);
  console.log(`Trees: ${trees}`);
};

const part2 = () => {
  console.log("DAY 3 Part 2");

  const allFileContents = fs.readFileSync("./src/day03/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  const grid = lines.map((line) => line.split(""));
  const trees1 = findTrees(grid, 1, 1);
  const trees2 = findTrees(grid, 3, 1);
  const trees3 = findTrees(grid, 5, 1);
  const trees4 = findTrees(grid, 7, 1);
  const trees5 = findTrees(grid, 1, 2);
  const result = trees1 * trees2 * trees3 * trees4 * trees5;
  console.log(`Result: ${result}`);
};

export default () => {
  part1();
  part2();
};
