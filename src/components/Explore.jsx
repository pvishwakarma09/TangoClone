import React from "react";
import { Link } from "react-router-dom";
// import { Card } from "react-bootstrap";
import Card2 from "./Card2";
import "./Explore.css";

const Explore = () => {
  return (
    <>
      <div className="explore">
        <ul>
          <Link to="/Newest" className="new-one">
            <li>New</li>
          </Link>
          <Link to="/Artist" className="new-one">
            <li>Artist</li>
          </Link>
          <Link to="/Nearby" className="new-one">
            <li>Nearby</li>
          </Link>
          <Link to="/Popular" className="new-one">
            <li>Popular</li>
          </Link>
          <Link to="/Audio" className="new-one">
            <li>Audio</li>
          </Link>
        </ul>
      </div>
      <Card2 />
    </>
  );
};

export default Explore;
