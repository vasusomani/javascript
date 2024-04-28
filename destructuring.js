var data = {
    "name": "Vasu",
    "age": 19,
    "year" : 2
}

var x = data.name
var y = data.name
var z = data.year

//destructureing
//directly assign properties to other variables
const { "name": a, "age": b, "year": c } = data


//nested destructuring
const LOCAL_FORECAST = {
    "today": { min: 20, max: 35 },
    "tomorrow":{min:24,max:32}
}

const { tomorrow: { max: maxOfTomorrow } } = LOCAL_FORECAST
console.log(maxOfTomorrow)


//array destructuring
const [l, m, , n, o] = [1, 2, 3, 4, 5];
console.log([l, m, n, o]); 
//swapping of numbers
let u = 10, v = 20;
(() => {
    'use strict';
    [u, v] = [v, u];
})();
console.log(u);
//remove first 2 elements in an array
const source = [1, 2, 3, 4, 5];
var arr;
(() => {
    "use strict";
    [, , ...arr] = source;
})();
console.log(arr);