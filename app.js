const express = require("express");
app = express();
http = require("http").createServer(app);
port = 8001;

app.get("/", function(request, response){
    response.end("hello [express] world");
});

app.use(express.static(__dirname+"/view"));
const routes = require("./route/"); //index.js = / 
app.use(routes);

http.listen(port, function(){
    console.log(`http://localhost:${port}`);
});