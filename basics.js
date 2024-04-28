//Weakly Typed language(No explict type assignments like bool,num,int,etc)
//Object Oriented Language
//Semicolon is not required in js but you can use it
//To run on terminal we can use node js (JS Runtime Environment) eg-> node basics.js

// PRINT STATEMENT
console.log("Hello World")
console.log("Hello","Wolrd") //Hello World



// DATA TYPES
//String, Number, Boolean, Undefined, Null, Bigint, Symbol, Object(Object,Array,Date)
//Assignment using var,let or const only

//var can be assigned to any dtype and used in whole program
var myName = "Vasu Somani"
yourName = "Anonymous";//Works
console.log(typeof(you))

//let is similar to var but limited to the scope you defined in
let ourName = "Nothing"

//const values can't be changed (Use all CAPITALS)
const PI = 3.14

// uninitalized
var a;
console.log(a); //Will give undefined



// OPERATORS
// + - / * %
// ++ --
// += -= *= /=
// > >= < <= 
// == != (3=="3" is ture) Equalitiy Operator
// === !== (3==="3" is false) Strict Equaltiy Opeartor
// && (and) || (or)



// STRINGS
// ' ' and " " for declaration
var myName = "Vasu Somani"

// ` ` Using backticks for interpolation in strings
console.log(`Hola mi soy ${myName}`)
console.log("Hola mi soy ${myName}") // Wont work in "" or ''

// .length to find length of string
var n = myName.length

// indexing
var subString = myName[0]

// immutable
myName[2] = "k" //Won't work and won't give error too
myName = "Vaku Somani" //Will work



// ARRAYS
// Declaration
var arr = ["2", 3, 4, 5.9]

// muttable
arr[0] = 10

//Below functions will work even if the array is declared as const
// add at end
arr.push("9")

// add at begin
arr.unshift(20)

// remove at end
var poppedEnd = arr.pop()

// remove at begin
var poppedBegin = arr.shift()


// copying array
const arr1 = [1, 2, 3, 4]
let arr2
arr2 = arr1 //copy by refrence
console.log("arr2 before:", arr1)
arr1[0] = "xyz" //arr2 will also change
console.log("arr2 after:",arr2)

const arr3 = [1, 2, 3, 4]
let arr4
arr4 = [...arr3] //copy by value //using spread operator
arr3[0] = "xyz" //arr4 won't change
console.log(arr4)
let arr5 = arr3.slice() //copying using slice method
arr3[0] = "0" //arr5 wont change
console.log(arr5)


//for each loop in array
for (var x of arr3) {
    console.log(x)
}

//map in array
arr3.map((i)=>console.log(i+" YO"))

// SWITCH
var choice = 'a'
switch (choice) {
    case 'a':
        console.log("A it is");
        break;
    case 'b':
        console.log("B it is");
        break;
    default:
        console.log("Dont know");
        break;
}




// "use strict"
// Literal Expression
// To indicate that the code should be executed in "strict mode".
// In Strict Mode you cannot use undeclared vaiables
// Declared by adding "use strict" to the beginning of a script or function

t1 = 3.14; // Works
myFunction();

function myFunction() {
    "use strict";
    // t2 = 3.14; // Error
}

// Deleting a variable, object or function is not allowed.
/*
"use strict";
let x = 3.14;
delete x; // Error
/*

//In strict mode, eval() can not declare a variable using the var keyword
/*
"use strict";
eval("var x = 2");
alert(x); //Error
*/
