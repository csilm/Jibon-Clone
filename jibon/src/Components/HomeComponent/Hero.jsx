import React from "react";
import "../../Scss/HomePageScss/Hero.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroContent from "../../testData/sliderData.js";
import { Link } from "react-router-dom";

const Hero = () => {
  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      {heroContent.map((item) => {
        const { id, heroTitle, heroSubTitle, image } = item;
        return (
          <div id="hero-section" key={id}>
            <div className="hero-content">
              <div className="container">
                <h1 className="custom-title">{heroTitle}</h1>
                <h3 className="custom-sub-title cmt-10 cmb-10">
                  {heroSubTitle}
                </h3>
                <Link
                  to="/"
                  type="button"
                  className="custom-btn-lg custom-btn-orange cmy-20"
                >
                  donate now
                </Link>
              </div>
            </div>
            <img src={image} className="img-fluid hero-bg-img" alt="img" />
          </div>
        );
      })}
    </Slider>
  );
};

export default Hero;
