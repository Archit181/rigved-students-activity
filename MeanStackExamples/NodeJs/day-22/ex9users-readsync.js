let fs = require("fs");
let data = fs.readFileSync("user.txt");
let userinfo = data.toString();
let useritem = userinfo.split(";");

//object Array destructure sytax
let [name, age, gender] = useritem;
console.log(`name: ${name}, age: ${age}, geender : ${gender}`);