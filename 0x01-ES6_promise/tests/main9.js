import guardrail from '../9-try.js';
import divideFunction from '../8-try.js';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));