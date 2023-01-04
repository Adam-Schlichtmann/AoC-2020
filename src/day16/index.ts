import fs from "fs";

type Rule = {
  name: string;
  ranges: number[][];
  options: number[];
};

const part1 = () => {
  console.log("DAY 16 Part 1");

  const allFileContents = fs.readFileSync("./src/day16/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  const rules: Rule[] = lines
    .filter((line) => /[ a-z]+: [0-9]+-[0-9]+ or [0-9]+-[0-9]+/.test(line))
    .map((line) => ({
      name: line.replace(/: [0-9]+-[0-9]+ or [0-9]+-[0-9]+/g, ""),
      ranges: line
        .replace(/ or /, "|")
        .replace(/[^\-\|0-9]/g, "")
        .split("|")
        .map((r) => r.split("-").map((v) => Number.parseInt(v))),
      options: [],
    }));
  const myTicket: number[] = [];
  const otherTickets: number[][] = [];
  let isOtherTickets = false;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("your ticket:")) {
      myTicket.push(...lines[i + 1].split(",").map((v) => Number.parseInt(v)));
    } else if (lines[i].startsWith("nearby tickets")) {
      isOtherTickets = true;
    } else if (isOtherTickets) {
      otherTickets.push(lines[i].split(",").map((v) => Number.parseInt(v)));
    }
  }

  const invalidValues: number[] = [];
  const validateTicket = (ticket: number[]) =>
    ticket.every((value) => {
      if (
        rules.some((r) =>
          r.ranges.some((range) => value >= range[0] && value <= range[1])
        )
      ) {
        return true;
      }
      invalidValues.push(value);
      return false;
    });

  otherTickets.forEach((t) => validateTicket(t));
  console.log(
    `Error Rate: ${invalidValues.reduce((acc, item) => acc + item, 0)}`
  );
};

const part2 = () => {
  console.log("DAY 16 Part 2");

  const allFileContents = fs.readFileSync("./src/day16/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);
  const rules: Rule[] = lines
    .filter((line) => /[ a-z]+: [0-9]+-[0-9]+ or [0-9]+-[0-9]+/.test(line))
    .map((line) => ({
      name: line.replace(/: [0-9]+-[0-9]+ or [0-9]+-[0-9]+/g, ""),
      ranges: line
        .replace(/ or /, "|")
        .replace(/[^\-\|0-9]/g, "")
        .split("|")
        .map((r) => r.split("-").map((v) => Number.parseInt(v))),
      options: [],
    }));
  const myTicket: number[] = [];
  const otherTickets: number[][] = [];
  let isOtherTickets = false;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("your ticket:")) {
      myTicket.push(...lines[i + 1].split(",").map((v) => Number.parseInt(v)));
    } else if (lines[i].startsWith("nearby tickets")) {
      isOtherTickets = true;
    } else if (isOtherTickets) {
      otherTickets.push(lines[i].split(",").map((v) => Number.parseInt(v)));
    }
  }

  const validateTicket = (ticket: number[]) =>
    ticket.every((value) =>
      rules.some((r) =>
        r.ranges.some((range) => value >= range[0] && value <= range[1])
      )
    );

  const validTickets = otherTickets.filter((t) => validateTicket(t));

  // Build possible options for each index
  rules.forEach((rule) => {
    const options: number[] = Array.from(Array(validTickets[0].length).keys());

    for (let position = 0; position < validTickets[0].length; position++) {
      for (let t = 0; t < validTickets.length; t++) {
        // if one of the ranges is out of range
        if (
          rule.ranges.every(
            (range) =>
              validTickets[t][position] < range[0] ||
              validTickets[t][position] > range[1]
          )
        ) {
          options[position] = -1;
        }
      }
    }
    rule.options = [...options.filter((f) => f >= 0)];
  });

  // Reduce possible options for rule until it resolves
  const used: number[] = [];
  while (rules.some((r) => r.options.length > 1)) {
    rules.forEach((rule) => {
      if (rule.options.length === 1 && !used.includes(rule.options[0])) {
        used.push(rule.options[0]);
      } else if (rule.options.length > 1) {
        rule.options = rule.options.filter((o) => !used.includes(o));
      }
    });
  }

  console.log(
    "Result",
    rules.reduce((acc, item) => {
      if (item.name.startsWith("departure")) {
        return acc * myTicket[item.options[0]];
      }
      return acc;
    }, 1)
  );
};

export default () => {
  part1();
  part2();
};
