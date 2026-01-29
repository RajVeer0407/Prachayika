import React from "react";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

// Custom Arrow Components
const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <AiOutlineArrowRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <AiOutlineArrowLeft />
    </div>
  );
};

const EnhancedSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          arrows: false,
          dots: true,
          fade: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index} className="slide-wrapper">
            <div className="slide-image-container">
              <img src={slide.image} alt={slide.heading} className="slide-image" />
              <div className="slide-overlay"></div>
            </div>
            <div className="slide-content">
              <h2 className="slide-heading">{slide.heading}</h2>
              <p className="slide-description">{slide.desc}</p>
              <div className="slide-divider"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EnhancedSlider;