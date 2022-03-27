// importing express module
const { response } = require("express");
let express = require("express");
const { request } = require("http");
// this refers to a Top-level function from  which you can get access get, post, put, delete, listen
let app = express();

// start the server
let PORT = 3002;
app.listen(PORT, () => {console.log(`Express is running at ${PORT}`)});

//create webservices by configuring URL & HTTP methods
app.get('/',(request, response) => {
    response.send('Requesting GET'); // returns text data to the consumer
});
//implementing POST
app.post('/',(request, response) => {
    response.send(`Requesting POST`); // returns text data to the consumer
});
app.put('/', (request, response) => {
    response.send(`Requesting PUT`); // returns text data to the consumer
});
app.delete('/', (request, response) => {
    response.send(`Requesting DELETE`);// returns text data to the consumer
});