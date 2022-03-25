let read = require("readlne-sync");
// question is the function who waits for users input
let name = read.question("Enter your name");
let age = read.question("Enter your age");
console.log(`hello ${name} your age : ${age} `);

// question Int returns integer value
let num1 = read.question("Enter number1");
let num2 = read.question("Enter number2");
let result = num1 + num2;
console.log(`result ${result}`);