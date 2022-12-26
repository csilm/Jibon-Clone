import React from "react";
import { Link } from "react-router-dom";
import "../../Scss/HomePageScss/Donation.scss";

const Donation = () => {
  return (
    <div id="donation-section" className="section-gap">
      <div className="shadow text-news-print">
        <div className="half-cover cpy-100">
          <div className="container">
            {/* header */}
            <div className="text-center cmb-50">
              <h3 className="custom-sub-title cmb-10">make a donation</h3>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            </div>

            {/* content */}
            <div className="row align-items-center">
              <div className="col-md-7 cmt-30">
                <div className="cmb-30">
                  <h3 className="custom-sub-title">
                    Invest in bangladeshi children today
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, natus!
                  </p>
                </div>

                <div className="money-box-holder d-flex justify-content-start align-items-center">
                  <div className="money-box">$50</div>
                  <div className="money-box">$100</div>
                  <div className="money-box">$500</div>
                  <div className="money-box">$1000</div>
                  <div className="money-box">other</div>
                </div>

                <div className="row cmt-30">
                  <div className="col-8">
                    <div className="input-group cmy-10">
                      <input
                        type="text"
                        className="form-control custom-input text-white"
                        placeholder="Recipient's username"
                      />
                      <Link
                        to="/"
                        className="input-group-text custom-btn-sm custom-btn-orange"
                      >
                        donate now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 box-model p-0">
                <img
                  src="https://www.zindagitrust.org/img/sections/3.jpg"
                  className="img-fluid donation-img"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
