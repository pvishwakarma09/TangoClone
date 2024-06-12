// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/foryou" element={<div>For You Page</div>} />
        <Route path="/following" element={<div>Following Page</div>} />
        <Route path="/explore" element={<div>Explore Page</div>} />
        <Route path="/chat" element={<div>Chat Page</div>} />
        <Route path="/newpage" element={<div>New Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
