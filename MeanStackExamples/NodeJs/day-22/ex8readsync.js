let fs = require("fs");
// buffer stream
let data = fs.readFileSync("simple.txt");
// converting buffer stream to string
let content = data.toString();
console.log(content);