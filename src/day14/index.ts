import fs from "fs";

const part1 = () => {
  console.log("DAY 14 Part 1");

  const allFileContents = fs.readFileSync("./src/day14/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);

  const memory: Record<number, number> = {};
  let mask = "";
  lines.forEach((line) => {
    if (line.startsWith("mask =")) {
      mask = line.replace(/[^X,0,1]/g, "");
      console.log("new Mask", mask);
    } else {
      const parts = line.split(" = ");
      const address = Number.parseInt(parts[0].replace(/[^0-9]/g, ""));
      let value = Number.parseInt(parts[1].replace(/[^0-9]/g, "")).toString(2);
      while (value.length !== mask.length) {
        value = "0" + value;
      }

      let maskedValue = "";
      for (let i = 0; i < value.length; i++) {
        if (mask[i] === "X") {
          maskedValue += value[i];
        } else {
          maskedValue += mask[i];
        }
      }
      memory[address] = Number.parseInt(maskedValue, 2);
    }
  });
  console.log(
    `Sum of memory: ${Object.values(memory).reduce(
      (acc, item) => acc + item,
      0
    )}`
  );
};

const getPermutations = (n: number) => {
  const options = [];

  for (let i = 0; i < 2 ** n; i++) {
    let current = i.toString(2);
    while (current.length < n) {
      current = "0" + current;
    }
    options.push(current.split(""));
  }
  return options;
};

const part2 = () => {
  console.log("DAY 14 Part 2");

  const allFileContents = fs.readFileSync("./src/day14/input.txt", "utf-8");
  const lines = allFileContents.split(/\r?\n/).filter((f) => !!f);

  const memory: Record<number, number> = {};
  let mask = "";
  lines.forEach((line) => {
    if (line.startsWith("mask =")) {
      mask = line.replace(/[^X,0,1]/g, "");
      console.log("new Mask", mask);
    } else {
      const parts = line.split(" = ");
      let address = Number.parseInt(parts[0].replace(/[^0-9]/g, "")).toString(
        2
      );
      const value = Number.parseInt(parts[1].replace(/[^0-9]/g, ""));
      while (address.length !== mask.length) {
        address = "0" + address;
      }

      let maskedAddress = "";
      let xs = 0;
      for (let i = 0; i < address.length; i++) {
        if (mask[i] === "X") {
          maskedAddress += "X";
          xs++;
        } else if (mask[i] === "1") {
          maskedAddress += "1";
        } else {
          maskedAddress += address[i];
        }
      }
      const options = getPermutations(xs);
      options.forEach((option) => {
        let finalAddress = maskedAddress;
        option.forEach((o) => {
          finalAddress = finalAddress.replace(/X/, o);
        });

        memory[Number.parseInt(finalAddress, 2)] = value;
      });
    }
  });
  console.log(
    `Sum of memory: ${Object.values(memory).reduce(
      (acc, item) => acc + item,
      0
    )}`
  );
};

export default () => {
  part1();
  part2();
};
