/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { v4 } from 'uuid';
import { TodoContext } from '../../context/TodoContext';
import { ADD_TODO } from '../../context/action.types';
import img1 from '../../../assets/images/users/1.jpg';
import img2 from '../../../assets/images/users/2.jpg';
import img3 from '../../../assets/images/users/3.jpg';
import img4 from '../../../assets/images/users/4.jpg';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const Projects = () => {
    const [todoString, setTodoString] = useState("")
    const [time, setTime] = useState("12:00")
    const [duration, setDuration] = useState("1 hr.")
    // const {dispatch} = useContext(TodoContext)
    const [project, setProject] = useState({
        classLink: "",
        subject: "",
        category: "",
        time: "",
        duration: ""
    })
    const handleSubmit = e =>{
        e.preventDefault();
        if (todoString === "") {
            return alert("Dimag hi nii h mtlb");
        }

        const todo = {
            todoString,
            id: v4()
        }
        // dispatch({
        //     type: ADD_TODO,
        //     payload: todo
        // })

        setTodoString("")
    };
    return (
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
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Class</th>
                            <th className="border-0">Subject</th>
                            <th className="border-0">Group/Section</th>
                            <th className="border-0">Category</th>
                            <th className="border-0">Time</th>
                            <th className="border-0">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="">
                                    <Input
                                    type="text"
                                    name={project.classLink}
                                    id={project.classLink}
                                    placeholder="Class link here.."
                                    value={project.classLink}
                                    onChange={e=> setProject({
                                        classLink: "e.target.value"
                                    })}
                                    ></Input></div>
                                </div>
                            </td>
                            <td><Input type="select" className="custom-select">
                                <option value="0">Physics</option>
                                <option value="1">Chemistry</option>
                                <option value="2">Maths</option>
                                <option value="3">Computer</option>
                            </Input></td>

                            <td>
                            <Input type="select" className="custom-select">
                                <option value="0">9</option>
                                <option value="1">10</option>
                                <option value="1">11</option>
                                <option value="1">12</option>
                            </Input>
                                

                            </td>
                            <td>
                            <Input type="select" className="custom-select">
                                <option value="0">Regular Class</option>
                                <option value="1">Doubt Class</option>
                            </Input>
                                

                            </td>
                            <td><Input
                                    type="text"
                                    name="todo"
                                    id="todo"
                                    placeholder=" : "
                                    value={time}
                                    onChange={e=> setTime(e.target.value)}
                                    style={{maxWidth:"100px"}}
                                    ></Input></td>
                            <td className="blue-grey-text  text-darken-4 font-medium"><Input
                                    type="text"
                                    name="duration"
                                    id="duration"
                                    placeholder="1 hr."
                                    value={time}
                                    onChange={e=> setDuration(e.target.value)}
                                    style={{maxWidth:"100px"}}
                                    ></Input></td>
                                    <td><i class="fa fa-plus text-success" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium"><span><a href={project.classLink} target="_blank">Start Class</a></span></h5></div>
                                </div>
                            </td>
                            <td>Chemistry</td>
                            <td>10</td>

                            <td>
                                <i className="fa fa-circle text-success" id="tlp3"></i>

                            </td>
                            <td>12;00 PM</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">1 hr.</td>
                            <td><i class="fa fa-trash text-orange" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="">
                                    <h5 className="mb-0 font-16 font-medium"><span><a href={project.classLink} target="_blank">Start Class</a></span></h5></div>
                                </div>
                            </td>
                            <td>Chemistry</td>
                            <td>10</td>
                            <td>
                                <i className="fa fa-circle text-orange" id="tlp4"></i>

                            </td>
                            <td>12:00 PM</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">1 hr.</td>
                            <td><i class="fa fa-trash text-orange" aria-hidden="true"></i></td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card >
    );
}

export default Projects;
