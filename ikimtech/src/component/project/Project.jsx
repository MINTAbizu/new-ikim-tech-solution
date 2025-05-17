import React from 'react';
import '../project/project.css'; 

function Project({ image, title }) {
  return (
    <div className="projectcard">
      <a href={image} className="media-1" data-fancybox="gallery">
        <img src={image} alt={title} className="img-fluid" />
        <div className="media-1-content">
          <h2 className="h5">{title}</h2>
          <h2 className="h6">View</h2>
          <span className="category">Details</span>
        </div>
      </a>
    </div>
  );
}

export default Project;