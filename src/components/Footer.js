import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <React.Fragment>
            <footer>
              <div className="newsletter">
                <div className="container">
                <div className="row">
                    <div className="col-md-9 ml-auto bg-primary py-5 newsletter-block">
                    <h3 className="text-white">Subscribe Now</h3>
                    <form action="#">
                        <div className="input-wrapper">
                        <input type="email" className="form-control border-0" id="newsletter" name="newsletter" placeholder="Enter Your Email..."></input>
                        <button type="submit" value="send" className="hvr-bounce-to-top">Join</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            {/* <!-- footer content --> */}
            <div className="newsfooter bg-footer section border-bottom">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-8 mb-5 mb-lg-0">
                    {/* <!-- logo --> */}
                    <Link className="logo-footer" to='/'><img className="img-fluid mb-4" src={logo} alt="logo" style={{paddingTop:"25%"}}></img></Link>
                    
                    </div>
                    <div className="col-lg-4 col-sm-8 mb-5 mb-lg-0">
                    {/* <!-- About Us --> */}
                   <h4 className="text-white mb-5">About Us</h4>
                   <p>Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others.</p>
                    
                    </div>
                    {/* <!-- company --> */}
                    {/* <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                    <h4 className="text-white mb-5">LINK</h4>
                    <ul className="list-unstyled">
                        <li className="mb-3"><Link className="text-color" to='/course'>Home</Link></li>
                        <li className="mb-3"><Link className="text-color" to='/course'>Courses</Link></li>
                        <li className="mb-3"><Link className="text-color" to='/about'>About Us</Link></li>
                        <li className="mb-3"><Link className="text-color" to='/contact'>Contact</Link></li>
                    </ul>
                    </div> */}
                    {/* <!-- Reach --> */}
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                    <h4 className="text-white mb-5">REACH US</h4>
                    <ul className="list-unstyled">
                        <ul className="list-unstyled">
                        <li className="mb-2">23621 15 Mile Rd #C104, Clinton MI, 48035, New York, USA</li>
                        <li className="mb-2">+1 (2) 345 6789</li>
                        <li className="mb-2">+1 (2) 345 6789</li>
                        <li className="mb-2">contact@yourdomain.com</li>
                    </ul>
                    </ul>
                    </div>
                    {/* <!-- support --> */}
                    {/* <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                    <h4 className="text-white mb-5">SUPPORT</h4>
                    <ul className="list-unstyled">
                        <li className="mb-3"><a className="text-color" href="#">Forums</a></li>
                        <li className="mb-3"><a className="text-color" href="#">Documentation</a></li>
                        <li className="mb-3"><a className="text-color" href="#">Language</a></li>
                        <li className="mb-3"><a className="text-color" href="#">Release Status</a></li>
                    </ul>
                    </div> */}
                </div>
                </div>
            </div>
            {/* <!-- copyright --> */}
            <div className="copyright py-4 bg-footer">
                <div className="container">
                <div className="row">
                    <div className="col-sm-4 text-sm-left text-center">
                    <p className="mb-0">Copyright
                        <script>
                        var CurrentYear = new Date().getFullYear()
                        document.write(CurrentYear)
                        </script> 
                        © </p>
                    </div>
                    <div className="col-sm-4 text-sm-right text-center">
                    <ul className="list-inline">
                        <li className="list-inline-item"><Link className="d-inline-block p-2" to='/course'>Course</Link></li>
                        <li className="list-inline-item"><Link className="d-inline-block p-2" to='/about'>About</Link></li>
                        <li className="list-inline-item"><Link className="d-inline-block p-2" to='/contact'>Contact</Link></li>
                    </ul>
                    </div>
                    <div className="col-sm-4 text-sm-right text-center">
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
        </React.Fragment>
    )
}

export default Footer