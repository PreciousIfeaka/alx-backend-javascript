export default function createIteratorObject(report) {
  const newArray = [];

  for (const arr of Object.values(report.allEmployees)) {
    newArray.push(...arr);
  }
  return newArray;
}
