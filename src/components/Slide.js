import React from 'react';
import $ from 'jquery'
import '../plugins/bootstrap/bootstrap.min.css'
import '../plugins/slick/slick.css'
import '../plugins/themify-icons/themify-icons.css'
import '../plugins/animate/animate.css'
import '../plugins/aos/aos.css'
import '../plugins/venobox/venobox.css'
import '../css/style.css'
import preloader from '../images/preloader.gif'
import bg from '../images/banner/banner-1.jpg';

const Slide = (props) => {




    return(
        <React.Fragment>
        <div className="hero-slider-item">
        <div className="row">
          <div className="col-md-8">
           <h1 className="text-white" dataAnimationOut="fadeOutDown" dataDelayOut="5" dataDurationIn=".3" dataAnimation-in="fadeInUp" dataDelayIn=".1">{props.heading}</h1>
            <p className="text-muted mb-4" dataAnimationOut="fadeOutDown" dataDelayOut="5" dataDurationIn=".3" dataAnimationIn="fadeInUp" dataDelayIn=".4">{props.body}</p>
            <a href="contact.html" className="btn btn-primary-outline" dataAnimationOut="fadeOutDown" dataDelayOut="5" dataDurationIn=".3" dataAnimationIn="zoomIn" dataDelayIn=".7">Apply now</a>
          </div>
        </div>
      </div>
        </React.Fragment>
    )
}

export default Slide;