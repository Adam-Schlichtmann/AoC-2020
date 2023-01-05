import findClosingIndex from "../findClosingIndex";

const evaluate = (problem: string[]): number => {
  let sum = 0;

  for (let i = 0; i < problem.length; i++) {
    if (!Number.isNaN(Number.parseInt(problem[i]))) {
      if (i === 0) {
        sum += Number.parseInt(problem[i]);
      } else if (problem[i - 1] === "+") {
        sum += Number.parseInt(problem[i]);
      } else if (problem[i - 1] === "*") {
        sum *= Number.parseInt(problem[i]);
      }
    } else if (problem[i] === "(") {
      const closing = findClosingIndex(problem.slice(i + 1));

      const value = evaluate(problem.slice(i + 1, closing + i));

      if (i === 0) {
        sum += value;
      } else if (problem[i - 1] === "+") {
        sum += value;
      } else if (problem[i - 1] === "*") {
        sum *= value;
      }
      i += closing;
    }
  }
  return sum;
};

export default evaluate;
