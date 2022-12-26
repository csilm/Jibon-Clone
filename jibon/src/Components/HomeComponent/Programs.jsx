import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import testData from "../../testData/test_data.js";
import "../../Scss/HomePageScss/Programs.scss";

const Programs = () => {
  const testSlice = testData.slice(0, 3);
  return (
    <div id="programs-section" className="section-gap">
      <div className="container">
        <div className="text-center cmb-50">
          <h3 className="custom-sub-title cmb-10">featured programs</h3>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>

        <div className="row">
          {testSlice.map((item) => {
            return (
              <div className="col-md-4" key={item.id}>
                <div className="cart">
                  <img
                    src={item.img}
                    className="img-fluid cart-img"
                    alt=""
                    style={{ height: "300px" }}
                  />
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Programs;
