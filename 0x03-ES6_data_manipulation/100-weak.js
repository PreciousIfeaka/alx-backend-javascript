export const weakMap = new WeakMap();
let i = 0;

export function queryAPI(endpoint) {
  if (i < 5) {
    i += 1;
    weakMap.set(endpoint, i);

    return i;
  }
  throw new Error('Endpoint load is high');
}
