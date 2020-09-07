import React from 'react';

const BannerItem = (props) => {
    return(
        <React.Fragment>
            <div className="col-sm-10 col-xl-10 mb-xl-10 mb-lg-3 mb-4 text-center text-sm-left">
            <i className={`${props.iname} mb-xl-4 mb-lg-3 mb-4 feature-icon`}></i>
            <h3 className="mb-xl-4 mb-lg-3 mb-4">{props.heading}</h3>
            <p>{props.body}</p>
          </div>
        </React.Fragment>
    )
}

export default BannerItem;