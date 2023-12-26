import React, { useState } from "react";

function FlipCoin({
  headsImage,
  tailsImage,
  headsText,
  tailsText,
  showReloadButton,
  setFirstFlipResult,
  firstFlipResult,
}) {
  const [result, setResult] = useState({
    text: "Click to flip the coin!",
    image: null,
  });
  const [showButton, setShowButton] = useState(true);
  const [flipCount, setFlipCount] = useState(0);
  const [isSecondFlip, setIsSecondFlip] = useState(false);

  const flipCoin = () => {
    if (flipCount >= 2) return;

    const randomNumber = Math.random();
    const resultText = randomNumber < 0.5 ? headsText : tailsText;
    const resultImage = randomNumber < 0.5 ? headsImage : tailsImage;

    if (firstFlipResult === null) {
      setFirstFlipResult(resultText);
      if (resultText === headsText) {
        setShowButton(false);
      }
      setIsSecondFlip(true); // Set isSecondFlip to true after first flip
    } else {
      setShowButton(false);
      setIsSecondFlip(false); // Reset isSecondFlip if heads comes on second flip
    }

    setResult({ text: resultText, image: resultImage });
    setFlipCount(flipCount + 1);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen w-screen bg-[#02C37E]">
      {" "}
      {/* White container with shadow */}
      {(firstFlipResult === null || firstFlipResult === tailsText) && (
        <div class="flex justify-center mt-20">
          <button
            onClick={flipCoin}
            className="bg-black text-3xl font-nunito hover:bg-[#60f4d1] hover:text-black hover:border-black hover:border-4 text-white font-bold py-4 px-8 rounded-[20px]
          "
          >
            Flip Coin
          </button>
        </div>
      )}
      <p>
        {/* Sky blue text */}
        {isSecondFlip && result.text === tailsText ? (
          <p className="text-white text-3xl flex justify-center mt-20 font-montserrat">
            Tails! Coin hi hacked hai, SHER fir se toss karega 🦁
          </p>
        ) : (
          <p className="text-white text-3xl flex justify-center mt-20 font-montserrat">
            {result.text}
          </p>
        )}
      </p>
      {result.image && (
        <img src={result.image} alt={result.text} className=" mx-auto mt-10 " />
      )}
      {flipCount >= 2 && (
        <div>
          <p className="text-white text-3xl flex justify-center mt-10 font-montserrat">
            You've reached your flip limit!
          </p>
          <div class="flex justify-center mt-20">
            <button
              onClick={reloadPage}
              className=" bg-[#60f4d1] font-nunito text-3xl hover:bg-black hover:text-white border-black border-4 text-black font-bold py-4 px-8 rounded-[20px]"
            >
              Re-Toss
            </button>
          </div>
        </div>
      )}
      {showReloadButton && <button onClick={reloadPage}>Reload</button>}
    </div>
  );
}

export default FlipCoin;
