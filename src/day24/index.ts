import fs from "fs";

type PathMatrix = {
  w: number;
  e: number;
  nw: number;
  ne: number;
  sw: number;
  se: number;
};
/**
 * as [dq,ds,dr]
 */
const DELTAS = [
  [1, 0, -1],
  [1, -1, 0],
  [0, -1, 1],
  [-1, 0, 1],
  [-1, 1, 0],
  [0, 1, -1],
];

const part1 = () => {
  console.log("DAY 24 Part 1");

  const allFileContents = fs.readFileSync("./src/day24/input.txt", "utf-8");
  const paths = allFileContents
    .split(/\r?\n/)
    .filter((f) => !!f)
    .map((line) => {
      const instructions: string[] = [];
      for (let i = 0; i < line.length; i++) {
        if (line[i] === "w" || line[i] === "e") {
          instructions.push(line[i]);
        } else {
          instructions.push(`${line[i]}${line[i + 1]}`);
          i++;
        }
      }
      return instructions;
    });

  const state: Record<string, boolean> = {};

  paths.forEach((p) => {
    let q = 0;
    let r = 0;
    let s = 0;
    p.forEach((instruction) => {
      // Using red blob games cube coordinate system write up as a guide
      if (instruction === "w") {
        q--;
        s++;
      } else if (instruction === "e") {
        q++;
        s--;
      } else if (instruction === "se") {
        r++;
        s--;
      } else if (instruction === "sw") {
        q--;
        r++;
      } else if (instruction === "ne") {
        q++;
        r--;
      } else if (instruction === "nw") {
        s++;
        r--;
      }
    });
    if (q + s + r !== 0) {
      console.log("q+r+s should equal 0", q, r, s);
    }
    state[`${q}-${s}-${r}`] = !state[`${q}-${s}-${r}`];
  });

  console.log("Answer", Object.values(state).filter((f) => !!f).length);
};

const makeKey = (q: number, s: number, r: number) => `${q}x${s}x${r}`;
const parseKey = (key: string) => {
  const [sq, ss, sr] = key.split("x");
  const q = Number.parseInt(sq);
  const s = Number.parseInt(ss);
  const r = Number.parseInt(sr);
  return [q, s, r];
};

const part2 = () => {
  console.log("DAY 24 Part 2");

  const allFileContents = fs.readFileSync("./src/day24/input.txt", "utf-8");
  const paths = allFileContents
    .split(/\r?\n/)
    .filter((f) => !!f)
    .map((line) => {
      const instructions: string[] = [];
      for (let i = 0; i < line.length; i++) {
        if (line[i] === "w" || line[i] === "e") {
          instructions.push(line[i]);
        } else {
          instructions.push(`${line[i]}${line[i + 1]}`);
          i++;
        }
      }
      return instructions;
    });

  const state: Record<string, boolean> = {};

  paths.forEach((p) => {
    let q = 0;
    let r = 0;
    let s = 0;
    p.forEach((instruction) => {
      // Using red blob games cube coordinate system write up as a guide
      if (instruction === "w") {
        q--;
        s++;
      } else if (instruction === "e") {
        q++;
        s--;
      } else if (instruction === "se") {
        r++;
        s--;
      } else if (instruction === "sw") {
        q--;
        r++;
      } else if (instruction === "ne") {
        q++;
        r--;
      } else if (instruction === "nw") {
        s++;
        r--;
      }
    });
    if (q + s + r !== 0) {
      console.log("q+r+s should equal 0", q, r, s);
    }
    state[makeKey(q, s, r)] = !state[makeKey(q, s, r)];
    // Add neighbors in
    DELTAS.forEach(([dq, ds, dr]) => {
      if (!state[makeKey(q + dq, s + ds, r + dr)]) {
        state[makeKey(q + dq, s + ds, r + dr)] = false;
      }
    });
  });

  for (let i = 0; i < 100; i++) {
    let tempState = { ...state };
    Object.entries(tempState).forEach(([key, value]) => {
      const [q, s, r] = parseKey(key);

      let neighborCount = 0;
      DELTAS.forEach(([dq, ds, dr]) => {
        if (tempState[makeKey(q + dq, s + ds, r + dr)]) {
          neighborCount++;
        }
        // Make sure all neighbors exist
        if (!state[makeKey(q + dq, s + ds, r + dr)]) {
          state[makeKey(q + dq, s + ds, r + dr)] = false;
        }
      });
      if (value && (neighborCount === 0 || neighborCount > 2)) {
        state[makeKey(q, s, r)] = false;
      } else if (!value && neighborCount === 2) {
        state[makeKey(q, s, r)] = true;
      }
    });
  }

  console.log("Answer", Object.values(state).filter((f) => !!f).length);
};

export default () => {
  part1();
  part2();
};
