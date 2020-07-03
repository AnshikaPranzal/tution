import React from 'react';
import '../plugins/bootstrap/bootstrap.min.css'
import '../plugins/slick/slick.css'
import '../plugins/themify-icons/themify-icons.css'
import '../plugins/animate/animate.css'
import '../plugins/aos/aos.css'
import '../plugins/venobox/venobox.css'
import '../css/style.css'
import preloader from '../images/preloader.gif'
import logo from '../images/logo.png'

const Home = () =>{
    return(
        <React.Fragment>
             {/* <!-- preloader start --> */}
  {/* <div className="preloader">
    <img src={preloader} alt="preloader"></img>
  </div> */}
  {/* <!-- preloader end --> */}

{/* <!-- header --> */}
<header className="fixed-top header">
  {/* <!-- top header --> */}
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
  {/* <!-- navbar --> */}
  <div className="navigation w-100">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark p-0">
        <a className="navbar-brand" href="index.html"><img src={logo} alt="logo"></img></a>
        <button className="navbar-toggler rounded-0" type="button" data-toggle="collapse" data-target="#navigation"
          aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ml-auto text-center">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item @@about">
              <a className="nav-link" href="about.html">About</a>
            </li>
            <li className="nav-item @@courses">
              <a className="nav-link" href="courses.html">COURSES</a>
            </li>
            <li className="nav-item @@events">
              <a className="nav-link" href="events.html">EVENTS</a>
            </li>
            <li className="nav-item @@blog">
              <a className="nav-link" href="blog.html">BLOG</a>
            </li>
            <li className="nav-item dropdown view">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Pages
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="teacher.html">Teacher</a>
                <a className="dropdown-item" href="teacher-single.html">Teacher Single</a>
                <a className="dropdown-item" href="notice.html">Notice</a>
                <a className="dropdown-item" href="notice-single.html">Notice Details</a>
                <a className="dropdown-item" href="research.html">Research</a>
                <a className="dropdown-item" href="scholarship.html">Scholarship</a>
                <a className="dropdown-item" href="course-single.html">Course Details</a>
                <a className="dropdown-item" href="event-single.html">Event Details</a>
                <a className="dropdown-item" href="blog-single.html">Blog Details</a>
              </div>
            </li>
            <li className="nav-item @@contact">
              <a className="nav-link" href="contact.html">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</header>
{/* <!-- /header --> */}
{/* <!-- Modal --> */}
<div className="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content rounded-0 border-0 p-4">
            <div className="modal-header border-0">
                <h3>Register</h3>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="login">
                    <form action="#" className="row">
                        <div className="col-12">
                            <input type="text" className="form-control mb-3" id="signupPhone" name="signupPhone" placeholder="Phone"></input>
                        </div>
                        <div className="col-12">
                            <input type="text" className="form-control mb-3" id="signupName" name="signupName" placeholder="Name"></input>
                        </div>
                        <div className="col-12">
                            <input type="email" className="form-control mb-3" id="signupEmail" name="signupEmail" placeholder="Email"></input>
                        </div>
                        <div className="col-12">
                            <input type="password" className="form-control mb-3" id="signupPassword" name="signupPassword" placeholder="Password"></input>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">SIGN UP</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Modal --> */}
<div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content rounded-0 border-0 p-4">
            <div className="modal-header border-0">
                <h3>Login</h3>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
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
                        <button type="submit" className="btn btn-primary">LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

{/* <!-- hero slider --> */}
<section className="hero-section overlay bg-cover" data-background="images/banner/banner-1.jpg">
  <div className="container">
    <div className="hero-slider">
      {/* <!-- slider item --> */}
      <div className="hero-slider-item">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-white" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".1">Your bright future is our mission</h1>
            <p className="text-muted mb-4" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
            <a href="contact.html" className="btn btn-primary" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">Apply now</a>
          </div>
        </div>
      </div>
      {/* <!-- slider item --> */}
      <div className="hero-slider-item">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-white" data-animation-out="fadeOutUp" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".1">Your bright future is our mission</h1>
            <p className="text-muted mb-4" data-animation-out="fadeOutUp" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
            <a href="contact.html" className="btn btn-primary" data-animation-out="fadeOutUp" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".7">Apply now</a>
          </div>
        </div>
      </div>
      {/* <!-- slider item --> */}
      <div className="hero-slider-item">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-white" data-animation-out="fadeOutDown" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">Your bright future is our mission</h1>
            <p className="text-muted mb-4" data-animation-out="fadeOutDown" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
            <a href="contact.html" className="btn btn-primary" data-animation-out="fadeOutDown" data-delay-out="5" data-duration-in=".3" data-animation-in="zoomIn" data-delay-in=".7">Apply now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- /hero slider --> */}

{/* <!-- banner-feature --> */}
<section className="bg-gray overflow-md-hidden">
  <div className="container-fluid p-0">
    <div className="row no-gutters">
      <div className="col-xl-4 col-lg-5 align-self-end">
        <img className="img-fluid w-100" src="images/banner/banner-feature.png" alt="banner-feature"></img>
      </div>
      <div className="col-xl-8 col-lg-7">
        <div className="row feature-blocks bg-gray justify-content-between">
          <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
            <i className="ti-book mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
            <h3 className="mb-xl-4 mb-lg-3 mb-4">Scholorship News</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad</p>
          </div>
          <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
            <i className="ti-blackboard mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
            <h3 className="mb-xl-4 mb-lg-3 mb-4">Our Notice Board</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad</p>
          </div>
          <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
            <i className="ti-agenda mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
            <h3 className="mb-xl-4 mb-lg-3 mb-4">Our Achievements</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad</p>
          </div>
          <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
            <i className="ti-write mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
            <h3 className="mb-xl-4 mb-lg-3 mb-4">Admission Now</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- /banner-feature --> */}

{/* <!-- about us --> */}
<section className="section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 order-2 order-md-1">
        <h2 className="section-title">About Educenter</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat </p>
        <p>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
        <a href="about.html" className="btn btn-primary-outline">Learn more</a>
      </div>
      <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
        <img className="img-fluid w-100" src="images/about/about-us.jpg" alt="about image"></img>
      </div>
    </div>
  </div>
</section>
{/* <!-- /about us --> */}

{/* <!-- courses --> */}
<section className="section-sm">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center section-title justify-content-between">
          <h2 className="mb-0 text-nowrap mr-3">Our Course</h2>
          <div className="border-top w-100 border-primary d-none d-sm-block"></div>
          <div>
            <a href="courses.html" className="btn btn-sm btn-primary-outline ml-sm-3 d-none d-sm-block">see all</a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- course list --> */}
<div className="row justify-content-center">
  {/* <!-- course item --> */}
  <div className="col-lg-4 col-sm-6 mb-5">
    <div className="card p-0 border-primary rounded-0 hover-shadow">
      <img className="card-img-top rounded-0" src="images/courses/course-1.jpg" alt="course thumb"></img>
      <div className="card-body">
        <ul className="list-inline mb-2">
          <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
          <li className="list-inline-item"><a className="text-color" href="#">Humanities</a></li>
        </ul>
        <a href="course-single.html">
          <h4 className="card-title">Photography</h4>
        </a>
        <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
        <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
      </div>
    </div>
  </div>
  {/* <!-- course item --> */}
  <div className="col-lg-4 col-sm-6 mb-5">
    <div className="card p-0 border-primary rounded-0 hover-shadow">
      <img className="card-img-top rounded-0" src="images/courses/course-2.jpg" alt="course thumb"></img>
      <div className="card-body">
        <ul className="list-inline mb-2">
          <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
          <li className="list-inline-item"><a className="text-color" href="#">Humanities</a></li>
        </ul>
        <a href="course-single.html">
          <h4 className="card-title">Programming</h4>
        </a>
        <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
        <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
      </div>
    </div>
  </div>
  {/* <!-- course item --> */}
  <div className="col-lg-4 col-sm-6 mb-5">
    <div className="card p-0 border-primary rounded-0 hover-shadow">
      <img className="card-img-top rounded-0" src="images/courses/course-3.jpg" alt="course thumb"></img>
      <div className="card-body">
        <ul className="list-inline mb-2">
          <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
          <li className="list-inline-item"><a className="text-color" href="#">Humanities</a></li>
        </ul>
        <a href="course-single.html">
          <h4 className="card-title">Lifestyle Archives</h4>
        </a>
        <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
        <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
      </div>
    </div>
  </div>
  {/* <!-- course item --> */}
  <div className="col-lg-4 col-sm-6 mb-5">
    <div className="card p-0 border-primary rounded-0 hover-shadow">
      <img className="card-img-top rounded-0" src="images/courses/course-4.jpg" alt="course thumb"></img>
      <div className="card-body">
        <ul className="list-inline mb-2">
          <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
          <li className="list-inline-item"><a className="text-color" href="#">Humanities</a></li>
        </ul>
        <a href="course-single.html">
          <h4 className="card-title">Complete Freelancing</h4>
        </a>
        <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
        <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
      </div>
    </div>
  </div>
  {/* <!-- course item --> */}
  <div className="col-lg-4 col-sm-6 mb-5">
    <div className="card p-0 border-primary rounded-0 hover-shadow">
      <img className="card-img-top rounded-0" src="images/courses/course-5.jpg" alt="course thumb"></img>
      <div className="card-body">
        <ul className="list-inline mb-2">
          <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
          <li className="list-inline-item"><a className="text-color" href="#">Humanities</a></li>
        </ul>
        <a href="course-single.html">
          <h4 className="card-title">Branding Design</h4>
        </a>
        <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
        <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
      </div>
    </div>
  </div>
  {/* <!-- course item --> */}
  <div className="col-lg-4 col-sm-6 mb-5">
    <div className="card p-0 border-primary rounded-0 hover-shadow">
      <img className="card-img-top rounded-0" src="images/courses/course-6.jpg" alt="course thumb"></img>
      <div className="card-body">
        <ul className="list-inline mb-2">
          <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
          <li className="list-inline-item"><a className="text-color" href="#">Humanities</a></li>
        </ul>
        <a href="course-single.html">
          <h4 className="card-title">Art Design</h4>
        </a>
        <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
        <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
      </div>
    </div>
  </div>
</div>
{/* <!-- /course list --> */}
    {/* <!-- mobile see all button --> */}
    <div className="row">
      <div className="col-12 text-center">
        <a href="courses.html" className="btn btn-sm btn-primary-outline d-sm-none d-inline-block">sell all</a>
      </div>
    </div>
  </div>
</section>
{/* <!-- /courses --> */}

{/* <!-- cta --> */}
<section className="section bg-primary">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        <h6 className="text-white font-secondary mb-0">Click to Join the Advance Workshop</h6>
        <h2 className="section-title text-white">Training In Advannce Networking</h2>
        <a href="contact.html" className="btn btn-secondary">join now</a>
      </div>
    </div>
  </div>
</section>
{/* <!-- /cta --> */}

{/* <!-- success story --> */}
<section className="section bg-cover" data-background="images/backgrounds/success-story.jpg">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-sm-4 position-relative success-video">
        <a className="play-btn venobox" href="https://youtu.be/nA1Aqp0sPQo" data-vbtype="video">
          <i className="ti-control-play"></i>
        </a>
      </div>
      <div className="col-lg-6 col-sm-8">
        <div className="bg-white p-5">
          <h2 className="section-title">Success Stories</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- /success story --> */}

{/* <!-- events --> */}
<section className="section bg-gray">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center section-title justify-content-between">
          <h2 className="mb-0 text-nowrap mr-3">Upcoming Events</h2>
          <div className="border-top w-100 border-primary d-none d-sm-block"></div>
          <div>
            <a href="events.html" className="btn btn-sm btn-primary-outline ml-sm-3 d-none d-sm-block">see all</a>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
  {/* <!-- event --> */}
  <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card border-0 rounded-0 hover-shadow">
      <div className="card-img position-relative">
        <img className="card-img-top rounded-0" src="images/events/event-1.jpg" alt="event thumb"></img>
        <div className="card-date"><span>18</span><br></br>December </div>
      </div>
      <div className="card-body">
        {/* <!-- location --> */}
        <p><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
        <a href="event-single.html"><h4 className="card-title">Lorem ipsum dolor amet, consectetur adipisicing.</h4></a>
      </div>
    </div>
  </div>
  {/* <!-- event --> */}
  <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card border-0 rounded-0 hover-shadow">
      <div className="card-img position-relative">
        <img className="card-img-top rounded-0" src="images/events/event-2.jpg" alt="event thumb"></img>
        <div className="card-date"><span>21</span><br></br>December</div>
      </div>
      <div className="card-body">
        {/* <!-- location --> */}
        <p><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
        <a href="event-single.html"><h4 className="card-title">Lorem ipsum dolor amet, consectetur adipisicing.</h4></a>
      </div>
    </div>
  </div>
  {/* <!-- event --> */}
  <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card border-0 rounded-0 hover-shadow">
      <div className="card-img position-relative">
        <img className="card-img-top rounded-0" src="images/events/event-3.jpg" alt="event thumb"></img>
        <div className="card-date"><span>23</span><br></br>December</div>
      </div>
      <div className="card-body">
        {/* <!-- location --> */}
        <p><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
        <a href="event-single.html"><h4 className="card-title">Lorem ipsum dolor amet, consectetur adipisicing.</h4></a>
      </div>
    </div>
  </div>
</div>
    {/* <!-- mobile see all button --> */}
    <div className="row">
      <div className="col-12 text-center">
        <a href="course.html" className="btn btn-sm btn-primary-outline d-sm-none d-inline-block">sell all</a>
      </div>
    </div>
  </div>
</section>
{/* <!-- /events --> */}

{/* <!-- teachers --> */}
<section className="section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12">
        <h2 className="section-title">Our Teachers</h2>
      </div>
      {/* <!-- teacher --> */}
      <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
        <div className="card border-0 rounded-0 hover-shadow">
          <img className="card-img-top rounded-0" src="images/teachers/teacher-1.jpg" alt="teacher"></img>
          <div className="card-body">
            <a href="teacher-single.html">
              <h4 className="card-title">Jacke Masito</h4>
            </a>
            <p>Teacher</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-facebook"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-twitter-alt"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-google"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- teacher --> */}
      <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
        <div className="card border-0 rounded-0 hover-shadow">
          <img className="card-img-top rounded-0" src="images/teachers/teacher-2.jpg" alt="teacher"></img>
          <div className="card-body">
            <a href="teacher-single.html">
              <h4 className="card-title">Clark Malik</h4>
            </a>
            <p>Teacher</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-facebook"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-twitter-alt"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-google"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- teacher --> */}
      <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
        <div className="card border-0 rounded-0 hover-shadow">
          <img className="card-img-top rounded-0" src="images/teachers/teacher-3.jpg" alt="teacher"></img>
          <div className="card-body">
            <a href="teacher-single.html">
              <h4 className="card-title">John Doe</h4>
            </a>
            <p>Teacher</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-facebook"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-twitter-alt"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-google"></i></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><i className="ti-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- /teachers --> */}

{/* <!-- blog --> */}
<section className="section pt-0">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2 className="section-title">Latest News</h2>
      </div>
    </div>
    <div className="row justify-content-center">
  {/* <!-- blog post --> */}
  <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
      <img className="card-img-top rounded-0" src="images/blog/post-1.jpg" alt="Post thumb"></img>
      <div className="card-body">
        {/* <!-- post meta --> */}
        <ul className="list-inline mb-3">
          {/* <!-- post date --> */}
          <li className="list-inline-item mr-3 ml-0">August 28, 2018</li>
          {/* <!-- author --> */}
          <li className="list-inline-item mr-3 ml-0">By Somrat Sorkar</li>
        </ul>
        <a href="blog-single.html">
          <h4 className="card-title">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
        </a>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
        <a href="blog-single.html" className="btn btn-primary btn-sm">read more</a>
      </div>
    </div>
  </article>
  {/* <!-- blog post --> */}
  <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
      <img className="card-img-top rounded-0" src="images/blog/post-2.jpg" alt="Post thumb"></img>
      <div className="card-body">
        {/* <!-- post meta --> */}
        <ul className="list-inline mb-3">
          {/* <!-- post date --> */}
          <li className="list-inline-item mr-3 ml-0">August 13, 2018</li>
          {/* <!-- author --> */}
          <li className="list-inline-item mr-3 ml-0">By Jonathon Drew</li>
        </ul>
        <a href="blog-single.html">
          <h4 className="card-title">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
        </a>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
        <a href="blog-single.html" className="btn btn-primary btn-sm">read more</a>
      </div>
    </div>
  </article>
  {/* <!-- blog post --> */}
  <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
      <img className="card-img-top rounded-0" src="images/blog/post-3.jpg" alt="Post thumb"></img>
      <div className="card-body">
        {/* <!-- post meta --> */}
        <ul className="list-inline mb-3">
          {/* <!-- post date --> */}
          <li className="list-inline-item mr-3 ml-0">August 24, 2018</li>
          {/* <!-- author --> */}
          <li className="list-inline-item mr-3 ml-0">By Alex Pitt</li>
        </ul>
        <a href="blog-single.html">
          <h4 className="card-title">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
        </a>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
        <a href="blog-single.html" className="btn btn-primary btn-sm">read more</a>
      </div>
    </div>
  </article>
</div>
  </div>
</section>
{/* <!-- /blog --> */}

{/* <!-- footer --> */}
<footer>
  {/* <!-- newsletter --> */}
  <div className="newsletter">
    <div className="container">
      <div className="row">
        <div className="col-md-9 ml-auto bg-primary py-5 newsletter-block">
          <h3 className="text-white">Subscribe Now</h3>
          <form action="#">
            <div className="input-wrapper">
              <input type="email" className="form-control border-0" id="newsletter" name="newsletter" placeholder="Enter Your Email..."></input>
              <button type="submit" value="send" className="btn btn-primary">Join</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- footer content --> */}
  <div className="footer bg-footer section border-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-8 mb-5 mb-lg-0">
          {/* <!-- logo --> */}
          <a className="logo-footer" href="index.html"><img className="img-fluid mb-4" src="images/logo.png" alt="logo"></img></a>
          <ul className="list-unstyled">
            <li className="mb-2">23621 15 Mile Rd #C104, Clinton MI, 48035, New York, USA</li>
            <li className="mb-2">+1 (2) 345 6789</li>
            <li className="mb-2">+1 (2) 345 6789</li>
            <li className="mb-2">contact@yourdomain.com</li>
          </ul>
        </div>
        {/* <!-- company --> */}
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
          <h4 className="text-white mb-5">COMPANY</h4>
          <ul className="list-unstyled">
            <li className="mb-3"><a className="text-color" href="about.html">About Us</a></li>
            <li className="mb-3"><a className="text-color" href="teacher.html">Our Teacher</a></li>
            <li className="mb-3"><a className="text-color" href="contact.html">Contact</a></li>
            <li className="mb-3"><a className="text-color" href="blog.html">Blog</a></li>
          </ul>
        </div>
        {/* <!-- links --> */}
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
          <h4 className="text-white mb-5">LINKS</h4>
          <ul className="list-unstyled">
            <li className="mb-3"><a className="text-color" href="courses.html">Courses</a></li>
            <li className="mb-3"><a className="text-color" href="event.html">Events</a></li>
            <li className="mb-3"><a className="text-color" href="gallary.html">Gallary</a></li>
            <li className="mb-3"><a className="text-color" href="faqs.html">FAQs</a></li>
          </ul>
        </div>
        {/* <!-- support --> */}
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
          <h4 className="text-white mb-5">SUPPORT</h4>
          <ul className="list-unstyled">
            <li className="mb-3"><a className="text-color" href="#">Forums</a></li>
            <li className="mb-3"><a className="text-color" href="#">Documentation</a></li>
            <li className="mb-3"><a className="text-color" href="#">Language</a></li>
            <li className="mb-3"><a className="text-color" href="#">Release Status</a></li>
          </ul>
        </div>
        {/* <!-- support --> */}
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
          <h4 className="text-white mb-5">RECOMMEND</h4>
          <ul className="list-unstyled">
            <li className="mb-3"><a className="text-color" href="#">WordPress</a></li>
            <li className="mb-3"><a className="text-color" href="#">LearnPress</a></li>
            <li className="mb-3"><a className="text-color" href="#">WooCommerce</a></li>
            <li className="mb-3"><a className="text-color" href="#">bbPress</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- copyright --> */}
  <div className="copyright py-4 bg-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-7 text-sm-left text-center">
          <p className="mb-0">Copyright
            <script>
              var CurrentYear = new Date().getFullYear()
              document.write(CurrentYear)
            </script> 
            © themefisher</p>
        </div>
        <div className="col-sm-5 text-sm-right text-center">
          <ul className="list-inline">
            <li className="list-inline-item"><a className="d-inline-block p-2" href="#"><i className="ti-facebook text-primary"></i></a></li>
            <li className="list-inline-item"><a className="d-inline-block p-2" href="#"><i className="ti-twitter-alt text-primary"></i></a></li>
            <li className="list-inline-item"><a className="d-inline-block p-2" href="#"><i className="ti-linkedin text-primary"></i></a></li>
            <li className="list-inline-item"><a className="d-inline-block p-2" href="#"><i className="ti-instagram text-primary"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* <!-- /footer --></div> */}
        </React.Fragment>
    )
}
export default Home;