import React from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from "../../assets/slideshow/main4.png";
//import img2 from "../../assets/slideshow/2.jpg";
import img3 from "../../assets/slideshow/main.jpg";
import css from './CssStyle.module.css';

const carousel = () => {
    return (
      
 <Carousel fade>
    <Carousel.Item interval={5000} >
    <img
      className="d-block w-100"
      src={img3}
      alt="Second slide"
    />
    <Carousel.Caption className={css.Carousel_Item} >
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item interval={5000} >
    <img
      className="d-block w-100"
      src={img1}
      alt="Second slide"
    />
    <Carousel.Caption className={css.Carousel_Item} >
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
     </Carousel.Item>
 
</Carousel>
        
    )
}

export default carousel;
