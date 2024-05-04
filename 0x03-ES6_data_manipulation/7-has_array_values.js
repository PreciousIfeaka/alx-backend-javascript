export default function hasValuesFromArray(set, array) {
  const arr = [];
  array.forEach((value) => arr.push(set.has(value)));

  if ((new Set(arr)).has(false)) {
    return false;
  } return true;
}
