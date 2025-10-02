import { NavLink } from "react-router-dom";
import "./footer.css"
const Footer = () => {
  return (
    <div className="m-0 p-0">
      <div className="contain bg-black  ">
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0 small text-white">
              Developed with <i className="bi bi-code-square text-white"></i> by
              <a
                href="https://codesaif.in"
                target="_blank"
                className="text-decoration-none text-white hover-text-success"
              >
                Shubham Sonawane
              </a>
            </p>
          </div>
        </div>
      </div>
      {/*  footer */}
      <footer className="custom-footer pt-4">
        <div className="container">
          <div className="row g-4">
            {/* About section */}
            <div className="col-lg-3 col-md-6">
              <h5 className="footer-heading mb-3">About Us</h5>
              <p className="footer-text small">
                The Daily Drive description goes here. Provide brief information
                about your business.
              </p>
              <div className="social-icons">
                <NavLink to="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </NavLink>
                <NavLink to="#" className="social-link">
                  <i className="fab fa-facebook"></i>
                </NavLink>
                <NavLink to="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                </NavLink>
                <NavLink to="#" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </NavLink>
                <NavLink to="#" className="social-link">
                  <i className="fab fa-github"></i>
                </NavLink>
              </div>
            </div>

            {/* Enhandced Quick Link */}
            <div className="col-lg-3 col-md-6">
                <h5 className="footer-heading mb-3">Quick Links</h5>
                <ul className="list-unstyled">
                    <li className="mb-2">
                        <NavLink to="/" className="footer-link">
                            <span className="link-text  bi bi-arrow-right-short link-icon">home</span>
                         
                        </NavLink>
                    </li>
                     
                    <li className="mb-2">
                        <NavLink to="/about" className="footer-link">
                            <span className="link-text  bi bi-arrow-right-short link-icon">about</span>
                         
                        </NavLink>
                    </li>
                  
                  <li className="mb-2">
                        <NavLink to="/ContectUs" className="footer-link">
                            <span className="link-text  bi bi-arrow-right-short link-icon">contact</span>
                         
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Contect info */}
            <div className="col-lg-3 col-md-6">
                <h5 className="footer-heading mb-3">Contact</h5>
                <ul className="list-unstyled footer-text small">
                    <li className="mb-2">
                        <i className="bi bi-geo-alt-fill me-2"></i>
                        123 Street, City, Country
                    </li>
                    <li className="mb-2">
                        <i className="bi bi-telephone-fill me-2"></i>
                        +1 234 567 890
                    </li>
                    <li className="mb-2">
                        <i className="bi bi-envelope-fill me-2"></i>
                        info@example.com
                    </li>
                </ul>
            </div>
            {/* Newsletter with Animation */}
            <div className="col-lg-3 col-md-6">
                <h5 className="footer-heading mb-3">Newsletter</h5>
                <form className="newsletter-form">
                    <div className="input-group mb-3">
                        <input type="email" className="form-control form-control-sm" placeholder="Enter email" />
                        <button className="btn btn-primary btn-sm" type="button">
                            <i className="bi bi-send-fill"></i>
                        </button>
                    </div>
                </form>
                <div className="scroll-top text-end">
                    <button className="btn-scroll-top">
                        <i className="bi bi-arrow-up-circle-fill"></i>
                    </button>
                </div>
            </div>
          </div>
          {/* copyright */}
          <div className="footer-copyright text-center  py-3 mt-4 border-top">
            <small className="footer-text">
                © 2025 The Daily Drive. All rights reserved. <p>privacy | Terms </p>
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
