import React from 'react';

const BannerItem = (props) => {
  return (
    <React.Fragment>
      <div className='col-sm-6 col-xl-5 mb-xl-5  mb-lg-3 mb-4 text-center text-sm-left'>
        <i className={`${props.iname} mb-xl-4 mb-lg-3 mb-4 feature-icon`}></i>
        <h3 className='mb-xl-4 mb-lg-3 mb-4 '>{props.heading}</h3>
        <p className='text-justify text-last-center'>{props.body}</p>
      </div>
    </React.Fragment>
  );
};

export default BannerItem;
