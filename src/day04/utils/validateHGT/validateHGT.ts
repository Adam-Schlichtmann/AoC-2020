export default (value: string) => {
  const uom = value.replace(/[0-9]/g, "");
  const height = value.replace(/[a-z]/g, "");
  if (uom === "cm") {
    return Number.parseInt(height) >= 150 && Number.parseInt(height) <= 193;
  }
  if (uom === "in") {
    return Number.parseInt(height) >= 59 && Number.parseInt(height) <= 76;
  }
  return false;
};
