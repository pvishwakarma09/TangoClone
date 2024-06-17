import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Daily from "./components/Daily";
import Following from "./components/Following";
import Chat from "./components/Chat";

const MainContent = () => {
  const location = useLocation();

  // Conditionally render based on the current path
  if (location.pathname === "/following") {
    return <Following />; // following component
  }

  if (location.pathname === "/chat") {
    return <Chat />; // chat component
  }

  return (
    <>
      <Routes>
        <Route path="/foryou" element={<div></div>} />
        <Route path="/explore" element={<div></div>} />
        <Route path="/newpage" element={<div></div>} />
      </Routes>
      <Daily />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <MainContent />
    </Router>
  );
};

export default App;
