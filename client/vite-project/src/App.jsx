import { useState,useEffect } from 'react'
import {getAllAuctions} from "./services/api";
import AuctionList from "./pages/AuctionList";
import AuctionDetail from "./pages/AuctionDetail";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  // useEffect(()=>{
  //   getAllAuctions().then(data=>console.log(data));
  // })

  return(
    // <div>
    //   <h1>Smart Auction Platform</h1>
    //   <AuctionList/>
    // </div>
    // <div>
    <Routes>
      <Route path="/" element={<AuctionList/>}/>
      <Route path="/auction/:id" element={<AuctionDetail/>}/>
    </Routes>
    
  )
}

export default App;
