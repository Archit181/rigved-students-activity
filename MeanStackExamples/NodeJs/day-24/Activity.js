let fs = require("fs");
let express =  require("express");
const { request } = require("http");
const { response } = require("express");
let app = express();

let data = fs.readFileSync("emp.txt");
let empInfo = data.toString();
let emp = empInfo.split(";");
let [id, name, salary] = emp;

app.listen(3003, () => console.log(`Server is Runniang at 3003`));
app.get('/emp', (request, response) => {
    let emp = {
        id, name, salary
    }
    response.json(emp);
});