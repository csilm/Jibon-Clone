import React from "react";
import { Link } from "react-router-dom";
import testData from "../../testData/test_data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import "../../Scss/HomePageScss/Impact.scss";

const Impact = () => {
  const testSlice = testData.slice(0, 4);
  return (
    <div id="impact-section" className="section-gap">
      <div className="container">
        <div className="text-center cmb-50">
          <h3 className="custom-sub-title cmb-10">our impact</h3>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>

        <div className="row">
          {testSlice.map((item) => {
            return (
              <div className="col-md-3" key={item.id}>
                <div className="cart">
                  <img src={item.img} className="img-fluid cart-img" alt="" />
                  <div className="inner-content d-flex justify-content-center align-items-center">
                    <div className="text-news-print">
                      <div className="cart-body">
                        <h4 className="cart-title">{item.title}</h4>
                        <p className="cart-detail">{item.detail}</p>
                      </div>
                      <div className="cart-footer">
                        <Link to="/" className="custom-btn-sm-borderless">
                          read more
                          <FontAwesomeIcon
                            icon={faAngleDoubleRight}
                            className="custom-icon cml-10"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="shutter"></div>
                  <div className="under-shutter"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Impact;
