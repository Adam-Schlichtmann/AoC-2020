import fs from "fs";

const part1 = () => {
  console.log("DAY 13 Part 1");

  const allFileContents = fs.readFileSync("./src/day13/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  const earliestDeparture = Number.parseInt(lines[0]);
  const buses = lines[1].split(",").reduce<number[]>((acc, item) => {
    if (item !== "x" && !Number.isNaN(Number.parseInt(item)))
      return [...acc, Number.parseInt(item)];
    return acc;
  }, []);
  let minDelay = earliestDeparture;
  let busID = -1;
  buses.forEach((bus) => {
    let nextBusTime = 0;
    while (nextBusTime < earliestDeparture) {
      nextBusTime += bus;
    }

    if (nextBusTime - earliestDeparture < minDelay) {
      minDelay = nextBusTime - earliestDeparture;
      busID = bus;
    }
  });
  console.log(`Min Delay: ${minDelay} | Bus ID: ${busID}`);
  console.log(`Result: ${minDelay * busID}`);
};

const part2 = () => {
  console.log("DAY 13 Part 2");

  const allFileContents = fs.readFileSync("./src/day13/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  const schedule = lines[1].split(",");

  // increase by in each iteration
  let step = 1;
  let timestamp = 0;

  schedule.forEach((bus, i) => {
    if (bus === "x") return;
    const id = Number.parseInt(bus);
    while (true) {
      timestamp += step;
      // Continue stepping until the number is valid for the given bus id
      if ((timestamp + i) % id === 0) {
        step = step * id;
        break;
      }
    }
  });
  console.log("Next Timestamp:", timestamp);
};

export default () => {
  part1();
  part2();
};
