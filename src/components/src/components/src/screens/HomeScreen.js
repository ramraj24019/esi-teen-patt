import React from "react";
import GameScreen from "../components/GameScreen";

const HomeScreen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">🎲 Desi Teen Patti</h1>
      <GameScreen />
    </div>
  );
};

export default HomeScreen;
