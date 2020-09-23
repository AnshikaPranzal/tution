import React from 'react';

import bg from '../images/banner/tutor.jpeg';
// import bg from "../images/backgrounds/page-title.jpg";

const Title = (props) => {
  var sectionStyle = {
    padding: '22.5vh 10vw',
    width: '100%',

    height: '75vh',
    backgroundImage: `url(${bg})`,
  };
  return (
    <React.Fragment>
      <section className='page-title-section overlay' style={sectionStyle}>
        <div className='container1'>
          <div className='row'>
            <div className='col-lg-8 col-md-10 col-sm-12'>
              <ul className='list-inline custom-breadcrumb'>
                <li className='list-inline-item'>
                  <h1 className='  text-white'>{props.title}</h1>
                </li>
              </ul>
              <p className='text-lighten'>{props.body}</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Title;
