import React from 'react';
import $ from 'jquery'
import '../plugins/bootstrap/bootstrap.min.css'
import '../plugins/slick/slick.css'
import '../plugins/themify-icons/themify-icons.css'
import '../plugins/animate/animate.css'
import '../plugins/aos/aos.css'
import '../plugins/venobox/venobox.css'
import '../css/style.css'
import Slider from "react-slick";
import 'slick'
// eslint-disable-next-line no-unused-vars
import preloader from '../images/preloader.gif'
import Slide from './Slide';
import bg from '../images/banner/banner-1.jpg';

const SliderList = () => {
  var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: `url(${bg})`
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    initialSlide: 0, 
  };

  

    return(
        <React.Fragment>
            <section className="hero-section overlay bg-cover" style={ sectionStyle }>
            <div className="container">
            <div className="hero-slider">
            <Slider {...settings}>
            <Slide heading="Your bright future is our mission!" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer"></Slide>
              <Slide heading="We are here for you!" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer"></Slide>
              <Slide heading="Your can count on us." body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer"></Slide>
            </Slider>
                
                </div>
            </div>
            </section>
        </React.Fragment>
    )
};
export default SliderList;