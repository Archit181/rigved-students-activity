let fs = require("fs");
let message = "hello everyone this is 3rd message\n";
//write FileSync 3rd Argument Append the data
fs.writeFileSync("message.txt", message, {flag:'a+'});
console.log("done...");
