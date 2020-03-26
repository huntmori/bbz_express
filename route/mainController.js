/*  
    route/mainController.js
*/
var fs = require("fs");
var MemberVO = require("../model/Member");

exports.mainView = function(request, response){
    var memberModel = new MemberVO("HONG-GILL-DONG", "22");
    var msg = memberModel.toString();

    fs.readFile("./view/index.html", "utf8", function(err, buff){
        response.end(msg);
    })
}