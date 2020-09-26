import React from 'react';

import bg from '../images/banner/tutor.jpeg';
// import bg from "../images/backgrounds/page-title.jpg";

const Title = (props) => {
  var sectionStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    padding: '0 10vw',
    width: '100%',
    height: '70vh',
    backgroundImage: `linear-gradient(#3A394Eb0,#3A394Ea0),url(${bg})`,
  };
  return (
    <React.Fragment>
      <section className="page-title-section overlay" style={sectionStyle}>
        <div className="row pb-5">
          <div className="col-lg-8 pb-5 col-sm-10">
            <ul className="list-inline custom-breadcrumb">
              <li className="list-inline-item">
                <h1 className="  text-white">{props.title}</h1>
              </li>
            </ul>
            <p className="text-lighten">{props.body}</p>
            <hr className="divider ml-0" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Title;
