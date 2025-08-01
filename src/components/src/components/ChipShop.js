import React from "react";
import { getDatabase, ref, push } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlbNZBa6X7SNMWibj3-OsRJQar9lU-RY",
  authDomain: "desi-teen-patti.firebaseapp.com",
  projectId: "desi-teen-patti-c4639",
  storageBucket: "desi-teen-patti.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  databaseURL: "https://desi-teen-patti-c4639-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function ChipShop() {
  const buyChips = (amount) => {
    const clipName = `${amount}_entry_clip.mp4`;

    push(ref(db, "chip_purchases"), {
      amount,
      upi: "dguru3633@okhdfcbank",
      clip: clipName,
      time: Date.now()
    });

    alert(`🎉 ₹${amount} chips purchase request added!\n🎬 Clip: ${clipName}`);
  };

  return (
    <div className="text-center space-y-4">
      <h1 className="text-2xl font-bold">💰 Chip Store</h1>
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => buyChips(100)}>
        ₹100 Chips
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => buyChips(200)}>
        ₹200 Chips
      </button>
      <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={() => buyChips(500)}>
        ₹500 Chips
      </button>
    </div>
  );
}

export default ChipShop;
