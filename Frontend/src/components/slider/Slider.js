import React from 'react';
import "./Slider.css";
import Slider from "react-slick";
const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };


  return (
    <div>
 <div className='container sld'>
     <h1 className='mb-4 wlc'>--Notre réflexion sur l'avenir-- </h1>
        <Slider {...settings}>
          <div>
          <img className='ggg' src="/images/im1.jpg" />

          </div>
       
          <div>
          <img className='ggg' src="/images/im2.jpg" />
          
          </div>
          <div>
          <img className='ggg' src="/images/im3.jpg" />
          
          </div>
          <div>
          <img className='ggg' src="/images/im4.jpg" />
         
          </div>
         
        </Slider>
      </div>
    </div>
  )
}

export default Sliders