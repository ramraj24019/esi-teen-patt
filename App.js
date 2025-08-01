import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginScreen from "./src/components/LoginScreen";
import ChipShop from "./src/components/ChipShop";
import GameScreen from "./src/components/GameScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/chipshop" element={<ChipShop />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
