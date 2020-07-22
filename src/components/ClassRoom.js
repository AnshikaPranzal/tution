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
import ClassroomTitle from './ClassroomTitle'
import UploadDocument from './UploadDocument';
import UploadAssignment from './UploadAssignment';
import {getAClassroom, updateClassroom,deleteClassroom,isAuthenticated} from './helper/index';


const ClassRoom = (props) => {
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
    const crid= props.match.params.handle;
    const Month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    const [project, setProject] = useState({
        name: "",
        description: "",
        subject: "",
        error:"",
        members:[],
        doc:[],
        success: false
    })
    const [refresh, setrefresh] = useState(true)

    const getClassroom = cid => {
        getAClassroom(cid).then(data=>{
            
            if(data.error)
            {
                console.log(data.error)
                // setValues({...values,error:data.error})
            }
            else{
                setProject({
                    ...project,
                    name: data.name,
                    description: data.description,
                    subject: data.subject,
                    members: data.members,
                    doc:data.doc,
                    assignment: data.assignment,
                });
                setrefresh(false);
            }
        })}

        useEffect (() => {
            getClassroom(crid)
            },[refresh])

    return(
    <React.Fragment>
         <header className="fixed-top header">
            {/* <!-- top header --> */}
                <TopHeader></TopHeader>
            {/* <!-- navbar --> */}
			<Navbar></Navbar>
          </header>
          {/* <!-- /header --> */}
          <ClassroomTitle title={project.name} body={project.description}></ClassroomTitle>
          <div className="text-center">
          <Row>
          
                        {/* <CardImg top width="100%" src={img2} /> */}
                            {isAuthenticated() 
                            // && isAuthenticated().user.role === 1 
                            ?
                            <Col xs="12" md="6">
                            {/*--------------------------------------------------------------------------------*/}
                            {/*Card-1*/}
                            {/*--------------------------------------------------------------------------------*/}
                            <Card>
                            <CardBody>
                            <UploadDocument id={crid}></UploadDocument>
                        </CardBody>
                        </Card>
                        </Col>
                        :""}


                        {isAuthenticated() 
                            // && isAuthenticated().user.role === 1 
                            ?
                            <Col xs="12" md="6">
                            {/*--------------------------------------------------------------------------------*/}
                            {/*Card-1*/}
                            {/*--------------------------------------------------------------------------------*/}
                            <Card>
                            <CardBody>
                            <UploadAssignment id={crid}></UploadAssignment>
                        </CardBody>
                        </Card>
                        </Col>
                        :""}
                        
                        </Row>

                        </div>
    </React.Fragment>)
}
export default ClassRoom;