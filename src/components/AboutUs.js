import React from 'react';
import About_pic from '../images/about/about-us.jpg'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return(
        <React.Fragment>
            <section className="section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 order-2 order-md-1">
        <h2 className="section-title">About Educenter</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat </p>
        <p>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
        <Link to='/about' className="btn btn-primary-outline">Learn more</Link>
      </div>
      <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
        <img className="img-fluid w-100" src={About_pic} alt="about image"></img>
      </div>
    </div>
  </div>
</section>
        </React.Fragment>
    )
}

export default AboutUs;