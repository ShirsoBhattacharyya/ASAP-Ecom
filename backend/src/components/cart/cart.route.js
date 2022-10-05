const express=require("express");

const User=require("../users/user.schema")

const Cart=require("./cart.schema")


const app=express.Router();


app.get("/:id", (req,res)=>{

    let token=req.header;
    let [id,email,password]=token.split(":")

try{
    let userCart=Cart.find({userId:id})
    return res.send(userCart);
}
catch(e){

    return res.status(500).send("Your Cart is Empty")
}
    
})

app.post("/:id",async(req,res)=>{

    let token=req.header;
    let [id,email,password]=token.split(":");


    try {
    let cartItem = await Cart.findOne({
      user: id,
      product: req.body.product,
    }).populate("product");


    if (cartItem) {

      let item = await Cart.findByIdAndUpdate(
        
        cartItem.id,
        {
          quantity: req.body.quantity,
        },
        {
          new: true,
        }
      ).populate("product");
      return res.send(item);
    } else {
      let item = await Cart.create({
        ...req.body,
        user: id,
      });
      return res.send(item);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports=app;