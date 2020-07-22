/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col,
    Input,
    Table
} from 'reactstrap';
import $ from 'jquery'
import TopHeader from './TopHeader.js';
import Navbar from './Navbar';

import {isAuthenticated} from './helper/index';


const QuizQuestion = (props) => {
    console.log(isAuthenticated())

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
    const qid= props.match.params.question;
    console.log(qid);

    return(
    <React.Fragment>
         <header className="fixed-top header">
            {/* <!-- top header --> */}
                <TopHeader></TopHeader>
            {/* <!-- navbar --> */}
			<Navbar></Navbar>
          </header>
          {/* <!-- /header --> */}
    </React.Fragment>)
}
export default QuizQuestion;