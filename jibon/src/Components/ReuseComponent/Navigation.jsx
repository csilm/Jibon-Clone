import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);
  const navColorChange = () => {
    if (window.scrollY >= 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  window.addEventListener("scroll", navColorChange);
  return (
    <div
      className={!scrolling ? "custom-nav fixed-top" : "scroll-nav fixed-top"}
    >
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          <Link to="/" className="custom-nav-brand">
            JIBON
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span>
              <FontAwesomeIcon icon={faBars} className="custom-icon" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item">
                <Link to="/" className="custom-nav-link">
                  about us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="custom-nav-link">
                  our work
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="custom-nav-link">
                  impact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="custom-nav-link">
                  volunteer
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="custom-nav-link">
                  latest
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="custom-nav-link">
                  career
                </Link>
              </li>


              <li className="nav-item">
                <Link to="/" className="custom-nav-link">
                  contact
                </Link>
              </li>
              <li className="nav-item">
<<<<<<< HEAD
                <Link to="/login" className="custom-nav-link ">
                  Login
                </Link>
              </li>

=======
                <Link to="/events" className="custom-nav-link">
                  Events
                </Link>
              </li>
>>>>>>> 67693f68b12a89c27bfa31e46cb5b118d43e0327
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    scrolling
                      ? "btn btn-outline-success"
                      : "btn btn-outline-success"
                  }
                >
                  DONATE NOW
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
