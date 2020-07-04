import React from 'react';

const SuccessStory = () => {
    return(
        <React.Fragment>
            <section className="section bg-cover" data-background="images/backgrounds/success-story.jpg">
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </React.Fragment>
    )
}

export default SuccessStory;