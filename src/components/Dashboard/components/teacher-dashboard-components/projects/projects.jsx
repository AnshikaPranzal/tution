/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link,Redirect } from 'react-router-dom';

import { v4 } from 'uuid';
import { TodoContext } from '../../context/TodoContext';
import { ADD_TODO } from '../../context/action.types';
import img1 from '../../../assets/images/users/1.jpg';
import img2 from '../../../assets/images/users/2.jpg';
import img3 from '../../../assets/images/users/3.jpg';
import img4 from '../../../assets/images/users/4.jpg';

import { classes,isAuthenticated } from '../../../../helper/index'

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const Projects = () => {

 

    const successMessage = () =>(
        <div className="row ">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" style={{display: success ? "" : "none"}}>
                        Congratulations!!!You are registered with us. Start now{" "}<Link to="/signin">here</Link>
                    </div>
                </div>
        </div>
    )

    const errorMessage = () =>{
       
    return(
        <div className="row ">
        <div className="col-md-6 offset-sm-3 text-left">
        <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
            {error}
        </div>
        </div>
        </div>
    )}
    // const {dispatch} = useContext(TodoContext)
    const [project, setProject] = useState({
        classLink: "",
        subject: "",
        category: "",
        standard:"",
        time: "",
        date: "",
        error:"",
        success: false
    })
    const {classLink, subject,standard,time ,date,success,error} = project;
    const user = isAuthenticated();

    const handleChange = name => event => {
        setProject({
            ...project,error: false, [name]: event.target.value
        })
    }
    const onSubmit = event => {
        event.preventDefault();
        setProject({
            ...project,error: false
        });
        classes({classLink,user,subject,standard,time,date})
            .then( (data) =>{
                console.log(data)
                if(data.error){
                   
                    setProject({
                        ...project,
                        error: data.error,
                        success: false
                    })
                }
                else{
                    setProject({
                        ...project,
                        classLink: "",
                        subject: "",
                        category: "",
                        standard:"",
                        time: "",
                        date: "",
                        error:"",
                        success: true
                    })
                }
            })
            .catch(console.log("Error in classes"))
    }
   
    const dashboard = ()=> (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/

        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Add Classes</CardTitle>
                        <CardSubtitle>Click on them to join</CardSubtitle>
                    </div>
                    <div className="ml-auto d-flex align-items-center">
                        <ul className="list-inline font-12 dl mr-3 mb-0">
                            <li className="border-0 p-0 text-orange list-inline-item">
                                <i className="fa fa-circle"></i>
                                Regular Class
								</li>
                            <li className="border-0 p-0 text-success list-inline-item">
                                <i className="fa fa-circle"></i> Doubt Class
								</li>
                        </ul>
                    </div>
                    {/* <div className="ml-auto d-flex no-block align-items-center">
                        <div className="dl">
                            <Input type="select" className="custom-select">
                                <option value="0">Monthly</option>
                                <option value="1">Daily</option>
                                <option value="2">Weekly</option>
                                <option value="3">Yearly</option>
                            </Input>
                        </div>
                    </div> */}
                </div>
                {successMessage()}
                {errorMessage()}
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Class</th>
                            <th className="border-0">Subject</th>
                            <th className="border-0">Group/Section</th>
                            
                            <th className="border-0">Time</th>
                            <th className="border-0">date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="">
                                    <Input
                                    type="text"
                                    name={classLink}
                                    id={classLink}
                                    placeholder="Class link here.."
                                    value={classLink}
                                    onChange={handleChange("classLink")}
                                    ></Input></div>
                                </div>
                            </td>
                            <td><Input type="select" className="custom-select" value={subject}
                                    onChange={handleChange("subject")}>
                                <option value="0">Select</option>
                                <option value="1">Physics</option>
                                <option value="2">Chemistry</option>
                                <option value="3">Maths</option>
                                <option value="4">Computer</option>
                            </Input></td>

                            <td>
                            <Input type="select" className="custom-select" value={standard}
                                    onChange={handleChange("standard")}>
                                <option value="0">Select</option>
                                <option value="1">9</option>
                                <option value="2">10</option>
                                <option value="3">11</option>
                                <option value="4">12</option>
                            </Input>
                                

                            </td>
                            
                            <td><Input
                                    type="time"
                                    name="todo"
                                    id="todo"
                                    placeholder=" : "
                                    value={time}
                                    onChange={handleChange("time")}
                                    style={{maxWidth:"100px"}}
                                    ></Input></td>
                            <td className="blue-grey-text  text-darken-4 font-medium"><Input
                                    type="date"
                                    name="date"
                                    id="date"
                                    placeholder="1 hr."
                                    value={date}
                                    onChange={handleChange("date")}
                                    style={{maxWidth:"200px"}}
                                    ></Input></td>
                                    <td><button type="submit"  onClick={onSubmit}><i class="fa fa-plus text-success" aria-hidden="true"></i></button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium"><span><a href={classLink} target="_blank">Start Class</a></span></h5></div>
                                </div>
                            </td>
                            <td>Chemistry</td>
                            <td>10</td>

                            
                            <td>12;00 PM</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">1 hr.</td>
                            <td><i class="fa fa-trash text-orange" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="">
                                    <h5 className="mb-0 font-16 font-medium"><span><a href={classLink} target="_blank">Start Class</a></span></h5></div>
                                </div>
                            </td>
                            <td>Chemistry</td>
                            <td>10</td>
                           
                            <td>12:00 PM</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">1 hr.</td>
                            <td><i class="fa fa-trash text-orange" aria-hidden="true"></i></td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card >
    );
    return(
        <React.Fragment>
           
            {dashboard()}
            
        </React.Fragment>
    )
}

export default Projects;
