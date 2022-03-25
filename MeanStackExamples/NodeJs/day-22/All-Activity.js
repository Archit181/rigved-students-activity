let fs = require("fs"); //imports fs module
let read = require("readline-sync"); 

// firstly you need to assume that theres Already an Array in file
let data = fs.readFileSync("emp.json");
let dataString = data.toString(); // converts the byte stream to string
let jsArray = undefined;
if(dataString.length < 1 || dataString == "") {
             jsArray = []; // creating javascript Array
}else {
    jsArray = JSON.parse(dataString); //json array will be converted to javascript
}

let n = read.question("Enter name");
let a = read.question("Enter age");
let emp = {name : n, age: a};
jsArray.push(emp);// pushes javascript object to javascript array
let jsonArray = JSON.stringify(jsArray);// converts javascript to json Array
//write json Array to the file
fs.writeFileSync("emp.json",jsonArray);