import React from 'react';
import '../plugins/bootstrap/bootstrap.min.css'
import '../plugins/slick/slick.css'
import '../plugins/themify-icons/themify-icons.css'
import '../plugins/animate/animate.css'
import '../plugins/aos/aos.css'
import '../plugins/venobox/venobox.css'
import '../css/style.css'
import { Link } from 'react-router-dom';

const Slide = (props) => {




    return(
        <React.Fragment>
        <div className="hero-slider-item">
        <div className="row">
          <div className="col-md-8">
           <h1 className="text-white" dataAnimationOut="fadeOutDown" dataDelayOut="5" dataDurationIn=".3" dataAnimationIn="fadeInUp" dataDelayIn=".1" style={{fontSize: '7vmin'}}>{props.heading}</h1>
            <p className="text-muted mb-4" dataAnimationOut="fadeOutDown" dataDelayOut="5" dataDurationIn=".3" dataAnimationIn="fadeInUp" dataDelayIn=".4">{props.body}</p>
            <Link to='/contact' className=" hvr-bounce-to-top" dataAnimationOut="fadeOutDown" dataDelayOut="5" dataDurationIn=".3" dataAnimationIn="zoomIn" dataDelayIn=".7">Apply now</Link>
          </div>
        </div>
      </div>
        </React.Fragment>
    )
}

export default Slide;