import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import Card from "./components/Card/Card.jsx";
import Following from "./components/Following/Following.jsx";
import Chat from "./components/Chat/Chat.jsx";
import Position from "./components/Position/Position.jsx";  
import Explore from "./components/Explore/Explore.jsx";
import Card2 from "./components/Card2/Card2.jsx";

const MainContent = () => {
  const location = useLocation();

  // Conditionally render based on the current path
  if (location.pathname === "/following") {
    return <Following />; // following component
  }

  if (location.pathname === "/chat") {
    return <Chat />; // chat component
  }

  if (location.pathname === "/explore") {
    return <Explore />; // explore component
  }

  if (
    location.pathname === "/Newest" ||
    location.pathname === "/Artist" ||
    location.pathname === "/Nearby" ||
    location.pathname === "/Popular" ||
    location.pathname === "/Audio"
  ) {
    return <Card2 />; // render Card2 for all these routes
  }

  // Render Position component exclusively for the /newpage route
  if (location.pathname === "/newpage") {
    return null; // MainContent does not render anything for /newpage
  }

  // Default rendering for other paths
  return (
    <>
      <Routes>
        <Route path="/foryou" element={<div></div>} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      <Card />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/newpage" element={<Position />} />
      </Routes>
      <MainContent />
    </Router>
  );
};

export default App;
