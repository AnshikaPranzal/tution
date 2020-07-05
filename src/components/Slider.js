import React from 'react';
import '../plugins/bootstrap/bootstrap.min.css'
import '../plugins/slick/slick.css'
import '../plugins/themify-icons/themify-icons.css'
import '../plugins/animate/animate.css'
import '../plugins/aos/aos.css'
import '../plugins/venobox/venobox.css'
import '../css/style.css'
import 'slick'
// eslint-disable-next-line no-unused-vars
import preloader from '../images/preloader.gif'
import Slide from './Slide';
import bg from '../images/banner/banner-1.jpg';

const Slider = () => {
    return(
        <React.Fragment>
            <section className="hero-section overlay bg-cover" data-background={bg}>
            <div className="container">
            <div className="hero-slider">
                <Slide heading="Your bright future is our mission" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer"></Slide>
                <Slide heading="Your bright future is our mission" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer"></Slide>
                <Slide heading="Your bright future is our mission" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer"></Slide>
            </div>
            </div>
            </section>
        </React.Fragment>
    )
};
export default Slider;