const express = require("express");
const app = express();
const http = require("http").createServer(app);
const port = 8080;

app.get("/", function(request, response){
    response.end("hello [express] world");
});

app.use(express.static(__dirname+"/view"));
const routes = require("./route/"); //index.js = / 
app.use(routes);

http.listen(port, function(){
    console.log(`http://localhost:${port}`);
});