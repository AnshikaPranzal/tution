import React, { useEffect } from 'react';
import $ from 'jquery';
import TopHeader from './TopHeader.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import AllCourseList from './AllCourseList.js';
import Title from './Title.js';
import { loadCart } from './helper/index.js';

const CoursePage = () => {
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
      <header className='fixed-top header'>
        {/* <!-- top header --> */}
        <TopHeader></TopHeader>
        {/* <!-- navbar --> */}
        <Navbar courses='active'></Navbar>
      </header>
      {/* <!-- /header --> */}
      <Title
        title='Our Courses'
        body='Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others.'
      ></Title>
      <AllCourseList></AllCourseList>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default CoursePage;
