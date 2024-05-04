import { queryAPI, weakMap } from "../100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

console.log(queryAPI(endpoint));
console.log(queryAPI(endpoint));
console.log(queryAPI(endpoint));
console.log(queryAPI(endpoint));