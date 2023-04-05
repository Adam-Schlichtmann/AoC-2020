export default (row: string, i: number) => {
  if (i > row.length - 1) return row;
  return row.substring(0, i) + "O" + row.substring(i + 1);
};
