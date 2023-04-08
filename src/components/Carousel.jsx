import React from "react";
import Slider from "react-slick";

function Carousel() {
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
            src="https://image.tmdb.org/t/p/original/hT9ZUwLN5tB2O7miBu1oIMJFqJT.jpg"
            className="img-fluid w-100 img-carousel"
            alt="image-film"
          />
          {/* <div className="prueba">
            <h1 className="text-red title-carousel">Title</h1>
            <p className="text-red">Description</p>
          </div> */}
          <div className="carousel-fade"></div>
        </div>
        <div className="container-carousel">
          <img
            src="https://image.tmdb.org/t/p/original/ovM06PdF3M8wvKb06i4sjW3xoww.jpg"
            className="img-fluid w-100 img-carousel"
            alt="image-film"
          />
        </div>
        <div className="container-carousel">
          <img
            src="https://image.tmdb.org/t/p/original/muw9YsAsSd3DDRme2OEJJoVqun9.jpg"
            className="img-fluid w-100 img-carousel"
            alt="film"
          />
        </div>
        <div className="container-carousel">
          <img
            src="https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg"
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
