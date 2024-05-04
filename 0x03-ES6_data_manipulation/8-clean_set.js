export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  const arr = [];
  set.forEach((setValue) => {
    if (typeof setValue === 'string' && setValue.startsWith(startString)) {
      const sliceIndex = setValue.indexOf(startString[startString.length - 1]);
      arr.push(setValue.slice(sliceIndex + 1));
    }
  });
  return arr.join('-');
}
