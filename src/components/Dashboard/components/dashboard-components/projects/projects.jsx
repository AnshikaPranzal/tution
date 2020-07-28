
import React ,{useEffect,useState} from "react";

import img1 from '../../../assets/images/users/1.jpg';

import { getAllClasses, subclassrooms, isAuthenticated, getAClass, getASubject,subclasses } from '../../../../helper/index'

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table,
    Row,
    Col
} from 'reactstrap';
import { Link } from "react-router-dom";

const Projects = () => {
    const [classO, setclassO] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [error, seterror] = useState(false)
  const [errorF, seterrorF] = useState(false)
  const [classroomO, setclassroomO] = useState([]);
    const {user}= isAuthenticated();

    
    


  const loadAllclasses = () =>{
    subclasses({user_id: user._id}).then(data =>{
        console.log(data)
        if(data){
      if(data.error){
        seterror(data.error)
      }
      else{
        setclassO(data)
      }
    }
    })
  }
  
  useEffect (() => {
    loadAllclasses()
    },[])


    const loadAllclassroooms = () =>{
        console.log(user)
        subclassrooms({user_id: user._id}).then(data =>{
            console.log(data)
          if(data)
          if(data.error){
            seterrorF(data.error)
          }
          else{
            setclassroomO(data)
            
          }
        })
      }
      useEffect (() => {
        loadAllclassroooms()
        },[])


    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/
        <>
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Your Classes</CardTitle>
                        <CardSubtitle>Click on them to join</CardSubtitle>
                    </div>
                  
                    <div className="ml-auto d-flex no-block align-items-center">
                        <div className="dl">
                            <Input type="select" className="custom-select">
                                <option value="0">Monthly</option>
                                <option value="1">Daily</option>
                                <option value="2">Weekly</option>
                                <option value="3">Yearly</option>
                            </Input>
                        </div>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Teacher</th>
                            <th className="border-0">Subject</th>

                            <th className="border-0">Time</th>
                            <th className="border-0">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classO.map((obj,index)=>{
                            //    if(obj.subject === "Maths")
                            
                                return(
                                
                                <tr key={index}>
                                    <td>
                                        <div className="d-flex no-block align-items-center" >
                                            <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>
                                            <div className="">
                                                <h5 className="mb-0 font-16 font-medium">{obj.name}</h5><span>{obj.email}</span></div>
                                        </div>
                                    </td>
                                    <td>{obj.subject}</td>
                                    <td>{obj.time}</td>
                                    <td className="blue-grey-text  text-darken-4 font-medium">{obj.date.substring(8, 10)}{obj.date.substring(4, 7)}-{obj.date.substring(0, 4)}</td>
                                    <td>
                                        <a href={obj.classLink} target="blank" rel='noreferrer'>Click to open</a>
                                    </td>
                                </tr>
                            )})
                        }
                        
                       
                    </tbody>
                </Table>
            </CardBody>
        </Card >
        <Row>
        {classroomO.map((obj,i)=>{
            return(
            // <tr key={i}>
            <Col xs="12" md="4">
                <Card key={i} style={{textAlign: "center"}}>
                    <div style={{height: "5rem", background: "linear-gradient(45deg, #2dce89, cyan"}}></div>
                                <CardTitle>{obj.name}</CardTitle>
                                <CardSubtitle>Class {obj.standard}</CardSubtitle>
                                <CardBody>{obj.description}</CardBody>
                                <div>
                                {isAuthenticated() 
                                // && isAuthenticated().user.role === 1
                                ?(
                                    <p>
                                    <Link classid="Hello" to={`/dashboard-teacher/classroom-teacher/${obj._id}`}>See More</Link>
                                    </p>
                                ):""}
                            </div>
                        </Card>
                        </Col>)
                   
                
            })}
                </Row>
</>
    );
}

export default Projects;
