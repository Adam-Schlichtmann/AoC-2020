export default (active: number[][], value: number[]) =>
  active.some((s) => s.every((v, i) => v === value[i]));
