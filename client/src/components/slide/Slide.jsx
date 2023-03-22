import React from "react";
import "./Slide.scss";
import Slider from "react-slick";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function SampleNextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { style, onClick } = props;

  return (
    <div
      className="next-arrow"
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <AiOutlineArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { style, onClick } = props;

  return (
    <div
      className="prev-arrow"
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <AiOutlineArrowLeft />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const Slide = ({ children, slidesToShow, arrowsScroll, title, type }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: arrowsScroll,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slide">
      <div
        className="slide-container"
        style={{ width: type === "sm" ? "500px" : "1400px" }}
      >
        <h1>{title}</h1>
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};

export default Slide;
