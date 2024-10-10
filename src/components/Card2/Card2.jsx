// export default Card;
import React from "react";
import "./Card.css";

const MainSection = () => {
  const videos = []; // empty array
  // Generate 100 more video objects
  for (let i = 1; i <= 100; i++) {
    videos.push({
      id: i,
      title: `Video ${i}`,
      description: `Description for Video ${i}`,
    });
  }

  return (
    <>
      <div className="main-section " style={{marginTop:"20px"}}>
        {videos.map((video) => (
          <div key={video.id} className="first-card">
            <h2>{video.title}</h2>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainSection;
