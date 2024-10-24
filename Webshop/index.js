const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/webshop')

const ProductSchema = new mongoose.Schema({
    name: String,
    age:Number   

})

const ProductModel = mongoose.model("products",ProductSchema)

app.get("/getProducts",(req,res) =>{
    ProductModel.find({}).then(function(users){
        res.json(users)
        res.json("cica")
    }).catch(function(err){
        console.log(err)
    })
})

app.listen(3001, ()=>{

    console.log("server is running")
})