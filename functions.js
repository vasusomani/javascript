// FUNCTION DECLARATION
function testFunction1() {
    console.log("Hello World")
}
testFunction1()

function testFunction2(name) {
    console.log("Hi",name)
}
testFunction2("Vasu")

function testFunction3(a, b) {
    console.log(a-b)
}
testFunction3(5,2)
testFunction3("vasu", 5) //NaN Not a Number

function add(a, b) {
    return a+b
}
console.log(add(2, 3))

function isEven(n){
    if (n % 2 == 0) {
        return true
    }
    return false
}
console.log(isEven(5))

//Arrow Functions
var count1 = function (arr1,arr2) {
    return arr1.length + arr2.length
}

var count2 = (arr1, arr2) => arr1.length + arr2.length
var increment = (number, value = 1) => number + value //Default Parameter

var addOne = 10
addOne = (a) => a + 1
console.log(addOne(10))