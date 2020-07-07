import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../images/backgrounds/page-title.jpg'

const Title = (props) => {
  var sectionStyle = {
    width: "100%",
    height: "500px",
    backgroundImage: `url(${bg})`
  };
    return(
      
        <React.Fragment>
            <section className="page-title-section overlay" style={ sectionStyle }>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <ul className="list-inline custom-breadcrumb">
                    <li className="list-inline-item"><Link className="h2 text-primary font-secondary" style={{fontSize: '9vmin'}}>{props.title}</Link></li>
                    <li className="list-inline-item text-white h3 font-secondary @@nasted"></li>
                  </ul>
                  <p className="text-lighten">{props.body}</p>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
    )
}

export default Title;