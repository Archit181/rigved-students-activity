const fs = require("fs");

let emp = {id : 3, name :"Alex", salary : "350000"};
// converting javascript object to json
let jsonString = JSON.stringify(emp);

console.log(emp);
console.log(jsonString);

fs.writeFileSync('emp.json', jsonString);
console.log('done...');