import React from 'react';
import $ from 'jquery';
import TopHeader from './TopHeader';
import Navbar from './Navbar';
import Title from './Title';
import Footer from './Footer';
import AllNoticeList from './AllNoticeList';


const NoticePage = () => {
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
                <Navbar notice="active"></Navbar>
          </header>
          {/* <!-- /header --> */}
          <Title title='Notice' body='Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others.'></Title>

        <AllNoticeList></AllNoticeList>
        
        <Footer></Footer>

        </React.Fragment>
    )
}

export default NoticePage;