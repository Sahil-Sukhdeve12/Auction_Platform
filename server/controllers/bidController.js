const Auction = require("../models/Auction");
const Bid=require("../models/Bid"); //importing bid model from database

const placeBid=async(req,res)=>{
    try{
        const{auctionId,bidAmount}=req.body; //read

        //check auction exists
        const auction=await Auction.findById(auctionId); 

        // console.log("auctionId from body",auctionId);

        if(!auction){
            return res.status(404).json({message:"Auction not found"});
        }

        //check auction is active or not
        if(auction.status!=="ACTIVE"){
            return res.status(400).json({message:"Auction is closed"});
        }

        //check auction not expired
        if(new Date()>auction.endTime){
            auction.status="CLOSED";
            await auction.save(); //info saved to database
            return res.status(400).json({message:"Auction expired"});
        }

        //check bid>currentHighestBid
        if(bidAmount<=auction.currentHighestBid){
            return res.status(400).json({message:"Bid must be greater than current highest bid"});
        }

        //save bid & update auction
        const bid=new Bid({auctionId,bidAmount,}); //creating instance
        await auction.save();

        res.status(201).json({message:"Bid placed sucessfully"});
    }
    catch(error){
        res.status(500).json({message:"Error placing bid"});
    }
};

const getBidsForAuction=async(req,res)=>{
    try{
        const{auctionId}=req.params;

        const bids=await Bid.find({auctionId}).sort({createdAt:-1});

        res.status(200).json(bids);
    }
    catch(error){
        res.status(500).json({message:"Error fetching bids"});
    }
};

module.exports={placeBid,getBidsForAuction}; //exporting as object