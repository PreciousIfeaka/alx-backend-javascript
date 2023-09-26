export default function returnHowManyArguments(...varguments) {
  let total = 0;
  for (const arg of varguments) {
    total += 1;
  }
  /* eslint-enable no-unused-vars */

  return total;
}
