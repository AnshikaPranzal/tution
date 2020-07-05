import React from 'react';
import BannerItem from './BannerItem';
import Banner_pic from '../images/banner/banner-feature.png' 

const Banner = () => {
    return(
        <React.Fragment>
            <section className="bg-gray overflow-md-hidden">
  <div className="container-fluid p-0">
    <div className="row no-gutters">
      <div className="col-xl-4 col-lg-5 align-self-end">
        <img className="img-fluid w-100" src={Banner_pic} alt="banner-feature"></img>
      </div>
      <div className="col-xl-8 col-lg-7">
        <div className="row feature-blocks bg-gray justify-content-between">
            <BannerItem iname="ti-book" heading="Scholorship News" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad"></BannerItem>
            <BannerItem iname="ti-blackboard" heading="Our Notice Board" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad"></BannerItem>
            <BannerItem iname="ti-agenda" heading="Our Achievements" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad"></BannerItem>
            <BannerItem iname="ti-write" heading="Admission Now" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad"></BannerItem>
            </div>
            </div>
            </div>
            </div>
            </section>
        </React.Fragment>
    )
}

export default Banner;