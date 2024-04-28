class User{
    constructor(name) { //Constructor
        this.username = name;
    }
    set setAge(age) {  //Setters
        this.age = age;
    }
    get getAge() { //Getters
        return this.age;
    }
}
var userModel1 = new User("Vasu");
console.log(userModel1.username);
// In setters and getters we dont use () since they are not functions
// Instead treat them like a variable
userModel1.setAge = 19;
console.log(userModel1.getAge);