import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import aboutImage from "../images/vecteezy_engineer-checking-and-inspecting-at-mdb-panel-they-working_6775315_812.jpg";
import engineer from "../images/vecteezy_electrical-engineering-man_9346215_114.jpg";
import "../css/about.css";

function About() {
  return (
    <>
      {/* Navigation Bar */}
      <Navigation />
      {/* End of Navigation Bar */}
      {/* Hero Section */}
      <section>
        <h1>ABOUT US</h1>
      </section>
      {/* End of Hero Section */}
      {/* About Container */}
    <div class="container-fluid about_container">
      <div class="row about_section">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 mt-4">
          <h1 class="mb-4">WELCOME TO KHEEMNET GLOBAL</h1>
          <p class="about_text">
            Kheemnet Global is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </p>
        </div>
        <div
          class="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 h-100 mt-4 hide_img"
        >
          <img
            src={aboutImage}
            alt=""
            class="img-fluid"
          />
        </div>
        <h1 class="text-center mt-5" id="about_why">WHY CHOOSE KHEEMNET GLOBAL?</h1>
        <div
          class="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 h-100 mt-5 hide_img"
        >
          <img
            src={engineer}
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 mt-5">
          <h4>
            <i class="fa-solid fa-circle-check"></i> Superior precise quality
          </h4>
          <p>
            We at kheemnet global provides you with high qualities just as PETE
            FOWLER usually say about quality -
            <q
              >In manufacturing, a measure of excellence or a state of being
              free from defects, deficiencies and significant variations.</q
            >
          </p>
          <h4>
            <i class="fa-solid fa-circle-check"></i> Connecting with core
            consumers
          </h4>
          <ol>
            <li>
              <h6>No one-size-fits-all approach</h6>
              <p>
                Consumers may purchase a product for different reasons, so it is
                important for kheemnet to tailor their marketing approaches to
                multiple audiences. People want to feel as though the company
                recognizes that they are individuals -- not part of a group --
                so it is important for kheemnet to cater to this.
              </p>
            </li>
            <li>
              <h6>Promptly respond to concerns</h6>
              <p>
                The faster a company responds to customer concerns, the higher
                the likelihood that customers will be satisfied with their
                experiences and return to the company for their future needs.
              </p>
            </li>
            <li>
              <h6>Manage customer expectations</h6>
              <p>
                It is important for organizations to understand what their
                customer is looking for and to create experiences with them in
                mind.
              </p>
            </li>
          </ol>
          <h4>
            <i class="fa-solid fa-circle-check"></i> The problem with
            personalisation
          </h4>
          <p>
            Personalization is the act of tailoring an experience or
            communication based on information a company has learned about an
            individual. Just like you may tailor a gift for a good friend,
            companies can tailor experiences or communications based on
            information they learn about their prospects and customers. Kheemnet
            Global provides PRIVACY, SECURITY, JUSTICE, EQUITY & ACCESSIBILITY.
          </p>
          <h4><i class="fa-solid fa-circle-check"></i> Creating Value</h4>
          <p>
            Creating value means maximizing benefits within an acceptable price
            point. Benefits and cost are the two key components of customer
            value. Benefits can include aspects like quality, popularity,
            accessibility, convenience and longevity.
          </p>
        </div>
      </div>
    </div>
    {/* End of About Container */}
      {/* Footer */}
      <Footer />
      {/* End of Footer */}
    </>
  );
}
export default About;
