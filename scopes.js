// variables defined outside functions have global scope
var globalVar1 = 10

function func1() {
    if (typeof globalVar1 != "undefined") {
        console.log(globalVar1)
    }
    // if no dtype is given to a variable then it becomes global var automatically
    globalVar2 = 20
}

func1()
if (typeof globalVar2 != "undefined") {
    console.log(globalVar2)
}


// Local and Global var have same name
// Local Var will be given priority
function func3() {
    var globalVar1 = "6"
    console.log(globalVar1)
}
func3()