export default function hasValuesFromArray(set, arrs) {
  return arrs.reduce((prev, curr) => prev && set.has(curr), true);
}
