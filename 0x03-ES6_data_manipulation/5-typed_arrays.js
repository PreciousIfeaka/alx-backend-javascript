export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw Error('Position outside range');
  }

  const intLetView = new DataView(new ArrayBuffer(length));
  intLetView.setInt8(position, value);
  return intLetView;
}
