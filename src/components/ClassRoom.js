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
import UploadDocument from './UploadDocument';
import {getAClassroom, updateClassroom,deleteClassroom,isAuthenticated} from './helper/index';


const ClassRoom = (props) => {

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
    const crid= props.match.params.handle;

    return(
    <React.Fragment>
         {/* <header className="fixed-top header"> */}
            {/* <!-- top header --> */}
                {/* <TopHeader></TopHeader> */}
            {/* <!-- navbar --> */}
			{/* <Navbar></Navbar> */}
          {/* </header> */}
          {/* <!-- /header --> */}
          <div className="text-center">
          <Row>
          <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        {/* <CardImg top width="100%" src={img2} /> */}
                        <CardBody>
                            <UploadDocument id={crid}></UploadDocument>
                        </CardBody>
                        </Card>
                        </Col>
                        </Row>
                        </div>
    </React.Fragment>)
}
export default ClassRoom;