const express=require("express");
const {createAuction,getActiveAuctions,getAuctionById,closeAuction}=require("../controllers/auctionController");

const router=express.Router();

router.post("/",createAuction); //routes map http method+url to controller functions. routes contain no logic only mapping.
router.get("/",getActiveAuctions);
router.get("/:id",getAuctionById);
router.post("/:id/close",closeAuction);

module.exports=router;