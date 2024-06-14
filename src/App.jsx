// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Daily from './components/Daily';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/foryou" element={<div></div>} />
        <Route path="/following" element={<div></div>} />
        <Route path="/explore" element={<div></div>} />
        <Route path="/chat" element={<div></div>} />
        <Route path="/newpage" element={<div></div>} />
      </Routes>
    </Router>
    <Daily/>
    </>
  );
};

export default App;
