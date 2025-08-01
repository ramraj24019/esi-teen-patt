import React, { useState } from 'react';
import Login from './src/Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  return (
    <div>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div style={{ textAlign: 'center', marginTop: 50 }}>
          <h1>🃏 Desi Teen Patti 🪙</h1>
          <p>Welcome, {user.phoneNumber}</p>
          <p>⚙️ Game dashboard coming soon...</p>
        </div>
      )}
    </div>
  );
}

export default App;
