import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../css/contact.css";

function Contact() {
  return (
    <>
      {/* Navigation Bar */}
      <Navigation />
      {/* End of Navigation Bar */}
      {/* Hero Section */}
      <section>
        <h1 className="text-center">CONTACT</h1>
      </section>
      {/* End of Hero Section */}
      {/* Contact Container */}
      <iframe
        src="https://www.google.com/maps/d/embed?mid=14hjCHb8_vkv3TpUGTdpIN4NKF84&ehbc=2E312F"
        className="maps"
        title="This is the map direction of the company"
      ></iframe>
      <div className="container-fluid">
        <div className="row mt-5 about_section">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <form action="" method="post">
              <div className="row">
                <div className="col-lg-12 mb-2">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="First Name"
                    required
                    className="form-control p-3"
                  />
                </div>
                <div className="col-lg-12 mb-2">
                  <input
                    type="text"
                    className="form-control p-3"
                    name=""
                    id=""
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="col-lg-12 mb-2">
                  <input
                    type="email"
                    name=""
                    id=""
                    className="form-control p-3"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="form-control"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="col-lg-12">
                  <input
                    type="submit"
                    value="SEND MESSAGE"
                    className="btn btn-primary form-control p-3"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text-end">
            <div className="contact_info">
              <p>
                <i className="fa-solid fa-location-dot"></i> Plot 2B Area
                Command
              </p>
              <p>
                <i className="fa-solid fa-phone"></i> +234 8100 456 9999, +234
                9146 333 0000
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i>{" "}
                kheemnetglobal@gmail.com
              </p>
              <p>
                <i className="fa-solid fa-up-right-from-square"></i>
                kheemnetglobal.com
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End of Contact Container */}
      {/* Footer */}
      <Footer />
      {/* End of Footer */}
    </>
  );
}

export default Contact;
