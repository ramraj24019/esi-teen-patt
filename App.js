import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChipShop from "./src/components/ChipShop";
import LoginScreen from "./src/components/LoginScreen";
import GameScreen from "./src/components/GameScreen";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/shop" element={<ChipShop />} />
          <Route path="/game" element={<GameScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
