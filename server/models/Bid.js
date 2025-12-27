const mongoose=require("mongoose");

const BidSchema=new mongoose.Schema(
    {
        auctionId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Auction",
            required:true,
        },
        bidderId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        bidAmount:{
            type:Number,
            required:true,
        },
    },
    {timestamps:true}
);

const Bid=mongoose.model("Bid",BidSchema);

module.exports=Bid;