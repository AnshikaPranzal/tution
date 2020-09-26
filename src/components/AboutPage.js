import React from 'react';
import $ from 'jquery';
import TopHeader from './TopHeader.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Title from './Title.js';
import AboutSection from './AboutSection.js';
import SuccessStory from './SuccessStory.js';
import TeacherList from './TeacherList.js';
import AboutUs from './AboutUs.js';

const About = () => {
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

  return (
    <React.Fragment>
      <header className="sticky-top header">
        {/* <!-- top header --> */}
        <TopHeader></TopHeader>
        {/* <!-- navbar --> */}
        <Navbar about="active"></Navbar>
      </header>
      {/* <!-- /header --> */}

      <Title
        title="About Us"
        body="After several long years of valuable experience we planned to create a platform that believes in the theme ‘excel education for all’, equalizes all aspirants and will provide equal opportunities so that everyone can try to reach the peak of the mountain from the same base camp."
      ></Title>

      {/* <AboutSection></AboutSection> */}
      <AboutUs topic="Us"></AboutUs>

      <SuccessStory></SuccessStory>

      {/* <TeacherList></TeacherList> */}

      <Footer></Footer>
    </React.Fragment>
  );
};

export default About;
