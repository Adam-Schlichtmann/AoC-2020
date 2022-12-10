import day01 from "./src/day01";
import day02 from "./src/day02";
import day03 from "./src/day03";
import day04 from "./src/day04";

const args = process.argv.slice(2);
if (args.length < 1) {
  console.log("Specify a day. EG: yarn day 10");
  process.exit();
} else {
  console.log(`Running for day ${args[0]}`);
  const day = Number.parseInt(args[0]);
  if (Number.isNaN(day)) {
    console.log(`${args[0]} is not a number`);
    process.exit();
  }
  switch (day) {
    case 1: {
      day01();
      break;
    }
    case 2: {
      day02();
      break;
    }
    case 3: {
      day03();
      break;
    }
    case 4: {
      day04();
      break;
    }
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    default: {
      console.log(`UNKNOWN DAY: ${day}`);
    }
  }
}
