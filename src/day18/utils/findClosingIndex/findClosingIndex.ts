/**
 * Should exclude the starting paren you are trying to find the match for
 */
export default (problem: string[]) => {
  let depth = 1;
  let i = 0;
  while (depth > 0) {
    if (problem[i] === "(") {
      depth++;
    } else if (problem[i] === ")") {
      depth--;
    }
    i++;
  }
  return i;
};
