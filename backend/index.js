import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello world!');
})

app.listen(5000,()=>console.log("app is running"));