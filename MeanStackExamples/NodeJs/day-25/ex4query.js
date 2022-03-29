let express = require("express");
let app = express();
let Parser = require("body-parser");

let PORT = 3000;

app.listen(PORT, () => console.log(`Server is running At ${PORT}`));

app.post("/user/:id", (request, response) => {
    let querydata = request.query;
    let id = request.params.id;
    let age = querydata.age;
    response.send(`${id} is the path parameters & ${age} is Query parameters`);
});

app.post('/', (request, response) => {
    response.send('Hello world');
});