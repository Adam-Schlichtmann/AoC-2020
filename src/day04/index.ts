import fs from "fs";
import {
  validateBYR,
  validateCID,
  validateECL,
  validateEYR,
  validateHCL,
  validateHGT,
  validateIYR,
  validatePID,
} from "./utils";

// Excludes cid
const REQUIRED = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const cleanPassport = (passport: string): string[] =>
  passport.replace(/\s/g, " ").split(" ");

const mapPassport = (parts: string[]) =>
  parts.reduce<Record<string, string>>((acc, item) => {
    const [key, value] = item.split(":");
    return { ...acc, [key]: value };
  }, {});

const validPassport = (passport: Record<string, string>) =>
  REQUIRED.every((key) => Object.keys(passport).some((ikey) => ikey === key));

const part1 = () => {
  console.log("DAY 4 Part 1");

  const allFileContents = fs.readFileSync("./src/day04/input.txt", "utf-8");
  const passports = allFileContents.split(/\r?\n\n/);
  const cleanedPassports = passports.map((m) => mapPassport(cleanPassport(m)));
  const validPassports = cleanedPassports.filter((p) => validPassport(p));
  console.log(`Valid Passports ${validPassports.length}`);
};

const validPassport2 = (passport: Record<string, string>) => {
  console.log("==================");
  console.log("byr:", passport?.byr ?? "", validateBYR(passport?.byr ?? ""));
  console.log("ecl:", passport?.ecl ?? "", validateECL(passport?.ecl ?? ""));
  console.log("eyr:", passport?.eyr ?? "", validateEYR(passport?.eyr ?? ""));
  console.log("hcl:", passport?.hcl ?? "", validateHCL(passport?.hcl ?? ""));
  console.log("hgt:", passport?.hgt ?? "", validateHGT(passport?.hgt ?? ""));
  console.log("iyr:", passport?.iyr ?? "", validateIYR(passport?.iyr ?? ""));
  console.log("pid:", passport?.pid ?? "", validatePID(passport?.pid ?? ""));
  console.log("==================");

  return (
    validateBYR(passport?.byr ?? "") &&
    validateECL(passport?.ecl ?? "") &&
    validateEYR(passport?.eyr ?? "") &&
    validateHCL(passport?.hcl ?? "") &&
    validateHGT(passport?.hgt ?? "") &&
    validateIYR(passport?.iyr ?? "") &&
    validatePID(passport?.pid ?? "")
  );
};

const part2 = () => {
  console.log("DAY 4 Part 2");

  const allFileContents = fs.readFileSync("./src/day04/input.txt", "utf-8");
  const passports = allFileContents.split(/\r?\n\n/);
  const cleanedPassports = passports.map((m) => mapPassport(cleanPassport(m)));
  const validPassports = cleanedPassports.filter((p) => validPassport2(p));
  console.log(`Valid Passports ${validPassports.length}`);
};

export default () => {
  part1();
  part2();
};
