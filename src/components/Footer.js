import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_box mt-5 bg-primary about_section">
      <div className="row">
        <div className="col-lg-3">
          <a href="index.html" className="navbar-brand text-white">
            KHEEMNET
          </a>
        </div>
        <div className="col-lg-6">
          <ul className="footer_list">
            <li>
              <NavLink to="/" className="footer_link">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="footer_link">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/product" className="footer_link">PRODUCTS</NavLink>
            </li>
            <li>
              <NavLink to="/fmcgs" className="footer_link">FMCGS</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="footer_link">CONTACT</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <p className="reserved">
            &copy; 2022 Kheemnet Global. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer
