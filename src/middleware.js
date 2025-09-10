const express = require('express');
const app = express();
const fs = require("fs")

// Middleware
function Logger(req,res,next){

    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url
    console.log("Timestamp:", timestamp,"Method:", method,"URL:",url)
    next()
}

// Global Middleware/ Application Level Middleware
app.use(Logger)


app.get("/",(req,res)=>{
    res.send("Hey I am Express Server")
})

app.get("/home",(req,res)=>{
    res.send("<h1>This is Homepage</h1>")
})

app.get("/about",(req,res)=>{
    res.send("This is About Page")
})

app.listen(3000,()=>{console.log("Server Started on 3000")})