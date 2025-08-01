import React from "react";

const GameScreen = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Welcome to Desi Teen Patti!</h2>
      <p className="text-center text-gray-600">🔥 Play, Win, and Enjoy 🎉</p>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <button className="bg-green-500 text-white py-2 px-4 rounded-xl">Start</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-xl">Shop</button>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-xl">Clips</button>
      </div>
    </div>
  );
};

export default GameScreen;
