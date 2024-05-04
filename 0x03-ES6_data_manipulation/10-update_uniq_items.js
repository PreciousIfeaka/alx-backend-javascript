export default function updateUniqueItems(map) {
  try {
    for (const [key, value] of map) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
    return map;
  } catch (error) {
    throw Error('Cannot Process');
  }
}
