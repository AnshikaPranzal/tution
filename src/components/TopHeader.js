/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Modal, Button } from 'react-bootstrap';
import ResgisterModal from './RegisterModal'

const TopHeader = () =>{

  const [show, setShow] = useState(false);
  const [showlogin, setshowlogin] = useState(false);

  const handleClosesignup = () => setShow(false);
  const handleShowsignup = () => setShow(true);

  const handleCloselogin = () => setshowlogin(false);
  const handleShowlogin = () => setshowlogin(true);

    return(
        <React.Fragment>
            <div className="top-header bg-white" style={{lineHeight: "0", paddingTop: "2px"}}>
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
        <div className="col-lg-8 text-center text-lg-right" >
          <ul className="list-inline" style={{marginBottom: "0", paddingTop: '5px'}}>
            <li className="list-inline-item"><Link className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" onClick={handleShowlogin} data-toggle="modal" data-target="#loginModal">Login</Link></li>
            <li className="list-inline-item"><Link className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" onClick={handleShowsignup} data-toggle="modal" data-target="#signupModal">Register</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/*SIGN UP MODAL*/}
  <Modal show={show} onHide={handleClosesignup}>
        <ResgisterModal></ResgisterModal>
  </Modal>

{/*LOGIN MODAL*/}
      <Modal show={showlogin} onHide={handleCloselogin}>
        <Modal.Header closeButton>
          <Modal.Title><div className="modal-header border-0">
                <h3>Login</h3>
            </div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-body">
                <form action="#" className="row">
                    <div className="col-12">
                        <input type="text" className="form-control mb-3" id="loginPhone" name="loginPhone" placeholder="Phone"></input>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control mb-3" id="loginName" name="loginName" placeholder="Name"></input>
                    </div>
                    <div className="col-12">
                        <input type="password" className="form-control mb-3" id="loginPassword" name="loginPassword" placeholder="Password"></input>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary-outline">LOGIN</button>
                    </div>
                </form>
            </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleCloselogin}>
            Close
          </Button>
           */}
        </Modal.Footer>
      </Modal>


        </React.Fragment>
        )
    };
    export default TopHeader;