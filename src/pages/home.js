import { Link, NavLink } from "react-router-dom";
import engineer from "../images/vecteezy_engineer-checking-and-inspecting-at-mdb-panel-they-working_6775315_812.jpg";
import blackandgreen from "../images/blackgreenwire.jpg";
import switchboard from "../images/vecteezy_electrical-safety-in-homes-switchboard-panel-with-switches_4548111.jpg";
import closeup from "../images/vecteezy_close-up-pci-e-cable-video-card_10219705_302.jpg";
import ethernet from "../images/vecteezy_closeup-of-ethernet-cable_7136658_434.jpg";
import wirecable from "../images/vecteezy_wire-cable-reel-laid-on-concrete_9532325_873.jpg";
import electrical from "../images/vecteezy_electrical-engineering-man_9346215_114.jpg";
import contactImage from "../images/vecteezy_hand-use-tablet-computer-with-email-icon__20.jpg";
import fmcgsImage from "../images/vecteezy_woman-is-shopping-in-supermarket-with-face-mask__919.jpg";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navigation />
      {/*End Of Navigation*/}
      {/* Hero Section */}
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" id="hero-image1">
            <div className="hero_text">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="carousel-item" id="hero-image2">
            <div className="hero_text1">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="carousel-item" id="hero-image3">
            <div className="hero_text2">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* //End of Hero Section */}
      {/* //About Section */}
      <div className="container-fluid">
        <div className="row mt-5 mb-5 about_section">
          <div className="col-lg-6 about_section_text">
            <p className="about_section_text_color">Get to know Us</p>
            <h1>WELCOME TO KHEEMNET GLOBAL</h1>
            <p>
              Kheemnet Global is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
            <NavLink
              className="btn btn-primary about_section_text_btn"
              to="/about"
            >
              Read More
            </NavLink>
          </div>
          <div className="col-lg-6" id="hide_box">
            <img src={engineer} alt="" className="img-fluid image_engineer" />
          </div>
        </div>
        {/* //End of About Section */}
        {/* //Product Section */}
        <div className="product_section">
          <h1 className="text-center mb-4">PRODUCTS</h1>
          <div className="row">
            <div className="col-12">
              <div
                id="carouselExampleControls"
                className="carousel slide mb-3"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <div className="row about_section">
                      <div className="col-3">
                        <div className="card h-100">
                          <img
                            src={blackandgreen}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              Black and Green Cable
                            </h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                            <Link href="#" className="btn">
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="card h-100">
                          <img
                            src={switchboard}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">Switchboard Panel</h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                            <Link href="#" className="btn btn-primary">
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-3" id="hide_card">
                        <div className="card h-100">
                          <img
                            src={closeup}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">Close-Up Video Card</h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                            <Link href="#" className="btn btn-primary">
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-3" id="hide_card">
                        <div className="card h-100">
                          <img
                            src={ethernet}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">Ethernet Cable</h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                            <Link href="#" className="btn btn-primary">
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="10000">
                    <div className="row about_section">
                      <div className="col-3">
                        <div className="card h-100">
                          <img
                            src={wirecable}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">Wire Cable</h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                            <Link href="#" className="btn btn-primary">
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="card h-100">
                          <img
                            src={blackandgreen}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              Black and Green Cable
                            </h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                            <Link href="#" className="btn btn-primary">
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-3" id="hide_card">
                        <div className="card h-100">
                          <img
                            src={switchboard}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">Switchboard Panel</h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                            <Link href="#" className="btn btn-primary">
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-3" id="hide_card">
                        <div className="card h-100">
                          <img
                            src={closeup}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">Close-Up Video Card</h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                            <Link href="#" className="btn btn-primary">
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="10000">
                    <div className="row about_section">
                      <div className="col-3">
                        <div className="card h-100">
                          <img
                            src={ethernet}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">Ethernet Cable</h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                            <Link href="#" className="btn btn-primary">
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="card h-100">
                          <img
                            src={blackandgreen}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              Black and Green Cable
                            </h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                            <Link href="#" className="btn btn-primary">
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-3" id="hide_card">
                        <div className="card h-100">
                          <img
                            src={switchboard}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">Switchboard Panel</h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                            <Link href="#" className="btn btn-primary">
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-3" id="hide_card">
                        <div className="card h-100">
                          <img
                            src={wirecable}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">Wire Cable</h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                            <Link href="#" className="btn btn-primary">
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mb-5">
            <Link
              href="#"
              className="btn btn-primary"
              id="product_section_viewall"
            >
              View More
            </Link>
          </div>
        </div>
        {/* //End of Product */}
        {/* //Why the company Section */}
        <div className="row about_section">
          <div className="col-lg-6 px-0" id="hide_box">
            <img src={electrical} alt="" className="img-fluid image_engineer" />
          </div>
          <div className="col-lg-6 px-0" id="wtcs">
            <div className="p-3">
              <p className="about_section_text_color">How we Work</p>
              <h1>We're Leading FMCG Company</h1>
              <p>
                Kheemnet Global is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes
                by accident, sometimes on purpose (injected humour and the
                like).
              </p>
              <div className="wtcs">
                <h3>Why Choose Us</h3>
                <p>
                  <i className="fa-solid fa-circle-check"></i> Superior precise
                  quality
                </p>
                <p>
                  <i className="fa-solid fa-circle-check"></i> Connecting with
                  core consumers
                </p>
                <p>
                  <i className="fa-solid fa-circle-check"></i> The problem with
                  personalisation
                </p>
                <p>
                  <i className="fa-solid fa-circle-check"></i> Creating Value
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* //End of Why the company section */}
        {/* //Fast Moving Consumer Goods */}
        <h1 className="text-center">FAST MOVING CONSUMER GOODS (FMCGS)</h1>
        <div className="row about_section">
          <div className="row">
            <div className="col-lg-6 px-0" id="hide_box">
              <img
                src={fmcgsImage}
                alt=""
                className="img-fluid image-engineer"
              />
            </div>
            <div className="col-lg-6 px-0 fmcg">
              <div className="p-2">
                <h3>FAST MOVING CONSUMER GOODS (FMCGS)</h3>
                <p>
                  Fast-moving consumer goods (FMCG), also known as consumer
                  packaged goods (CPG), are products that are sold quickly and
                  at a relatively low cost. Examples include non-durable
                  household goods such as packaged foods, beverages, toiletries,
                  candies, cosmetics, over-the-counter drugs, dry goods, and
                  other consumables. Fast moving consumer goods have a high
                  inventory turnover and are contrasted with specialty items
                  which have lower sales and higher carrying charges. Many
                  retailers carry only FMCGs; particularly hypermarkets, big box
                  stores and warehouse club stores. Small convenience stores
                  also stock fast moving goods; the limited shelf space is
                  filled with higher turnover items.
                </p>
                <NavLink
                  className="btn btn-primary about_section_text_btn"
                  href="/fmcgs"
                >
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* //End of Fast Moving Consumer Goods */}
        {/* //Contact */}
        <div className="contact_box">
          <h1 className="text-center">HAVE SOME QUESTIONS?</h1>
          <div className="row about_section">
            <div className="col-lg-6 px-0" id="hide_box">
              <img
                src={contactImage}
                alt=""
                className="img-fluid img-engineer h-100"
              />
            </div>
            <div className="col-lg-6">
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
          </div>
        </div>
        {/* End of contact */}
        {/* Footer */}
        <Footer />
        {/* //End of Footer */}
      </div>
    </>
  );
};
export default Home;
