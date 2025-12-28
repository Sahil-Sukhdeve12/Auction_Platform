const express=require("express");
const {placeBid,getBidsForAuction}=require("../controllers/bidController");

const router=express.Router();

router.post("/",placeBid);
router.get("/:auctionId",getBidsForAuction);

module.exports=router;