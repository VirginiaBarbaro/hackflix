import React from "react";
import Slider from "react-slick";
import { useRef } from "react";

function Carousel() {

  const AutoPlayMethods = () => {
    const sliderRef = useRef(null);

    const play = () => {
      sliderRef.current.slickPlay();
    };

    const pause = () => {
      sliderRef.current.slickPause();
    };
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
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
    <div>
      <Slider {...settings}>
        <div className="container-carousel">
          <img
            src="https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg"
            className="img-fluid w-100 img-carousel"
            alt="image-film"
          />
        </div>
        <div className="container-carousel">
          <img
            src="https://image.tmdb.org/t/p/original/qjGrUmKW78MCFG8PTLDBp67S27p.jpg"
            className="img-fluid w-100 img-carousel"
            alt="image-film"
          />
        </div>
        <div className="container-carousel">
          <img
            src="https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
            className="img-fluid w-100 img-carousel"
            alt="film"
          />
        </div>
        <div className="container-carousel">
          <img
            src="https://image.tmdb.org/t/p/original/f8sYAxcM3zRwe4P8cnjKFidq3Jh.jpg"
            className="img-fluid w-100 img-carousel"
            alt="film"
          />
        </div>
        <div className="container-carousel">
          <img
            src="https://image.tmdb.org/t/p/original/e782pDRAlu4BG0ahd777n8zfPzZ.jpg"
            className="img-fluid w-100 img-carousel"
            alt="film"
          />
        </div>
        <div className="container-carousel">
          <img
            src="https://image.tmdb.org/t/p/original/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg"
            className="img-fluid w-100 img-carousel"
            alt="film"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
