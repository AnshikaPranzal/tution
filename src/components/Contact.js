import React from 'react';
import TopHeader from './TopHeader.js';
import Navbar from './Navbar.js';
import $ from 'jquery';
import Title from './Title.js';
import ContactSection from './ContactSection.js';
import Footer from './Footer.js';

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


    return(
        <React.Fragment>
            <header className="fixed-top header">
            {/* <!-- top header --> */}
                <TopHeader></TopHeader>
            {/* <!-- navbar --> */}
                <Navbar contact="active"></Navbar>
          </header>
          {/* <!-- /header --> */}

          <Title title="Contact Us" body="Do you have other questions? Don't worry, there aren't any dumb questions. Just fill out the form below and we'll get back to you as soon as possible."></Title>
          <ContactSection></ContactSection>
          <Footer></Footer>
        </React.Fragment>
    )
}
export default Home;