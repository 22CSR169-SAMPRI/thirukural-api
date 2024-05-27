import express from "express";
const app=express()
const PORT=6969;
app.get('/',(req, res)=>{
    res.json({ msg: " heollo"});
})

app.listen(PORT,(req,res)=>{
    console.log(`server in http://localhost:${PORT}`);

})
app.get("/kural",()=>{});
app.post("/kural",()=>{});
app.put("/kural/:id",()=>{});
app.delete("/kural/:id",()=>{});