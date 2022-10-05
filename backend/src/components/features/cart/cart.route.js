const express=require("express");

const User=require("../users/user.schema")

const Cart=require("./cart.schema")


const app=express.Router();

app.get('/',async(req,res)=>{
  let cart=await Cart.find();
  res.send(cart);
})
app.get("/:id", async(req,res)=>{

  try{
    const cartItems=await Cart.find({userId:req.params.id}).populate("productsId")
    return res.send(cartItems)
   

}catch(e){
    res.status(500).send(e.message)
}
    
})

app.post("/:id", async (req, res) => {
  try {
    let cartItem = await Cart.findOne({
      userId:req.params.id,
      productsId: req.body.productsId,
    })


    if (cartItem) {
      let item = await Cart.updateOne(
        {
          userId:req.params.id,
          productsId: req.body.productsId,
        },
        {
        $set:{
          quantity: req.body.quantity,
        },
      }
      )
      return res.send(item);
    } else {
      let item = await Cart.create({
        ...req.body,
        userId:req.params.id,
      });
      return res.send(item);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports=app;