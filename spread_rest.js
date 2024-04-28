// REST OPERATOR
// Use rest to enclose the rest of specific user-supplied values into an array:
// You can only use it before the last parameter in a function definition.
function myRestBio(firstName, lastName, ...otherInfo) {
    return otherInfo;
}
// It instructs the computer to add whatever otherInfo(arguments) supplied by the user into an array
// Then, assign that array to the otherInfo parameter.
var dataRest = myRestBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
console.log(dataRest)



// SPREAD OPERATOR
// Use spread to expand an array’s items into individual arguments:
function mySpreadBio(firstName, lastName, company) {
    return `${firstName} ${lastName} runs ${company}`;
}
var dataSpread = mySpreadBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);
console.log(dataSpread)