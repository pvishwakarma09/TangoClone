import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Position.css";

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
        <div className="containers">
          <div className="left-container">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="row">
                <div className="avatar">
                  <img src={"public/assets/catlogo.png"} alt="Avatar" />
                </div>
                <div className="info">
                  <span className="name">Name</span>
                  <span className="subscribers">1000</span>
                  <span className="views">3000</span>
                  <button className="follow-button">Follow</button>
                </div>
              </div>
            ))}
          </div>
          <div className="right-container">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="card-row">
                <div className="card">Card 1</div>
                <div className="card">Card 2</div>
                <div className="card">Card 3</div>
                <div className="card">Card 4</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Position;
