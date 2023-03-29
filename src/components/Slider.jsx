import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 100,
          arrows: true,
          dots: true,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
          autoplay: false,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          autoplay: false,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="text-center">
          <img src="/images/single.png" className="mx-auto" alt="" />
          <h4 className="text-[#1CB93B] text-3xl">Cabby -X</h4>
          <p className="my-4">Affordable rides, all to yourself</p>
          <p className="text-blue-500 underline">Learn More</p>
        </div>
        <div className="text-center">
          <img src="/images/share.png" className="mx-auto" alt="" />
          <h4 className="text-[#1CB93B] text-3xl">Cabby -Share</h4>
          <p className="my-4">
            Share the ride with up to one co-rider at a time
          </p>
          <p className="text-blue-500 underline">Learn More</p>
        </div>
        <div className="text-center">
          <img src="/images/single.png" className="mx-auto" alt="" />
          <h4 className="text-[#1CB93B] text-3xl">Uber Comfort</h4>
          <p className="my-4">Newer cars with extra legroom</p>
          <p className="text-blue-500 underline">Learn More</p>
        </div>
        
      </Slider>
    </div>
  );
};
export default SliderComp;
