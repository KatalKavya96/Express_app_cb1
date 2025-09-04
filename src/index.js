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

app.get("/prn/:value",(req,res)=>{

    const products = ['Mango',"Apple","Banana"]
    const message = "No Product Found"

    if (req.params.value < products.length){
    res.send(`${products[req.params.value]}`)
    }else{
        res.send(message)
    }

})



app.listen(3000,()=>{console.log("Server Started on 3000")})