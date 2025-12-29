const Auction=require("../models/Auction");

const createAuction=async(req,res)=>{
    try{
        const{title,description,basePrice,startTime,endTime}=req.body; //extracts data sent from client

        const auction=new Auction({ //created a mongodb document in memory
            title,
            description,
            basePrice,
            currentHighestBid:basePrice,
            startTime,endTime,
            status:"ACTIVE",
        });

        const savedAuction=await auction.save(); //saves auction into database

        res.status(201).json(savedAuction); //sends created auction back to client. (201)->created successfully
    }
    catch(error){
        res.status(500).json({message:"Error creating auction"});
    }
};

const getActiveAuctions=async(req,res)=>{
    try{
        const auctions=await Auction.find({status:"ACTIVE"});
        res.status(200).json(auctions);
    }
    catch(error){
        res.status(500).json({message:"Error fetching auctions"});
    }
};

const getAuctionById=async(req,res)=>{
    try{
        const {id}=req.params;

        const auction=await Auction.findById(id);

        if(!auction){
            return res.status(404).json({message:"Auction not found"}); //404->client gave wrongId
        }

        res.status(200).json(auction);
    }
    catch(error){
        res.status(500).json({message:"Error fetching auction"}); //500->server failed
    }
};

const closeAuction=async(req,res)=>{
    try{
        const{id}=req.params;
        
        //close auction
        const auction=await Auction.findById(id);

        //auto close auction
        if(new Date()>auction.endTime){
            auction.status="CLOSED";
        }

        if(!auction){
            return res.status(404).error({message:"Auction not found"});
        }

        if(auction.status==="CLOSED"){
            return res.status(400).json({message:"Auction already closed"});
        }

        auction.status="CLOSED";
        await auction.save();
        
        //declare winner
        res.status(200).json({
            message:"Auction closed",
            winningBid:auction.currentHighestBid,
            winner:auction.currentHighestBid,
        });
    }
    catch(error){
        res.status(500).json({message:"Error closing action"});
    }
};

module.exports={createAuction,getActiveAuctions,getAuctionById,closeAuction};