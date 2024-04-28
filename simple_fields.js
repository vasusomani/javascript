const userModel1 = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(userModel1("Vasu", 19, "Male"));

//using simple fields
const userModel2 = (name, age, gender) => ({ name, age, gender });
console.log(userModel2("Vasu", 19, "Male"));
