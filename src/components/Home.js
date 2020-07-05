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
import SliderList from './Slider'
import Banner  from './Banner'
import AboutUs from './AboutUs'
import Courses from './Courses'
import Cta from './Cta'
import Events from './Events'
import SuccessStory from './SuccessStory'
import TeacherList from './TeacherList';
import Footer from './Footer'




const Home = () =>{

  // Sticky Menu
	$(window).scroll(function () {
		var height = 0;
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


<Header></Header>
<ResgisterModal></ResgisterModal>
<LoginModal></LoginModal>

<SliderList></SliderList>

<Banner></Banner>

<AboutUs></AboutUs>

<Courses></Courses>

<Cta></Cta>

<SuccessStory></SuccessStory>

<Events></Events>

<TeacherList></TeacherList>


<Footer></Footer>
        </React.Fragment>
    )
}
export default Home;