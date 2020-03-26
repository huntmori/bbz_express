const express = require("express");
app = express();
http = require("http").createServer(app);
port = 8001;

app.get("/", function(request, response){
    response.end("hello [express] world");
});

http.listen(port, function(){
    console.log(`http://localhost:${port}`);
});