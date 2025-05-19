import React from 'react';
import './footer.css'
function Footer() {
  return (
    <div>
      <div className="container  footercontainer">
        <div className="row rowfoter">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
                <h2 className="footer-heading mb-4">About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
              </div>
              <div className="col-md-6 ml-auto">
                <h2 className="footer-heading mb-4">Features</h2>
                <ul className="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                {/* <h2 className="footer-heading mb-4">Follow Us</h2> */}
                <ul>
                  <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h2 className="footer-heading mb-4">Subscribe Newsletter</h2>
            <form action="#" method="post">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control border-secondary text-white bg-transparent"
                  placeholder="Enter Email"
                  aria-label="Enter Email"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary text-white" type="button" id="button-addon2">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12 footerbottm">
            <hr />
            <div className="border-top pt-5">
              <p>
                &copy; {new Date().getFullYear()} Your Company Name
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;