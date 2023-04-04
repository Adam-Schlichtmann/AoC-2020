import day01 from "./src/day01";
import day02 from "./src/day02";
import day03 from "./src/day03";
import day04 from "./src/day04";
import day05 from "./src/day05";
import day06 from "./src/day06";
import day07 from "./src/day07";
import day08 from "./src/day08";
import day09 from "./src/day09";
import day10 from "./src/day10";
import day11 from "./src/day11";
import day12 from "./src/day12";
import day13 from "./src/day13";
import day14 from "./src/day14";
import day15 from "./src/day15";
import day16 from "./src/day16";
import day17 from "./src/day17";
import day18 from "./src/day18";
import day19 from "./src/day19";
import day20 from "./src/day20";
import day21 from "./src/day21";
import day22 from "./src/day22";
import day23 from "./src/day23";
import day24 from "./src/day24";

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
    case 5: {
      day05();
      break;
    }
    case 6: {
      day06();
      break;
    }
    case 7: {
      day07();
      break;
    }
    case 8: {
      day08();
      break;
    }
    case 9: {
      day09();
      break;
    }
    case 10: {
      day10();
      break;
    }
    case 11: {
      day11();
      break;
    }
    case 12: {
      day12();
      break;
    }
    case 13: {
      day13();
      break;
    }
    case 14: {
      day14();
      break;
    }
    case 15: {
      day15();
      break;
    }
    case 16: {
      day16();
      break;
    }
    case 17: {
      day17();
      break;
    }
    case 18: {
      day18();
      break;
    }
    case 19: {
      day19();
      break;
    }
    case 20: {
      day20();
      break;
    }
    case 21: {
      day21();
      break;
    }
    case 22: {
      day22();
      break;
    }
    case 23: {
      day23();
      break;
    }
    case 24: {
      day24();
      break;
    }
    case 25:
    default: {
      console.log(`UNKNOWN DAY: ${day}`);
    }
  }
}
