const express=require("express")
const cors=require("cors")
const PORT =process.env.PORT || 8000
const userRouter=require('./components/features/users/user.route');
const connect=require('./components/config/db');
const { default: mongoose } = require("mongoose");
const productRouter=require("./components/features/products/product.route");
const cartRouter=require('./components/features/cart/cart.route');
const bodyparser=require('body-parser');
const stripe=require('stripe')('sk_test_51Lr0OFSB7sSZv0kJ9pGIWkc0jfyxZvg349AsNeibAf4ZD6gHYeMXAxQPvkNb696Eg3uodGn1VpoW1A9Xpi6GXfCs00nfxRcHAz')

const app=express()
app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());
app.use('/users',userRouter);
app.use('/products',productRouter);
app.use('/carts',cartRouter);

app.get("/",(req,res)=>{
    res.send(`ASAP PROJECT`);
})
app.post("/checkout",(req,res)=>{

})
app.listen(PORT,async()=>{
await connect();
console.log("server started at http://localhost:8080")
})
