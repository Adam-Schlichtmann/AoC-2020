import fs from "fs";

const part1 = () => {
  console.log("DAY 12 Part 1");

  const allFileContents = fs.readFileSync("./src/day12/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  let heading = 90; // Starts facing east in degrees
  const position = [0, 0]; // [X, Y]
  lines.forEach((line) => {
    const value = Number.parseInt(line.replace(/[^0-9]/, ""));
    if (line.startsWith("L") || line.startsWith("R")) {
      const delta = (line.startsWith("L") ? -1 : 1) * value;
      heading += delta;
      if (heading < 0) {
        heading += 360;
      }
      if (heading >= 360) {
        heading -= 360;
      }
    } else if (line.startsWith("N")) {
      position[1] += value;
    } else if (line.startsWith("S")) {
      position[1] -= value;
    } else if (line.startsWith("E")) {
      position[0] += value;
    } else if (line.startsWith("W")) {
      position[0] -= value;
    } else if (line.startsWith("F")) {
      if (heading === 0) {
        position[1] += value;
      } else if (heading === 180) {
        position[1] -= value;
      } else if (heading === 90) {
        position[0] += value;
      } else if (heading === 270) {
        position[0] -= value;
      } else {
        console.log("BAD BAD BAD");
      }
    }
  });
  console.log(
    "Manhattan Distance:",
    Math.abs(position[0]) + Math.abs(position[1])
  );
};

const part2 = () => {
  console.log("DAY 12 Part 2");

  const allFileContents = fs.readFileSync("./src/day12/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  // const lines = ["F10", "N3", "F7", "R90", "F11"];
  const ship = [0, 0]; // [X, Y]
  const waypoint = [10, 1]; // [X, Y]
  lines.forEach((line) => {
    const value = Number.parseInt(line.replace(/[^0-9]/, ""));
    if (line.startsWith("L") || line.startsWith("R")) {
      // Always rotate clockwise
      const delta = line.startsWith("L") ? 360 - value : value;

      let temp = [...waypoint];
      if (delta === 90) {
        waypoint[0] = temp[1];
        waypoint[1] = -temp[0];
      } else if (delta === 180) {
        waypoint[0] = -temp[0];
        waypoint[1] = -temp[1];
      } else if (delta === 270) {
        waypoint[0] = -temp[1];
        waypoint[1] = temp[0];
      }
    } else if (line.startsWith("N")) {
      waypoint[1] += value;
    } else if (line.startsWith("S")) {
      waypoint[1] -= value;
    } else if (line.startsWith("E")) {
      waypoint[0] += value;
    } else if (line.startsWith("W")) {
      waypoint[0] -= value;
    } else if (line.startsWith("F")) {
      ship[0] += waypoint[0] * value;
      ship[1] += waypoint[1] * value;
    }
  });
  console.log("Manhattan Distance:", Math.abs(ship[0]) + Math.abs(ship[1]));

  // To high 26233
};

export default () => {
  part1();
  part2();
};
