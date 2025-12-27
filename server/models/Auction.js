const mongoose=require("mongoose");

const AuctionSchema=new mongoose.Schema({
    title:String,
    description:String,
    basePrice:Number,
    currentHighestBid:Number,
    currentHighestBidder:{
        type:mongoose.Schema.Types.ObjectId, //ObjectId(reference to User)
        ref:"User",
    },
    startTime:Date,
    endTime:Date,
    status:String, //Active/Closed
    createdBy:{
        type:mongoose.Schema.Types.ObjectId, //ObjectId(reference to User)
        ref:"User",
    },
},
    {timestamps:true}
);

const auction=mongoose.model("Auction",AuctionSchema);

module.exports=auction;