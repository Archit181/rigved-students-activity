let http = require("http");
let PORT_NO = 3001;
let url = require("url"); // this converts url parameter to javascript object

http
.createServer((request, Response) => {
    let urlString = request.url;
    if(urlString != './favicon-ico') {
        // extract the query parameter & convert it to javascript object
        let urlObject = url.parse(urlString, true);//true is flag to enable conversation
        let user = urlObject.query;
        console.log(user);
        console.log(JSON.stringify(user));
        Response.writeHead(200, {'content-type':'text/html'});
        Responce.write(`<h2> Hello ${user.name} your Age is : ${user.age}</h2>`);
    }Responce.end();
})
.listen(PORT_NO => console.log(`server runnng at ${3001}`));