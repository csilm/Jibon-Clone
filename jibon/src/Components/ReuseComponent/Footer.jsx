import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../../Scss/ReusePageScss/Footer.Scss";

const Footer = () => {
  return (
    <footer
      id="footer-section"
      className="section-gap bg-dark text-white cpy-100"
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="connect-part">
              <h5 className="section-header cmb-20 text-news-print">
                stay connected
              </h5>
              <div className="input-group cmy-10">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Recipient's username"
                />
                <Link
                  to="/"
                  className="input-group-text custom-btn-sm custom-btn-orange"
                >
                  join
                </Link>
              </div>
              <div className="d-flex justify-content-start align-items-center cmt-20">
                <div className="custom-icon-box radius-circle cmr-10">
                  <FontAwesomeIcon icon={faFacebook} className="custom-icon" />
                </div>
                <div className="custom-icon-box radius-circle cmr-10">
                  <FontAwesomeIcon icon={faTwitter} className="custom-icon" />
                </div>
                <div className="custom-icon-box radius-circle cmr-10">
                  <FontAwesomeIcon icon={faInstagram} className="custom-icon" />
                </div>
                <div className="custom-icon-box radius-circle">
                  <FontAwesomeIcon icon={faYoutube} className="custom-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="link-part">
              <h5 className="section-header cmb-20 text-news-print">
                useful link
              </h5>
              <ul className="list-unstyled">
                <Link to="/" className="custom-link cmy-5 cpy-5">
                  <li>about us</li>
                </Link>
                <Link to="/" className="custom-link cmy-5 cpy-5">
                  <li>link two</li>
                </Link>
                <Link to="/" className="custom-link cmy-5 cpy-5">
                  <li>our work</li>
                </Link>
                <Link to="/" className="custom-link cmy-5 cpy-5">
                  <li>our involved</li>
                </Link>
                <Link to="/" className="custom-link cmy-5 cpy-5">
                  <li>contact us</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-part">
              <h5 className="section-header cmb-20 text-news-print">
                contact info
              </h5>
              <p className="cmy-5 text-gray">
                House 8/A, Block 7/8, Bahadur Yar Jang Cooperative Housing
                Society, Karachi
              </p>
              <p className="cmy-5 text-gray">
                <span className="fw-bold">Phone:</span> +88 01622335511 /
                111-111-439
              </p>
              <p className="cmy-5 text-gray">
                <span className="fw-bold">Email: </span>info@jibon.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
