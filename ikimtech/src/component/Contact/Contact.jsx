import React from 'react';
import '../../component/Contact/contact.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {
  return (
    <div className='footer'>
      <section className="site-section bg-light" id="contact-section">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="textblack h1 site-section-heading">Contact Us</h2>
          </div>
        </div>
        <div className="container">
          <div className="row contact">
            <div className="col-md-7 mb-5 contactform">
              <form action="#" className="p5 bg-white">
                <h2 className="h4 text-black mb-5">Contact Form</h2>

                <div className="row formgroup">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">First Name</label>
                    <input type="text" id="fname" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="text-black" htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" className="form-control" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="subject">Subject</label>
                    <input type="text" id="subject" className="form-control" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <input type="submit" value="Send Message" className="btn btn-primary btn-md text-white" />
                  </div>
                </div>
              </form>
            </div>
            {/* <div className="col-md-5">
              <div className="p-4 mb-3 bg-white contactleft">
                <p className="mb-0 font-weight-bold">Address</p>
                <p className="mb-4">Jemo, Addis Ababa, Ethiopia</p>

                <p className="mb-0 font-weight-bold">Phone</p>
                <p className="mb-4"><a href="tel:+251951207168">+251 951 207 168</a></p>

                <p className="mb-0 font-weight-bold">Email Address</p>
                <p className="mb-0"><a href="mailto:ikimtechco@gmail.com">ikimtechco@gmail.com</a></p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;