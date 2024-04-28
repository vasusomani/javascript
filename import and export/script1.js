//import statement
import { addition } from "./utility.js";
console.log(addition(2, 3));

//import renamed export
import { mul } from "./utility.js";
console.log(mul(5, 2));

//rename import
import { subtraction as diff } from "./utility.js";
console.log(diff(8, 2));

//import default export {Without curly brackets}
import remainder from "./utility.js";
console.log(remainder(5, 2));