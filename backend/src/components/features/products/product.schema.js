const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true, enum: ["Men", "Women" , "Kids"] },
  rating:{type:Number, required:true},
  userId: { type: mongoose.Schema.ObjectId, ref: "user", required: true },

});

const Product=mongoose.model("product",productSchema)
module.exports=Product
