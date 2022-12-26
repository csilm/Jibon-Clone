import {
  faClock,
  faCrosshairs,
  faLocationCrosshairs,
  faMap,
  faMapMarker,
  faMapMarkerAlt,
  faMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import eventList from "../../testData/eventfakeData";
import "../../Scss/EventLatest/EventLatest.scss";
import { Link } from "react-router-dom";
const EvenLatest = () => {
  const color_list = [
    "#E24443",
    "#303D4D",
    "#F9BAAC",
    "indianred",
    "MediumAquaMarine",
    "MediumPurple",
    "Rebeccapurple",
    "sandybrown",
    "seagreen",
    "palevioletred",
    "lightsteelblue",
    "teal",
  ];

  return (
    <div className="section-gap">
      <div className="container">
        <div className="text-center">
          <h3 className="custom-sub-title cmb-10">volunteer for Jibon</h3>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>

        <div className="row g-4 cmt-15">
          {eventList.map((item) => {
            const random_color =
              color_list[Math.floor(Math.random() * color_list.length)];
            return (
              <div key={item.id} className="col-lg-6">
                <div className="event-card">
                  <div
                    style={{ backgroundColor: random_color }}
                    className="date-container d-flex align-items-center justify-content-center"
                  >
                    <h5>
                      <span className="cmr-10">{item.date}</span>
                      <span>{item.month}</span>
                    </h5>
                  </div>
                  <div className="event-img-container">
                    <img
                      className="img-fluid"
                      src="https://www.zindagitrust.org/img/sections/1n.jpg"
                      alt=""
                    />
                  </div>
                  <div className="event-info-container">
                    <h5>{item.title} </h5>
                    <p className="cmb-5">
                      <span style={{ verticalAlign: "baseline" }}>
                        {" "}
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Chittagong
                      </span>{" "}
                    </p>
                    <p>
                      <span style={{ verticalAlign: "baseline" }}>
                        {" "}
                        <FontAwesomeIcon icon={faClock} /> 11 am
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="text-center cmy-35">
            <Link to="/">
              <button className="custom-btn-lg custom-btn-danger">
                join as volunteer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvenLatest;
