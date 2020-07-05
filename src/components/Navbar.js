/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <div className="navigation w-100">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark p-0">
        {/* <a className="navbar-brand" href="/"><img src={logo} alt="logo"></img></a>
        <button className="navbar-toggler rounded-0" type="button" data-toggle="collapse" data-target="#navigation"
          aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav text-center">
            <li className="nav-item active">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item @@about">
            <Link className="nav-link" to="/about">ABOUT</Link>
              
            </li>
            <li className="nav-item @@courses">
            <Link className="nav-link" to="/about">COURSES</Link>

            </li>
            <li className="nav-item @@events">
            <Link className="nav-link" to="/about">EVENTS</Link>
            </li>
            <li className="nav-item @@blog">
            <Link className="nav-link" to="/dashboard">DASHBOARD</Link>

            </li>
            <li className="nav-item dropdown view">
              
            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" to="/about">PAGES</Link>
                
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
            <Link className="nav-link" to="/about">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
    </div>
  );
}

export default App;
