//var v/s let

//1
// Can't redefine let again unlike var
var a = 10
var b = 20

var a = 20 //Works
b = 10

let c = 10
let d = 20

// let c = 20 //Error
d = 20



//2
//var declared anywhere behaves as global var
function checkScope1() {
    var scope1 = "Function Scope"
    if (true) {
        var scope1 = "Block Scope"
        console.log("Block Scope :",scope1)
    }
    console.log("Function Scope :",scope1)
}
checkScope1()

console.log("\n")

function checkScope2() {
    let scope2 = "Function Scope"
    if (true) {
        let scope2 = "Block Scope"
        console.log("Block Scope :", scope2)
    }
    console.log("Function Scope :", scope2)
}
checkScope2()

console.log("\n")

function testVar() {
    if (true) {
        var x = 10
    }
    console.log(x)
}
testVar()

console.log("\n")

function testLet() {
    if (true) {
        let x = 10
    }
    console.log(x)
}
// testLet() //Error





// const
// const declared varibales can't be reassigned again

const arr = [1, 2, 3, 4]
// arr = [2,3,4] //Error
arr[2] = 10 //Work

const MATH_CONSTANTS = {
    "PI":3.14
}
// MATH_CONSTANTS = {
//     "PI":9.18
// } //Error
MATH_CONSTANTS.PI = 9.18 //Work

Object.freeze(MATH_CONSTANTS) //Cannot add, delete, or modify its properties
MATH_CONSTANTS.PI = 3.14 // Won't give any error but it silently fails
console.log(MATH_CONSTANTS.PI)