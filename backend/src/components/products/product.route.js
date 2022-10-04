const express=require('express')
const Product=require("./product.schema")
const app=express.Router()


app.get("/",async(req,res)=>{

    let {c}=req.query
    try{
        let a=await Product.find({category:c})
        console.log(c);
        res.send(a)
    }catch(e){
        res.status(401).send(e.message)
    }

    let products=await Product.find()
    res.send(products)
})

module.exports=app
