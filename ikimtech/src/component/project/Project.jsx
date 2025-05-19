import React from 'react';
import '../project/project.css'; 
import { Link } from 'react-router-dom';

function Project({ image, title }) {
  return (
    <div className="projectcard">
      <Link to={'https://www.ikimtechco.com/index.html#contact'} className="media-1" data-fancybox="gallery">
        <img src={image} alt={title} className="img-fluid" />
        <div className="media-1-content">
          <h2 className="h5">{title}</h2>
          <h2 className="h6">View</h2>
          <span className="category">Details</span>
        </div>
      </Link>
    </div>
  );
}

export default Project;