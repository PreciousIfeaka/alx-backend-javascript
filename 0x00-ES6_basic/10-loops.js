export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  const newArray = [...array];
  for (const idx of array) {
    newArray[index] = appendString + idx;
    index += 1;
  }

  return newArray;
}
