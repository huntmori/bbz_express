//import express, { application } from "express"
import express from "express";
import fs from "fs";
class App
{
    public application : express.Application;

    constructor(){
        this.application = express();
    }
}

const app = new App().application;

app.get("/", (req:express.Request, res:express.Response)=>{
    //res.send("start");
    var data = fs.readFileSync("/inner_app/index.html",'utf-8');
    console.log(data);
    res.end(data);
});

app.listen(4000, ()=>console.log("start"));