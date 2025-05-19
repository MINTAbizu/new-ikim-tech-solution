import React, { useState } from 'react';
import './about.css'; // Fixed CSS path
import logoimage from '..//image/home/hero_1.jpg';
import Teams from '../Teams/Teams';
import { Link } from 'react-router-dom';

function About() {
   const [showTeam, setShowTeam] = useState(false); 

   const handleToggleTeam = () => {
       setShowTeam((prev) => !prev); 
   };

   return (
       <div className="about container">
           <h1 className="abuttitle">Why Choose Us</h1>
           <div className="description">
               <p>
                   At IKIM Tech, we combine innovation, expertise,<br />
                   and dedication to deliver exceptional results. <br />
                   Here's why we stand out:
               </p>
           </div>

           <div className="aboutcontainer row">
               <div className="left-section col-sm-12 col-lg-6">
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
                               <h4>Customer Support</h4>
                           </div>
                       </div>
                       <div className="firstcard">
                           <div className="cardlogo">
                               <img src={logoimage} alt="Creative Designers" />
                           </div>
                           <div className="carddescription">
                               <h4>Free Consultation</h4>
                           </div>
                       </div>
                   </div>
               </div>

               <div className="right-section col-sm-12 col-lg-6">
               <li className='aboutbutton'> <Link to={'/Teams'} >Teams</Link></li>
                   <div className='aboutbutton row'>
                       <button onClick={handleToggleTeam} className='col-sm-12 col-lg-6'>
                           {/* {showTeam ? 'Hide Team' : 'Show Team'} */}
                       </button>
                       {/* {showTeam && <Teams />} Conditionally render the Team component */}
                   </div>
               </div>
           </div>
       </div>
   );
}

export default About;