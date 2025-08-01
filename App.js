import React from "react";
import LoginScreen from "./src/components/LoginScreen";
import "./src/index.css"; // अगर Tailwind इस्तेमाल हो रहा है

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <LoginScreen />
    </div>
  );
}

export default App;
