import fs from "fs";
import { buildRegexString } from "./utils";

const part1 = () => {
  console.log("DAY 19 Part 1");

  const allFileContents = fs.readFileSync("./src/day19/inputP1.txt", "utf-8");
  const [rawRules, messages] = allFileContents.split("\n\n");

  const rules: Record<number, string | number[][]> = {};
  rawRules
    .split(/\r?\n/)
    .filter((f) => !!f)
    .forEach((rule) => {
      if (/[0-9]+:/.test(rule)) {
        const [id, contents] = rule.split(":");
        const parsedID = Number.parseInt(id);
        if (contents.includes('"')) {
          rules[parsedID] = contents.replace(/[^a-b]/g, "");
        } else {
          const options = contents.split("|");
          rules[parsedID] = options.map<number[]>((o) =>
            o
              .split(" ")
              .filter((f) => !!f)
              .map((o) => Number.parseInt(o))
          );
        }
      }
    });

  const parsedMessages = messages.split(/\r?\n/);
  const regex = new RegExp(`^${buildRegexString(0, rules)}$`);
  const valid = parsedMessages.filter((message) => regex.test(message));
  console.log(`${valid.length} valid messages`);
};

const part2 = () => {
  console.log("DAY 19 Part 2");
  const allFileContents = fs.readFileSync("./src/day19/inputP2.txt", "utf-8");
  const [rawRules, messages] = allFileContents.split("\n\n");

  const rules: Record<number, string | number[][]> = {};
  rawRules
    .split(/\r?\n/)
    .filter((f) => !!f)
    .forEach((rule) => {
      if (/[0-9]+:/.test(rule)) {
        const [id, contents] = rule.split(":");
        const parsedID = Number.parseInt(id);
        if (contents.includes('"')) {
          rules[parsedID] = contents.replace(/[^a-b]/g, "");
        } else {
          const options = contents.split("|");
          rules[parsedID] = options.map<number[]>((o) =>
            o
              .split(" ")
              .filter((f) => !!f)
              .map((o) => Number.parseInt(o))
          );
        }
      }
    });

  const parsedMessages = messages.split(/\r?\n/);
  const regex = new RegExp(`^${buildRegexString(0, rules)}$`);
  const valid = parsedMessages.filter((message) => regex.test(message));
  console.log(`${valid.length} valid messages`);
};

export default () => {
  part1();
  part2();
};
