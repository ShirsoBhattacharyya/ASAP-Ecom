const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productImage: { type: String, required: true },
  productDesc: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productQty: { type: Number, required: true },
  category: { type: String, required: true, enum: ["Male", "Female"] },
  userId: { type: mongoose.Schema.ObjectId, ref: "user", required: true },

});

const Product=mongoose.model("product",productSchema)
module.exports=Product
