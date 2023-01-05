import findClosingIndex from "../findClosingIndex";

const evaluateV2 = (problem: string[]): number => {
  let simplifiedProblem: string[] = problem;

  while (simplifiedProblem.includes("(")) {
    const current = simplifiedProblem.findIndex((c) => c === "(");

    const closing = findClosingIndex(simplifiedProblem.slice(current + 1));

    const value = evaluateV2(
      simplifiedProblem.slice(current + 1, closing + current)
    );
    simplifiedProblem = [
      ...simplifiedProblem.slice(0, current),
      `${value}`,
      ...simplifiedProblem.slice(current + closing + 1),
    ];
  }

  while (simplifiedProblem.includes("+")) {
    const current = simplifiedProblem.findIndex((c) => c === "+");

    simplifiedProblem = [
      ...simplifiedProblem.slice(0, current - 1),
      `${
        Number.parseInt(simplifiedProblem[current - 1]) +
        Number.parseInt(simplifiedProblem[current + 1])
      }`,
      ...simplifiedProblem.slice(current + 2),
    ];
  }

  return eval(simplifiedProblem.join(""));
};

export default evaluateV2;
