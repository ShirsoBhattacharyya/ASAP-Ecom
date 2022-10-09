const express=require('express')
const Product=require("./product.schema")
const app=express.Router()


app.get("/",async(req,res)=>{
    let products=await Product.find()
    res.send(products)
})
app.get('/:category',async(req,res)=>{
    let {category}=req.params;
    try{
        let prod=await Product.find({category:category})
        res.send(prod);
    }catch(e){
        res.status(401).send(e.message);
    }
})
app.get('/:category/:id',async(req,res)=>{
    try{
        let prod=await Product.find({_id:req.params.id,category:req.params.category})
        res.send(prod);
    }catch(e){
        res.status(401).send(e.message);
    }
})
module.exports=app
