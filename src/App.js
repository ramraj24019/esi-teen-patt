import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import ClipPlayer from './components/ClipPlayer';
import ChipShop from './components/ChipShop';
import AdminCheck from './components/AdminCheck';
import ChipAdminPanel from './components/ChipAdminPanel';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clip" element={<ClipPlayer />} />
        <Route path="/shop" element={<ChipShop />} />
        <Route path="/admin" element={<AdminCheck />} />
        <Route path="/panel" element={<ChipAdminPanel />} />
      </Routes>
    </Router>
  );
}
