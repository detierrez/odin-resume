export function camelToTitleCase(string) {
  const result = string.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export function titleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
