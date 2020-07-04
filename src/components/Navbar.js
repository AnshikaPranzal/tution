import React from 'react';
import logo from '../images/logo.png';

const Navbar = () =>{
    return(
        <React.Fragment>
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
        </React.Fragment>
        )
    };
    export default Navbar;