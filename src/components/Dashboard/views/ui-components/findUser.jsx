import React, { useState } from 'react';

import $ from 'jquery'

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';
import { useEffect } from 'react';
import { getAllSubjects, addSubject, getAllUSers } from '../../../helper';

const Projects = () => {

const[userO, setuserO] = useState([])
const [sub, setsubject] = useState([])
const [errorF, seterrorF] = useState(false)
const [refresh, setRefresh] = useState(false)

const loadAllusers = () =>{
    getAllUSers().then(data =>{
        console.log(data)
      if(data)
      if(data.error){
        seterrorF(data.error)
      }
      else{
        setuserO(data)
        setRefresh(!refresh)
      }
    })
  }

  useEffect (() => {
    loadAllusers()
    },[refresh])

const loadAllSubjects = () =>{
    getAllSubjects().then(data =>{
      //   console.log(data)
      if(data)
      if(data.error){
        seterrorF(data.error)
      }
      else{
        setsubject(data)
      }
    })
  }
  useEffect (() => {
    loadAllSubjects()
    },[])

const users = []

 const [u,setU]= useState({
     name:"",
     email:"",
     subject:"",
     value: 0
 })
  const {name,email, subject, value} = u;

  const handleChange = name => event => {
    setU({
        ...u, [name]: event.target.value
    })
}

// if((name !== "")&&(mob !== 0)&&(email !== ""))
// {
//     $('hvr-bounce-to-top').removeClass('hide')
// }
const onSubmit = event => {

    event.preventDefault();
    userO.map((obj, i) => {
        if(obj.role === 0){
            if((obj.name === name)&&(obj.email === email)){
                addSubject({user_id:obj._id, subject_id:subject, value: value})
            }
        }
    })
    console.log(!refresh)
    setRefresh(!refresh)
    // $('.userlist').removeClass('hide')
}
    
    const dashboard = ()=> (
    
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Find Student</CardTitle>
                        <CardSubtitle>To Add or Edit Subject</CardSubtitle>
                    </div>
                    
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Name</th>
                            <th className="border-0">Email</th>
                            <th className="border-0">Subject</th>
                            <th className="border-0">Months</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Input
                                    type="text"
                                    name={name}
                                    id={name}
                                    placeholder="Name"
                                    value={name}
                                    onChange={handleChange("name")}
                                    ></Input></td>

                            
                            <td>
                            <Input
                                    type="email"
                                    name={email}
                                    id={email}
                                    placeholder="email"
                                    value={email}
                                    onChange={handleChange("email")}
                                    ></Input>
                            </td>

                            <td><Input type="select" className="custom-select" value={subject}
                                    onChange={handleChange("subject")}>
                                <option value="0">Select</option>
                                {sub.map((obj,i) => {
                                    return(<option key={i} value={obj._id}>{obj.name}</option>)
                                })
                                }
                            </Input></td>

                            <td>
                            <Input
                                    type="Number"
                                    name={value}
                                    id={value}
                                    placeholder= "0"
                                    value={value}
                                    onChange={handleChange("value")}
                                    ></Input>
                            </td>
                            
                                    <td><button onClick={onSubmit} style={{cursor:"pointer",padding:"16px 32px"}} class="hvr-bounce-to-top" >Add</button></td>
                        </tr>
                        {
                        userO.map((obj,i) => {
                            if(obj.role !== 0){
                                return(<></>)
                            }
                            return(
                            <tr key={i} className="userlist">
                            <td>{obj.name}</td>
                            <td>{obj.email}</td>
                            <td><Table>
                                {obj.subject.map((o,i)=>{
                                    return(
                                        <tr key={i}>
                                            <td>{o.name}</td>
                                            <td>{o.value} months</td>
                                        </tr>
                                    )
                                }
                                )}
                                </Table></td>
                            {/* <td><i class="fa fa-plus text-info" style={{cursor:"pointer",marginRight:"20px"}} onClick={()=>{getSubject(obj._id)}} aria-hidden="true"></i>
                            <i class="fa fa-trash text-orange" style={{cursor:"pointer"}} onClick={()=>{deleteaSubject(obj._id)}} aria-hidden="true"></i></td> */}
                        </tr>
                        )
                    })
                    }
                        
                        
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
