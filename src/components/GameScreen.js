import React from 'react';

function GameScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-900 text-white">
      <h1 className="text-3xl font-bold mb-4">🎮 Desi Teen Patti 🎮</h1>
      <p className="mb-2">Game Interface will appear here.</p>
      <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 mt-4">
        Start Game
      </button>
    </div>
  );
}

export default GameScreen;
