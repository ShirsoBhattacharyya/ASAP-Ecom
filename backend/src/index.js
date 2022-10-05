const express=require("express")
const cors=require("cors")
const PORT =process.env.PORT || 8080
const userRouter=require('./components/features/users/user.route');
const connect=require('./components/config/db');
const { default: mongoose } = require("mongoose");
const productRouter=require("./components/features/products/product.route");
const cartRouter=require('./components/features/cart/cart.route');


const app=express()
app.use(cors())
app.use(express.json())

app.use('/users',userRouter);
app.use('/products',productRouter);
app.use('/carts',cartRouter);

app.get("/",(req,res)=>{
    res.send(`ASAP PROJECT`);
})

app.listen(PORT,async()=>{
await connect();
console.log("server started at http://localhost:8080")
})
