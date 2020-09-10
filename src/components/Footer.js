import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className='newsletter'>
          <div className='bg-primary '>
            <div className='row'>
              <div className='col-md-3 mx-auto py-5 newsletter-block'>
                <h3 className='text-white'>Subscribe Now</h3>
                <form action='#' className='text-center'>
                  <div className='input-wrapper'>
                    <input
                      type='email'
                      className='form-control border-0'
                      id='newsletter'
                      name='newsletter'
                      placeholder='Enter Your Email...'
                    ></input>
                  </div>
                  <button
                    type='submit'
                    value='send'
                    className='hvr-bounce-to-top my-3 border-curved'
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer content --> */}
        <div className='newsfooter bg-footer section border-bottom'>
          <div className='container1'>
            <div className='row'>
              <div className='col-lg-4 col-sm-8 mb-5 mb-lg-0' style={{margin:"auto",marginLeft:"0px"}}>
                {/* <!-- logo --> */}
                <Link className='logo-footer' to='/'>
                  <img
                    className='img-fluid mb-4'
                    src={logo}
                    alt='logo'
                    // style={{ paddingTop: '25%' }}
                  ></img>
                </Link>
              </div>
              <div className='col-lg-3 col-sm-8 mb-5 mb-lg-0'>
                {/* <!-- About Us --> */}
                <h3 className='text-white mb-5'>About Us</h3>
                <p className="footer-text">
                  Our courses offer a good compromise between the continuous
                  assessment favoured by some universities and the emphasis
                  placed on final exams by others.
                </p>
              </div>
            
              {/* <!-- Reach --> */}
              <div className='col-lg-3 col-md-3 col-sm-4 col-6 mb-5 mb-md-0'>
                <h3 className='text-white mb-5'>Reach us</h3>
                
                  <ul className='list-unstyled footer-text'>
                  <ul className='list-unstyled'>
                    <li className='mb-2'>
                      20khb, Kolkata, Kolkata,West Bengal
                    </li>
                    <li className='mb-2'>+1 (2) 345 6789</li>
                    <li className='mb-2'>+1 (2) 345 6789</li>
                    <li className='mb-2'>contact@yourdomain.com</li>
                  </ul>
                </ul>
                
              </div>
              
            </div>
          </div>
        </div>
        {/* <!-- copyright --> */}
        <div className="copyright py-4 bg-footer">
          <div className="container1">
            <div className="row">
              <div className="col-sm-4 text-sm-left text-center">
                <p className="mb-0 footer-text">
                  Designed and maintained by{" "}
                  {/* <script>
                    var CurrentYear = new Date().getFullYear()
                    document.write(CurrentYear)
                  </script> */}
                  {/* ©{" "} */}
                  Infinite Loop
                </p>
              </div>
              <div className='col-sm-4 text-sm-right text-center'>
                <ul className='list-inline'>
                  {/* <li className="list-inline-item"><Link className="d-inline-block p-2" to='/course'>Course</Link></li> */}
                  <li className='list-inline-item'>
                    <Link className='d-inline-block p-2' to='/about'>
                      About
                    </Link>
                  </li>
                  <li className='list-inline-item'>
                    <Link className='d-inline-block p-2' to='/contact'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='col-sm-4 text-sm-right text-center'>
                <ul className='list-inline'>
                  <li className='list-inline-item'>
                    <a className='d-inline-block p-2' href='/'>
                      <i className='ti-facebook text-primary'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a className='d-inline-block p-2' href='/'>
                      <i className='ti-twitter-alt text-primary'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a className='d-inline-block p-2' href='/'>
                      <i className='ti-linkedin text-primary'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a className='d-inline-block p-2' href='/'>
                      <i className='ti-instagram text-primary'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
