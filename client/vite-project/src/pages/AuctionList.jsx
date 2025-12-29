import {useEffect,useState} from "react";
import {getAllAuctions} from "../services/api";
import {Link} from "react-router-dom";

const AuctionList=()=>{
    const[auctions,setAuctions]=useState([]);

    useEffect(()=>{
        const fetchAuctions=async()=>{
            const data=await getAllAuctions();
            setAuctions(data);
        };
        fetchAuctions();
    },[]);

    return(
        <div style={{padding:"20px"}}>
            <h2>Active Auctions</h2>   
            
            {auctions.length===0 && <p>No auctions available</p>} {/* render something only if condition is true */}

            {auctions.map((auction) => (
                <div
                    key={auction._id}
                    style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    marginBottom: "10px",
                    }}
                >
                    <h3>
                        <Link to={`/auction/${auction._id}`}>{auction.title}</Link>
                    </h3>
                    <p>Base Price: ₹{auction.basePrice}</p>
                    <p>Highest Bid: ₹{auction.currentHighestBid}</p>
                </div>
            ))}
        </div>
    );
};

export default AuctionList;