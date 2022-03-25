let http = require("http");
let PORT_NO = 3001;
http.createServer(function(request, require){
    console.log(`request Arrives`);
    Response.write(`this is our 2nd App`);
    Response.end();

}).listen(PORT_NO,function(){
    console.log(`server is running ${PORT_NO}`);
});