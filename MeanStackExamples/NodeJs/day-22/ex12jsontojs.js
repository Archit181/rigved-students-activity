let fs = require("fs");
let data = fs.readFileSync("emp.json",);
let jsonString = data.toString();
let jsObject = JSON.parse(jsonString);
console.log(jsonString);
console.log(jsObject);

let {id , name, salary} = jsObject;
console.log(`id = ${id}, name = ${name}, salary = ${salary}`);