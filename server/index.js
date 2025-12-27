require('dotenv').config();

const express=require("express"); //require()-> built in function to inculde external modules that exists in separate files
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));

app.listen(5000,()=>{
    console.log("Server running on port 5000👍");
})

