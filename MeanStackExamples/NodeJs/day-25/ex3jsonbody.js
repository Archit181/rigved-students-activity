let express = require("express");
let app = express();
let Parser = require("body-parser");
let PORT = 3000;

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

app.use(Parser.json()); // parses the json coming in the request

app.post('/user', (request, response) => {
    //extract the json from the request body using request.body
    let content = request.body; // {"name": "value", "age": value}
    console.log(content);
    response.send(`hello ${content.name}, your age is ${content.age}`); 
});

app.post('/user/:Id', (request, response)=>{
    // extract the json from the body using request.json
    let content = request.body; // {"name" : "Value", "age" : value }
    let id = request.params.id;
    console.log(id, content);
    let user = {userId : id, username : content.name, age : content.age};
    response.json(user);
});