const mongoose=require("mongoose")


const cartSchema= new mongoose.Schema({

    productsId:{type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true},

    userId:{type:mongoose.Schema.Types.ObjectId, 
        ref:"user",
        required:true},

    quantity:{type:Number, reuired:true,min:1}

})


const Cart=mongoose.model("cart",cartSchema)

module.exports=Cart;