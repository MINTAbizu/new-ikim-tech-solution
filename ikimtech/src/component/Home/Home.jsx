import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import '../../component/Home/home.css'
function Home() {
 let el = useRef(null);
    
  useEffect(() => {
   
    const options = {
      strings: ["Web Development", "Mobile App Development", "UI/UX Design","Video Editing"],
            typeSpeed: 90,
            backSpeed: 90,
            backDelay: 4000,
            startDelay: 1000,
            loop: true,
            showCursor: true
    };
    const typed = new Typed(el.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className='home'>
         <div className="site-blocks-cover overlay" data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
              <div className="row justify-content-center mb-4">
                <div className="col-md-8 text-center typedwords">
                  <h1 className='commonword'>We Love To Build <span className="typed-words" ref={el} /></h1>
                 
                </div>
              </div>
            </div>
             {/* <div className="homebutton">
                    <a data-fancybox className="btn btn-primary btn-md">Read More</a>
                    <a data-fancybox className="btn btn-primary btn-md">Get Started Today</a>
                  </div> */}
          </div>
          
        </div>
        
      </div>

      
      
    </div>
  )
}

export default Home
