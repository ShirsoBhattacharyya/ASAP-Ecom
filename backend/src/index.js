const express=require("express")
const cors=require("cors")
const PORT =process.env.PORT || 8080


const app=express()
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send(`ASAP PROJECT`);
})

app.listen(PORT,()=>{
console.log("server started at http://localhost:8080")
})
