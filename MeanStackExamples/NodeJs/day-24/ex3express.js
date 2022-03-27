const { response } = require('express');
let express = require('express');
const { request } = require('http');
let app = express();
app.listen(3003, () => console.log('Server is running in 3003'));
app.get('/', (request, response) => {
    response.send('hello wolrd');
});
app.get('/', (request, response) => {
    let emp = {id : 100, name: "vijay", salary : 35000};
    response.json(emp); // converts js object to json & returns that as responce
});
app.get('/', (request, response) => {
    let empArray = [
        {id:100, name: "Alexander", salary: 350000},
        {id:200, name: "Bruce Wayne", salary: 351796},
        {id:300, name: "victor", salary: 54523}
    ];
    response.json(empArray);// converts empArray to json & returns that as responce
});