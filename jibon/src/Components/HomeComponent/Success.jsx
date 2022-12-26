import React from "react";
import Slider from "react-slick";
import testData from "../../testData/test_data.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Scss/HomePageScss/Success.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Success = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div id="success-section" className="section-gap">
        <div className="container">
          <div className="text-center cmb-20">
            <h3 className="custom-sub-title cmb-10">our success story</h3>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
          </div>

          <div className="row">
            <Slider {...settings}>
              {testData.map((item) => {
                const { id, img, detail } = item;
                return (
                  <div className="col cmy-40" key={id}>
                    <div className="row justify-content-center align-items-center">
                      <div className="col cmx-20">
                        <div className="cart-image">
                          <img src={img} className="img-fluid" alt="img" />
                        </div>

                        <div className="cart cart-content">
                          <h4>hasina parker</h4>
                          <p>{detail}</p>
                          <Link
                            to="/"
                            type="button"
                            className="custom-btn-sm-borderless"
                          >
                            read story
                            <FontAwesomeIcon
                              icon={faAngleDoubleRight}
                              className="custom-icon cml-10"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
