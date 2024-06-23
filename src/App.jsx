import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Card from "./components/Card";
import Following from "./components/Following";
import Chat from "./components/Chat";
import Position from "./components/Position";

const MainContent = () => {
  const location = useLocation();

  // Conditionally render based on the current path
  if (location.pathname === "/following") {
    return <Following />; // following component
  }

  if (location.pathname === "/chat") {
    return <Chat />; // chat component
  }

  // Render Position component exclusively for the /newpage route
  if (location.pathname === "/newpage") {
    return null; // MainContent does not render anything for /newpage
  }

  return (
    <>
      <Routes>
        <Route path="/foryou" element={<div></div>} />
        <Route path="/explore" element={<div></div>} />
      </Routes>
      <Card />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />\
      <Routes>
        <Route path="/newpage" element={<Position />} />
        
      </Routes>
      <MainContent />
    </Router>
  );
};

export default App;
