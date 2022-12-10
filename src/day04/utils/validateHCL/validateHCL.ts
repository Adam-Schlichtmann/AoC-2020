export default (value: string) => {
  if (!value.startsWith("#") || value.length !== 7) return false;
  const masked = value.replace(/[^0-9a-f]/g, "");
  return masked.length === 6;
};
