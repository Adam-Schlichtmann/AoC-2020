export default (value: string) => {
  const masked = value.replace(/[^0-9]/g, "");
  return masked.length === value.length && masked.length === 9;
};
