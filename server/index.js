require('dotenv').config();

const express=require("express"); //require()-> built in function to inculde external modules that exists in separate files
const mongoose=require("mongoose");
const cors=require("cors");

const auctionRoutes=require("./routes/auctionRoutes");
const bidRoutes=require("./routes/bidRoutes");

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));

//registering using middleware
app.use("/api/auctions",auctionRoutes); //any request starting with /api/auctions is forwarded to auctionRoutes.js
app.use("/api/bids",bidRoutes);

app.listen(5000,()=>{
    console.log("Server running on port 5000👍");
})

