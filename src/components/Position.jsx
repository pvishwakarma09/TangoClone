import React from "react";
import { Navbar } from "react-bootstrap";
import "./Position.css";
import { Link } from "react-router-dom";

const Position = () => {
  return (
    <>
      <Navbar />
      <div className="position-layout">
        <ul>
          <li>
            <Link to="/daily">Daily</Link>
          </li>
          <li>
            <Link to="/weekly">Weekly</Link>
          </li>
          <li>
            <Link to="/alltime">All Time</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Position;
