//Object is key-value pairs
//Not only vaibales but we can also store functions in objects

var user = {
    "name": "Vasu Somani",
    "age": 19,
    "college": "VIT Vellore",
    "reg_no": "22BCE0539",
    "speciality": ["Flutter"],
    "grades": {
        "sem_1": 9.55,
        "sem_2": 9.68,
    },
    "function1": function () {
        console.log("Hello World")
    },
    "function2": (name)=> {
        console.log("Hi", name)
    },
    function3() {
        console.log("Hello")
    }
}

// dot notation
console.log(user.name)
console.log(user.function1())
console.log(user.function2("Vasu"))
console.log(user.function3()) 

// bracket notation
console.log(user["name"])

// mutable
user.speciality.push("Node JS")

// add new property into obejct
user.looks = "smart" // can use bracket notation also

// delete property form object
delete user.looks

// check property and return bool
user.hasOwnProperty("name") //true