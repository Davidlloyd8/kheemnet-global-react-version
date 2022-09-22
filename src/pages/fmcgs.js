import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import electronics from "../images/vecteezy_top-view-of-electronic-devices-with-notebook-glasses-and_10127083_231 (1).jpg";
import groceries from "../images/vecteezy_foodstuffs-collection-for-donation-to-help-people_7973082_875.jpg";
import toys from "../images/vecteezy_video-game-controller-on-white-background_10102612_544.jpg";
import health from "../images/vecteezy_3d-render-of-blank-cosmetics-skincare-product-or-packaging_8918436_287.jpg";
import babyProducts from "../images/vecteezy_mock-up-podium-for-product-in-children-room-kids-room-pink_7765218_5.jpg";
import sportingGoods from "../images/vecteezy_sports-for-good-health_7895063_138.jpg";
import "../css/fmcgs.css";

function Fmcgs() {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      {/* End of Navigation */}
      {/* Hero Section */}
      <section className="hero_section">
        <h1>FAST MOVING CONSUMER GOODS</h1>
      </section>
      {/* End of Hero Section */}
      <div className="container-fluid" id="fmcgs_container">
        {/* About Fmcgs */}
        <div className="about_section">
          <p className="text-center">
            Fast-moving consumer goods (FMCG), also known as consumer packaged
            goods (CPG), are products that are sold quickly and at a relatively
            low cost. Examples include non-durable household goods such as
            packaged foods, beverages, toiletries, candies, cosmetics,
            over-the-counter drugs, dry goods, and other consumables. Fast
            moving consumer goods have a high inventory turnover and are
            contrasted with specialty items which have lower sales and higher
            carrying charges. Many retailers carry only FMCGs; particularly
            hypermarkets, big box stores and warehouse club stores. Small
            convenience stores also stock fast moving goods; the limited shelf
            space is filled with higher turnover items.
          </p>
        </div>
        {/* End of About Fmcgs */}
        {/* Products Category */}
        <div className="about_section">
          <h1 className="text-center mb-5" id="fmcgs_product">
            FMCGS PRODUCT CATEGORY
          </h1>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 mb-5">
              <div className="card h-100 p-3">
                <img src={electronics} className="card-img-top" alt="ELECTRONICS" />
                <div className="card-body mt-5">
                  <h2 className="card-title">ELECTRONICS</h2>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 mb-5">
              <div className="card h-100 p-3">
                <img src={groceries} className="card-img-top" alt="GROCERIES" />
                <div className="card-body mt-5">
                  <h2 className="card-title">GROCERIES</h2>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 mb-5">
              <div className="card h-100 p-3">
                <img src={toys} className="card-img-top" alt="TOYS AND GAMES" />
                <div className="card-body mt-5">
                  <h2 className="card-title">TOYS AND GAMES</h2>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 mb-5">
              <div className="card h-100 p-3">
                <img
                  src={health}
                  className="card-img-top"
                  alt="HEALTH AND BEAUTY"
                />
                <div className="card-body mt-5">
                  <h2 className="card-title">HEALTH AND BEAUTY</h2>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 mb-5">
              <div className="card h-100 p-3">
                <img
                  src={babyProducts}
                  className="card-img-top"
                  alt="BABY PRODUCTS"
                />
                <div className="card-body mt-5">
                  <h2 className="card-title">BABY PRODUCTS</h2>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 mb-5">
              <div className="card h-100 p-3">
                <img
                  src={sportingGoods}
                  className="card-img-top"
                  alt="SPORTING GOODS"
                />
                <div className="card-body mt-5">
                  <h2 className="card-title">SPORTING GOODS</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Product Category */}
      </div>
      {/* Footer */}
      <Footer />
      {/* End of Footer */}
    </>
  );
}

export default Fmcgs;
