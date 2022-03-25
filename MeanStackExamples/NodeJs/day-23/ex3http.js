let http = require("http");
let PORT_NO = 3001;
http 
.createServer((request, Response) => {
    let username = `Alexander`;
    Response.writeHead(200,{'content-type':'text-html'});
    Response.write(`<h2>Hello App </h2>`);
    Response.write(`<h3>username : ${username}</h3>`);
    Response.end();
}).listen(PORT_NO, () => console.log(`server is running in ${PORT_NO}`));