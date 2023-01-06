/**
 * My original attempt that almost works and is more brute force
 */
const buildPossibilities = (
  rule: number,
  rules: Record<number, string | number[][]>
): string[] => {
  const currentRule = rules[rule];
  if (typeof currentRule === "string") return [currentRule];
  return currentRule
    .map<string[]>((ruleOptions) => {
      const subRule = ruleOptions.reduce<string[]>((acc, option) => {
        const result = buildPossibilities(option, rules);
        if (!acc.length) return result;
        if (!result.length) return acc;
        return [...result.map((r) => acc.map((o) => o + r)).flat()];
      }, []);
      return subRule;
    })
    .flat();
};

export default buildPossibilities;
