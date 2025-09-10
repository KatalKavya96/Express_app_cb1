const express = require('express');
const app = express();
const fs = require("fs")
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

app.get("/prn/:value",(req,res)=>{

    const products = ['Mango',"Apple","Banana"]
    const message = "No Product Found"

    if (req.params.value < products.length){
    res.send(`${products[req.params.value]}`)
    }else{
        res.send(message)
    }

})

app.get("/prid/:id",(req,res)=>{

    const fileName = req.params.id
    fs.readFile(`${fileName}.html`,"utf-8",(err,data)=>{

        if(err){res.status(404).send("Not Found")}
        else{res.status(200).send(data)}
    })
    
})




app.listen(3000,()=>{console.log("Server Started on 3000")})