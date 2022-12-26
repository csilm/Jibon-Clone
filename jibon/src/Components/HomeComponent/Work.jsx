import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "../../Scss/HomePageScss/Work.scss";
import { Link } from "react-router-dom";
import workData from "../../testData/workData.js";

const Work = () => {
  return (
    <div id="work-section" className="section-gap cpy-25">
      <div className="container">
        <div className="text-center cmb-50">
          <h3 className="custom-sub-title cmb-10">our work</h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,{" "}
            <br />
            perspiciatis quas ab veniam eius quos?
          </h5>
        </div>

        <div className="row justify-content-between align-items-center">
          <div className="col-md-5 cmt-30 box-model p-0">
            <img
              src="https://pbs.twimg.com/media/E_ZLRbzUUAA6LR_.jpg:large"
              className="img-fluid work-img"
              alt="img"
            />
          </div>
          <div className="col-md-6 cpy-25 cpx-25">
            <div className="cmb-25">
              <span className="fw-bold">why</span>
              <h6 className="custom-sub-title cmy-0 text-success">
                school reform
              </h6>
              <p className="cmy-0">
                Reforming government schools is the solution to Pakistan's
                education crisis
              </p>
            </div>

            <div className="row">
              {workData.map((item) => {
                const { id, quotation, shortNote } = item;
                return (
                  <div className="col-12" key={id}>
                    <div className="d-flex justify-content-start align-items-center cmt-25">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className="custom-icon cmr-40"
                      />
                      <div>
                        <p className="cmy-0">{quotation}</p>
                        <h5 className="cmt-5">{shortNote}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cmt-35">
              <Link to="/">
                <button className="custom-btn-lg custom-btn-orange">
                  read more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
