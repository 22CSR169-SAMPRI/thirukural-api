import express from "express";
import kuralRoutes from "./routes/kural.route" 
const app=express()
const PORT=6969;


app.get('/',(req, res)=>{
    res.json({ msg: " heollo"});
})
app.use('/kural',kuralRoutes);
app.listen(PORT,(req,res)=>{
    console.log(`server in http://localhost:${PORT}`);

})
