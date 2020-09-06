import React from 'react';
import Success_pic from '../images/backgrounds/success-story.jpg'

const SuccessStory = () => {
    var sectionStyle = {
        width: "100%",
        height: "700px",
        backgroundImage: `url(${Success_pic})`
      };
    return(
        <React.Fragment>
            <section className="section bg-cover" style={ sectionStyle } >
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-sm-4 position-relative success-video">
                    <a className="play-btn venobox" href="https://youtu.be/nA1Aqp0sPQo" data-vbtype="video">
                    <i className="ti-control-play"></i>
                    </a>
                </div>
                <div className="col-lg-6 col-sm-8">
                    <div className="bg-white p-5">
                    <h2 className="section-title">Success Stories</h2>

                    <p>After setting a new benchmark for success we planned to expand our support to a wide range of students to create excellence in the domain of education in a systematic manner but in a cost effective way.</p>
                    <p>At “Effervescence” we partner with the best faculties in the domain to create top quality content for the aspirants. The content is designed using our experience and feedback from successful students, so that it ensures learning is fun and engaging. </p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </React.Fragment>
    )
}

export default SuccessStory;