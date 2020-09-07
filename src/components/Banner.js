import React from 'react';
import BannerItem from './BannerItem';
import BannerItem0 from './BannerItem0';
import Banner_pic from '../images/banner/banner-feature.png' 

const Banner = () => {
    return(
        <React.Fragment>
          
            <section className="bg-gray overflow-md-hidden">
  <div className="container-fluid p-0">
    <div className="row">
      <div className="col-xl-6 col-lg-6 pl-5 pt-3">
        <BannerItem0 iname="ti-book" heading="Handouts and Lectures" body="Class wise handouts with recorded video lectures: We shall provide class wise study materials, brief handouts (for easy understanding at home) and also provide class recording."></BannerItem0>
      </div>
      <div className="col-xl-6 col-lg-6 pl-5 pt-3">
        <BannerItem0 iname="ti-blackboard" heading="Practice Problems" body="We provide chapterwise practice problems from various reputed books and coaching centres as well as our own customized study materials."></BannerItem0>
      </div>
      </div>
    <div className="row no-gutters">
      <div className="col-xl-4 col-lg-5 align-self-end">
        <img className="img-fluid w-100" src={Banner_pic} alt="banner-feature"></img>
      </div>
      
      <div className="col-xl-8 col-lg-7">
        <div className="row feature-blocks bg-gray justify-content-between">
            <BannerItem iname="ti-agenda" heading="Mock Test" body=" Chapter wise online mock test: The mock test will be in a cumulative manner."></BannerItem>
            <BannerItem iname="ti-write" heading="Doubt Clearing" body="Doubt clearing and discussion sessions after every mock test"></BannerItem>
            <BannerItem iname="ti-blackboard" heading="Videos" body="Video solutions of practice sets to improve conceptual understanding."></BannerItem>
            <BannerItem iname="ti-book" heading="Study plan" body=" Effective study plan to cover all the courses under the given time."></BannerItem>
            </div>
            </div>
            </div>
            </div>
            </section>
        </React.Fragment>
    )
}

export default Banner;