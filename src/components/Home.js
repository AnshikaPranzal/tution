/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React from 'react';
import $ from 'jquery'
import '../plugins/bootstrap/bootstrap.min.css'
import '../plugins/slick/slick.css'
import '../plugins/themify-icons/themify-icons.css'
import '../plugins/animate/animate.css'
import '../plugins/aos/aos.css'
import '../plugins/venobox/venobox.css'
import '../css/style.css'
import preloader from '../images/preloader.gif'
import logo from '../images/logo.png'
import Header from './Header'
import ResgisterModal from './RegisterModal'
import LoginModal from './LoginModal'
import Slider from './Slider'
import Banner  from './Banner'
import AboutUs from './AboutUs'
import Courses from './Courses'
import Cta from './Cta'
import Events from './Events'
import SuccessStory from './SuccessStory'




const Home = () =>{

  // Sticky Menu
	$(window).scroll(function () {
		var height = $('.top-header').innerHeight();
		if ($('header').offset().top > 10) {
			$('.top-header').addClass('hide');
			$('.navigation').addClass('nav-bg');
			$('.navigation').css('margin-top', '-' + height + 'px');
		} else {
			$('.top-header').removeClass('hide');
			$('.navigation').removeClass('nav-bg');
			$('.navigation').css('margin-top', '-' + 0 + 'px');
		}
	});

	// Background-images
	$('[data-background]').each(function () {
		$(this).css({
			'background-image': 'url(' + $(this).data('background') + ')'
		});
	});

  	//Hero Slider
	// $('.hero-slider').slick({
	// 	autoplay: true,
	// 	autoplaySpeed: 7500,
	// 	pauseOnFocus: false,
	// 	pauseOnHover: false,
	// 	infinite: true,
	// 	arrows: true,
	// 	fade: true,
	// 	prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
	// 	nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
	// 	dots: true
	// });
	// $('.hero-slider').slickAnimation();

	// // venobox popup
	// $(document).ready(function () {
	// 	$('.venobox').venobox();
	// });


	// filter
	$(document).ready(function () {
		var containerEl = document.querySelector('.filtr-container');
		var filterizd;
		if (containerEl) {
			filterizd = $('.filtr-container').filterizr({});
		}
		//Active changer
		$('.filter-controls li').on('click', function () {
			$('.filter-controls li').removeClass('active');
			$(this).addClass('active');
		});
	});


    return(
        <React.Fragment>
             {/* <!-- preloader start --> */}
  {/* <div className="preloader">
    <img src={preloader} alt="preloader"></img>
  </div> */}
  {/* <!-- preloader end --> */}



<ResgisterModal></ResgisterModal>
<LoginModal></LoginModal>

<Slider></Slider>

<Banner></Banner>

<AboutUs></AboutUs>

<Courses></Courses>

<Cta></Cta>

<SuccessStory></SuccessStory>

<Events></Events>

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