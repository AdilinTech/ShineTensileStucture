import React from "react";

const Main = () => {
  const projects = [
    "/images/project1.jpg", "/images/project2.jpg", "/images/project3.jpg", 
    "/images/project4.jpg", "/images/project5.jpg", "/images/project6.jpg", 
    "/images/project7.jpg", "/images/project8.jpg", "/images/project9.jpg"
  ];

  return (
    <main className="main-content">
      <h2>Our <span>Projects</span></h2>
      <div className="project-gallery">
        {projects.map((img, index) => (
          <div className="project-item" key={index}>
            <img src={img} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <span>0 1</span>
        <button>←</button>
        <button>→</button>
      </div>
    </main>
  );
};

export default Main;
