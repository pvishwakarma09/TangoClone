import React from "react";
import { Navbar } from "react-bootstrap";

const Position = () => {
  return (
    <>
      <Navbar />
      <div className="postion">
        <ul>
            <li>Daily</li>
            <li>Weekly</li>
            <li>All time</li>
        </ul>
      </div>
    </>
  );
};

export default Position;
