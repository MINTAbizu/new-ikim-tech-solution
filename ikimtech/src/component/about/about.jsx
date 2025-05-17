import React, { useState } from 'react';
import '../About/about.css'; // Make sure to create a corresponding CSS file
import '../about/about.css'
import logoimage from '..//image/home/hero_1.jpg'
import Teams from '../Teams/Teams';
function About() {
   const [showTeam, setShowTeam] = useState(false); 

  const handleToggleTeam = () => {
    setShowTeam((prev) => !prev); 
  };
  return (
    <div className="about">
      <h1 className="abuttitle">Why Choose Us</h1>
      <div className="description">
        <p>
          At IKIM Tech, we combine innovation, expertise,<br />
          and dedication to deliver exceptional results. <br />
          Here's why we stand out:
        </p>
      </div>

      <div className="aboutcontainer">
        <div className="left-section">
          <div className="first">
            <div className="firstcard">
              <div className="cardlogo">
                <img src={logoimage} alt="Quality Services" />
              </div>
              <div className="carddescription">
                <h4>Quality Services</h4>
              </div>
            </div>
            <div className="firstcard">
              <div className="cardlogo">
                <img src={logoimage} alt="Creative Designers" />
              </div>
              <div className="carddescription">
                <h4>Creative Designers</h4>
              </div>
            </div>
          </div>

          <div className="second">
            <div className="firstcard">
              <div className="cardlogo">
                <img src={logoimage} alt="Quality Services" />
              </div>
              <div className="carddescription">
                <h4>Quality Services</h4>
              </div>
            </div>
            <div className="firstcard">
              <div className="cardlogo">
                <img src={logoimage} alt="Creative Designers" />
              </div>
              <div className="carddescription">
                <h4>Creative Designers</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <p>
            At IKIM Tech, we combine innovation, expertise,<br />
            and dedication to deliver exceptional results. <br />
            Here's why we stand out:
          </p>
           <div className='aboutbutton'>
      <h1>About Us</h1>
      <button onClick={handleToggleTeam}>
        {showTeam ? 'Hide Team' : 'Show Team'}
      </button>

      {showTeam && <Teams />} {/* Conditionally render the Team component */}
    </div>
        </div>
      </div>
    </div>
  );
}

export default About;





