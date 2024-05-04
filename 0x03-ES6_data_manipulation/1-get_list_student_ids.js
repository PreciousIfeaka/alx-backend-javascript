export default function getListStudentsIds(obj) {
  const result = [];
  if (!Array.isArray(obj)) {
    return result;
  }
  /* eslint-disable */
  obj.map((data) => {
    result.push(data.id);
  });
  /* eslint-enable */
  return result;
}
