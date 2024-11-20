const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");




const app = express()
app.use(cors());


mongoose.connect('mongodb://localhost:27017/webshop')

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    rating: Number,
    inStock: Boolean  

})

const ProductModel = mongoose.model("products",ProductSchema)

app.get("/getProducts",(req,res) =>{
    ProductModel.find({}).then(function(users){
        console.log()
        res.json(users)
    }).catch(function(err){
        console.log(err)
    })
})

app.listen(3001, ()=>{

    console.log("server is running")
})