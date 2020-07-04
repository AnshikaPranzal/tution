import React from 'react';

const TopHeader = () =>{
    return(
        <React.Fragment>
            <div className="top-header py-2 bg-white">
    <div className="container">
      <div className="row no-gutters">
        <div className="col-lg-4 text-center text-lg-left">
          <a className="text-color mr-3" href="callto:+443003030266"><strong>CALL</strong> +44 300 303 0266</a>
          <ul className="list-inline d-inline">
            <li className="list-inline-item mx-0"><a className="d-inline-block p-2 text-color" href="#"><i className="ti-facebook"></i></a></li>
            <li className="list-inline-item mx-0"><a className="d-inline-block p-2 text-color" href="#"><i className="ti-twitter-alt"></i></a></li>
            <li className="list-inline-item mx-0"><a className="d-inline-block p-2 text-color" href="#"><i className="ti-linkedin"></i></a></li>
            <li className="list-inline-item mx-0"><a className="d-inline-block p-2 text-color" href="#"><i className="ti-instagram"></i></a></li>
          </ul>
        </div>
        <div className="col-lg-8 text-center text-lg-right">
          <ul className="list-inline">
            <li className="list-inline-item"><a className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="notice.html">notice</a></li>
            <li className="list-inline-item"><a className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="research.html">research</a></li>
            <li className="list-inline-item"><a className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="scholarship.html">SCHOLARSHIP</a></li>
            <li className="list-inline-item"><a className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="#" data-toggle="modal" data-target="#loginModal">login</a></li>
            <li className="list-inline-item"><a className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="#" data-toggle="modal" data-target="#signupModal">register</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
        </React.Fragment>
        )
    };
    export default TopHeader;