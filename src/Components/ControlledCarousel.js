import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
        style={{width:"100%", height:"600px", objectFit:"cover"}}
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQIigRH8QkERhJyf1FpB3Djm7-tboP60WLA&usqp=CAU"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{width:"100%", height:"600px", objectFit:"cover"}}
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/462773.jpg"
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{width:"100%", height:"600px", objectFit:"cover"}}
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/pizza-typography-lettering-quotes-bundle-set-tshirt-merchandise_515114-700.jpg"
          alt="Third slide"
        />

        {/* https://www.pizzaah.com/images/slider-3.jpg */}
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;