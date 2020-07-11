
import React, { useState } from 'react';

import img1 from '../../../assets/images/users/1.jpg';

import { classes,isAuthenticated,getAllClasses,deleteClass,updateClass ,getAClass} from '../../../../helper/index'

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';
import { useEffect } from 'react';

const Projects = () => {

 
    const [classO, setclassO] = useState([])
    const [, seterrorF] = useState(false)
    const [update, setupdate] = useState(false)
    const [uid, setuid] = useState("")
  
  
    const loadAllclasses = () =>{
      getAllClasses().then(data =>{
          console.log(data)
        if(data)
        if(data.error){
          seterrorF(data.error)
        }
        else{
          setclassO(data)
        }
      })
    }
    
    useEffect (() => {
      loadAllclasses()
      },[])
    const successMessage = () =>(
        <div className="row ">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" style={{display: success ? "" : "none"}}>
                        Congratulations!!! Class is added.
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
    const { user } = isAuthenticated();
    console.log(user)
    const nameT = user.name;
    const emailT = user.email;
    const [project, setProject] = useState({
        classLink: "",
        name:nameT,
        email:emailT,
        subject: "",
        Class: "",
        standard:"",
        time: "",
        date: "",
        error:"",
        success: false
    })
    const {classLink,name,email, subject,standard,time ,date,success,error} = project;
   
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
        
        classes({classLink,name,email,subject,standard,time,date})
            .then( (data) =>{
                console.log(data)
                console.log(project)
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
                        Class: "",
                        standard:"",
                        time: "",
                        date: "",
                        error:"",
                        success: true
                    })
                    setrefresh(!refresh)
                }
            })
            .catch(console.log("Error in classes"))
    }
    const deleteaClass = catuctId => {
        deleteClass(catuctId).then(data=>{
            console.log(data)
            if(data.error)
            {
                console.log(data.error)
                // setValues({...values,error:data.error})
            }
            else{
               setrefresh(!refresh)
            }
        })
    }
    const getClass = classId => {
        getAClass(classId).then(data=>{
            console.log(data.date,"d")
            if(data.error)
            {
                console.log(data.error)
                // setValues({...values,error:data.error})
            }
            else{
                setProject({
                    ...project,
                    classLink: data.classLink,
                    subject: data.subject,
                    standard:data.standard,
                    time: data.time,
                    date: data.date
                })
                setuid(data._id)
                setupdate(true)
                setrefresh(!refresh)
            }
        })
    }
    const updateaClass = (event,cid) => {
        event.preventDefault();
        setProject({
            ...project,error: false
        });
        updateClass(cid,{classLink,name,email,subject,standard,time,date}).then(data=>{
            console.log(data)
            if(data.error)
            {
                console.log(data.error)
                // setValues({...values,error:data.error})
            }
            else{
                setProject({
                    ...project,
                    classLink: "",
                    subject: "",
                    Class: "",
                    standard:"",
                    time: "",
                    date: "",
                    error:"",
                    success: true
                })
                setrefresh(!refresh)
                setupdate(false)
            }
        })
    }

//    useEffect(() => {
//     setProject({
//         ...project,error: false, name: nameT, email: emailT
//     })
//    }, [project, nameT, emailT])
   const [refresh, setrefresh] = useState(true)
   useEffect(() => {
       loadAllclasses()
   }, [refresh])
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
                    {/* <div className="ml-auto d-flex align-items-center">
                        <ul className="list-inline font-12 dl mr-3 mb-0">
                            <li className="border-0 p-0 text-orange list-inline-item">
                                <i className="fa fa-circle"></i>
                                Regular Class
								</li>
                            <li className="border-0 p-0 text-success list-inline-item">
                                <i className="fa fa-circle"></i> Doubt Class
								</li>
                        </ul>
                    </div> */}
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
                                    ></Input>
                                     
                                    </div>
                                </div>
                            </td>
                            <td><Input type="select" className="custom-select" value={subject}
                                    onChange={handleChange("subject")}>
                                <option value="0">Select</option>
                                <option value="Physics">Physics</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Maths">Maths</option>
                            </Input></td>

                            <td>
                            <Input type="select" className="custom-select" value={standard}
                                    onChange={handleChange("standard")}>
                                <option value="0">Select</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
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
                                    <td>{update === true ? (<i onClick={e=>{updateaClass(e,uid)}} style={{cursor:"pointer", marginTop:"6px", fontSize:"20px"}} class="fa fa-check text-success" aria-hidden="true"></i>):(<i onClick={onSubmit} style={{cursor:"pointer",marginTop:"6px", fontSize:"20px"}} class="fa fa-plus text-success" aria-hidden="true"></i>)}</td>
                        </tr>
                        {classO.map((obj,i)=>{
                            return(
                            <tr key={i}>
                            <td>
                                    <div className="d-flex no-block align-items-center">
                                            <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>
                                            <div className="">
                                                <h5 className="mb-0 font-16 font-medium">{obj.name}</h5><span>{obj.email}</span>
                                            </div>
                                    </div>
                            </td>
                            <td>{obj.subject}</td>
                            <td>{obj.standard}</td>
                            <td>{obj.time}</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">{obj.date.substring(8, 10)}{obj.date.substring(4, 7)}-{obj.date.substring(0, 4)}</td>
                            <td><i class="fa fa-plus text-info" style={{cursor:"pointer",marginRight:"20px"}} onClick={()=>{getClass(obj._id)}} aria-hidden="true"></i>
                            <i class="fa fa-trash text-orange" style={{cursor:"pointer"}} onClick={()=>{deleteaClass(obj._id)}} aria-hidden="true"></i></td>
                        </tr>
                        )
                    })}
                        
                        
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
