import React, { useState } from "react";
import FlipCoin from "./FlipCoin.js";
import headsImage from "../src/heads.png";
import tailsImage from "../src/tails.png";
import "./index.css";

function App() {
  const [firstFlipResult, setFirstFlipResult] = useState(null);

  return (
    <div className="bg-[e8f5e9] min-h-screen bg-[#02C37E] h-screen overflow-hidden">
      {" "}
      {/* Pale green background */}
      <div class="w-[75%] mx-auto pt-12">
        <div class="border-b-[5px] border-black rounded-full"></div>
      </div>
      <h1 className="text-5xl font-bold text-center text-[#2C363A] pt-5 bg-[#02C37E] font-barlow">
        {" "}
        {/* Sky blue heading */}
        Coin Flipper
      </h1>
      <FlipCoin
        headsImage={headsImage}
        tailsImage={tailsImage}
        headsText="Heads! SHER ko nahane ki koi zaroorat nhi hai 🦁"
        tailsText="Ab to sher ko bhagwan bhi nhi bacha skta... Naha le bhai 🦁 "
        showReloadButton={
          firstFlipResult ===
          "Heads! SHER ko nahane ki koi zaroorat nhi hai 🦁 "
        }
        setFirstFlipResult={setFirstFlipResult}
        firstFlipResult={firstFlipResult}
      />
    </div>
  );
}

export default App;
