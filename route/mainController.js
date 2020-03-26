/*  
    route/mainController.js
*/
var fs = require("fs");

exports.mainView = function(request, response){
    fs.readFile("./view/index.html", "utf8", function(err, buff){
        response.end(buff);
    })
}