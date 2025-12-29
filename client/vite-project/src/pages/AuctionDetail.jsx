import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import {getAuctionById,placeBid} from "../services/api";
import {Link} from "react-router-dom";

const AuctionDetail=()=>{
    const {id}=useParams();

    const [auction,setAuction]=useState(null);
    const [bidAmount,setBidAmount]=useState("");
    const [error,setError]=useState("");

    useEffect(()=>{
        getAuctionById(id).then(setAuction);
    },[id]);

    const handleBid=async()=>{
        try{
            setError("");
            await placeBid(id,Number(bidAmount));
            const updated=await getAuctionById(id);
            setAuction(updated);
            setBidAmount("");
        }
        catch(err){
            setError(err.message || "Bid failed");
        }
    };

    if(!auction) return <p>Loading...</p>
    const isClosed=auction.status==="CLOSED";

    return(
        <div style={{padding:"20px"}}>
            <Link to="/">← Back to Auctions</Link>
            <h2>{auction.title}</h2>
            <p>{auction.description}</p>
            <p>Highest Bid: ₹{auction.currentHighestBid}</p>

            <input type="number" value={bidAmount} onChange={(e)=> setBidAmount(e.target.value)}
            placeholder="Enter bid"/>

            <br/>
            <br/>

            <button onClick={handleBid} disabled={isClosed}>{isClosed ?"Auction Closed":"Place Bid"}</button>
            {error && <p style={{color:"red"}}>{error}</p>}

            {/* <p>Status:<Strong>{auction.status}</Strong></p> */}
        </div>

    )
};

export default AuctionDetail;

