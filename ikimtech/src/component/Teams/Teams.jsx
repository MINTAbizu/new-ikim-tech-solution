import React from 'react'
import '../Teams/team.css'
import team from '../image/icon/logo.jpg'

function Teams() {
  return (
    <div>
       <div class="site-section border-bottom" id="team-section">
        {/* <h2 class="textblack h1 site-section-heading">Our Team</h2> */}
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-6 text-center">
            
          </div>
        </div>
        <div class="row teamflex container">
         <div className="firstteam row">
           <div class="col-md-6 col-lg-6 mb-5 mb-lg-0 teammemeber" data-aos="fade" data-aos-delay="100">
            <div class="person text-center">
                 <div class="memberimg">
                 <img src={team} alt="Image" class="img-fluid rounded-circle w-50 mb-5"/>

                </div>
              <h3>Mintsenot</h3>
              <p class="position text-muted">Co-Founder, President</p>
                <ul class="socialmedia">
                {/* <li><a href="#" class="p-2"><i class="fab fa-facebook-f"></i></a></li> */}
                <li><a href="#" class="p-2"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#" class="p-2"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#" class="p-2"><i className="fab fa-linkedin"></i></a></li>
            </ul>
            </div>
            
            
          </div>
          <div class="col-md-6 col-lg-6 mb-5 mb-lg-0 teammemeber" data-aos="fade" data-aos-delay="200">
            <div class="person text-center">
                 <div class="memberimg">
                 <img src={team} alt="Image" class="img-fluid rounded-circle w-50 mb-5"/>

                </div>
              <h3>Mintsenot</h3>
              <p class="position text-muted">Co-Founder, COO</p>
                <ul class="social-media">
                {/* <li><a href="#" class="p-2"><i class="fab fa-facebook-f"></i></a></li> */}
                <li><a href="#" class="p-2"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#" class="p-2"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#" class="p-2"><i class="fab fa-linkedin"></i></a></li>
            </ul>
            </div>
          </div>
         </div>

          <div className="firstteam row">
           <div class="col-md-6 col-lg-4 mb-5 mb-lg-0 teammemeber" data-aos="fade" data-aos-delay="100">
            <div class="person text-center">
                 <div class="memberimg">
                 <img src={team} alt="Image" class="img-fluid rounded-circle w-50 mb-5"/>

                </div>
              <h3>Mintsenot</h3>
              <p class="position text-muted">Co-Founder, President</p>
                <ul class="socialmedia">
                {/* <li><a href="#" class="p-2"><i class="fab fa-facebook-f"></i></a></li> */}
                <li><a href="#" class="p-2"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#" class="p-2"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#" class="p-2"><i class="fab fa-linkedin"></i></a></li>
            </ul>
            </div>
            
            
          </div>
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0 teammemeber" data-aos="fade" data-aos-delay="200">
            <div class="person text-center">
                 <div class="memberimg">
                 <img src={team} alt="Image" class="img-fluid rounded-circle w-50 mb-5"/>

                </div>
              <h3>Mintsenot</h3>
              <p class="position text-muted">Co-Founder, COO</p>
                <ul class="social-media">
                <li><a href="#" class="p-2"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#" class="p-2"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#" class="p-2"><i class="fab fa-instagram"></i></a></li>
                {/* <li><a href="#" class="p-2"><i class="fab fa-linkedin"></i></a></li> */}
            </ul>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Teams
