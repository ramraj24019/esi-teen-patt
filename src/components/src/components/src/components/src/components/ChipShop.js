import React, { useState } from "react";

const ChipShop = () => {
  const [chips, setChips] = useState(0);

  const handleBuy = (amount) => {
    const upiLink = `upi://pay?pa=dguru3633@okhdfcbank&pn=Desi%20Teen%20Patti&am=${amount}&cu=INR`;
    window.open(upiLink, "_blank");

    // Simulate chips added instantly after payment (demo only)
    setChips(chips + amount);
  };

  return (
    <div className="p-6 bg-yellow-100 rounded-lg shadow-lg w-full max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">🛒 Buy Chips</h2>
      <div className="space-y-4">
        <button
          onClick={() => handleBuy(100)}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 w-full"
        >
          ₹100 ➡️ 100 Chips
        </button>
        <button
          onClick={() => handleBuy(200)}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 w-full"
        >
          ₹200 ➡️ 200 Chips
        </button>
        <button
          onClick={() => handleBuy(500)}
          className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 w-full"
        >
          ₹500 ➡️ 500 Chips
        </button>
      </div>

      <div className="mt-6 text-lg font-semibold">
        🎉 Total Chips: {chips}
      </div>
    </div>
  );
};

export default ChipShop;
