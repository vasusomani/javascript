//Quotes Inside Strings
let text1 = `He's often called as "Johnny"`;
console.log(text1);

//Multiline Strings
let text2 =
    `Hello guys
My name is Vasu
I am in VIT Vellore
unfortunately`;
console.log(text2);

//Variable Substitution
let myName = "Vasu";
let text3 = `My name is ${myName}`
console.log(text3)

//HTML Templates
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
}
html += `</ul>`;