const BASE_URL="http://localhost:5000/api";

//get all active auctions
export const getAllAuctions=async()=>{
    const response=await fetch(`${BASE_URL}/auctions`);
    return response.json();
}

//get auction by id
export const getAuctionById=async(id)=>{
    const response=await fetch(`${BASE_URL}/auctions/${id}`);
    return response.json();
}

//place a bid
export const placeBid=async(auctionId,bidAmount)=>{
    const response=await fetch(`${BASE_URL}/bids`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({auctionId,bidAmount}),
    });

    const data=await response.json();

    if(!response.ok){
        throw new Error(data.message || "Bid failed");
    }

    // return response.json();
    return data;
};