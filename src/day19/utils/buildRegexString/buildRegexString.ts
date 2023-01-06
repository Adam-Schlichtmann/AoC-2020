const buildRegexString = (
  rule: number,
  rules: Record<number, string | number[][]>,
  limit = 15
): string => {
  const currentRule = rules[rule];
  if (!limit) return "";
  if (typeof currentRule === "string") return currentRule;
  return `(${currentRule
    .map((subRules) =>
      subRules.map((sub) => buildRegexString(sub, rules, limit - 1)).join("")
    )
    .join("|")})`;
};
export default buildRegexString;
