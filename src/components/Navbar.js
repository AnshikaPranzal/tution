import React from 'react'
import {NavDropdown, Nav, Navbar} from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'


const NavBar =(props) => {
  return(
    <React.Fragment>
      <div className="navigation w-100">
    <div className="container">
    <Navbar collapseOnSelect expand="lg">
    <Navbar.Brand href="#home"><a className="navbar-brand" href="/"><img src={logo} alt="logo"></img></a></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <div className="mr-auto">
          <ul className="navbar-nav ml-auto text-center">
            <li className={`nav-item ${props.home}`}>
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className={`nav-item ${props.about}`}>
            <Link className="nav-link" to="/about">ABOUT</Link>
              
            </li>
            <li className={`nav-item ${props.courses}`}>
            <Link className="nav-link" to="/course">COURSES</Link>

            </li>
            <li className={`nav-item ${props.events}`}>
            <Link className="nav-link" to="/event">EVENTS</Link>
            </li>
            <li className={`nav-item ${props.dashboard}`}>
            <Link className="nav-link" to="/dashboard">DASHBOARD</Link>

            </li>
            <li className={`nav-item dropdown view ${props.pages}`}>
              
            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" >PAGES</Link>
                
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
            <li className={`nav-item ${props.contact}`}>
            <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        </Navbar.Collapse>
        
      </Navbar>
    </div>
  </div>
</React.Fragment>
  )}

  export default NavBar