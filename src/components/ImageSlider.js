import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full flex justify-center mx-auto items-center my-11">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
        }
export default ImageSlider;
