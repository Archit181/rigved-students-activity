let http = require("http");
let PORT_NO = 3001;
http.createServer(callback1).listen(PORT_NO, callback2);
// this is executed ny passing createServer , when the request arrives;
function callback1(request, responce) {
    console.log(`callback1 is executed , request arrives`);
    responce.write(`welcome to our 1st web page`);
    responce.end(); // to end the responce writing

}
// this is executed when the server occupies the port
function callback2() {
    console.log(`callback2 is executed , server started at ${PORT_NO}`);
}
/*
you need to send request from the browser 
the url will be http://localhost:3001
*/
