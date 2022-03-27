let httpModule = require("http");
let urlModule = require("url");

let PORT_NO = 3001;

httpModule.createServer((request, responce) => {

    if(request.url != '/favicon.ico'){
        console.log(`URL is ${request.url}`);
        let urlObject = urlModule.parse(request.url, true); //converts url to js object
        let queryParameters = urlObject.query; // it reads the query parameters
        responce.writeHead(200, {'content-type':'text/html'});
        responce.write(`<h1> name : ${queryParameters.name}</h2>`);
        responce.end();

    }

}).listen(PORT_NO, () => {
    console.log(`Server is running in ${PORT_NO}`);
});