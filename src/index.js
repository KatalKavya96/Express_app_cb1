const express = require('express');
const app = express();

// Root Route/Deafult Route

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