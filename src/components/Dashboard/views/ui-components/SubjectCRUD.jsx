import React, { useState } from 'react';


import { isAuthenticated, subjects, getAllSubjects, getASubject, deleteSubject, updateSubject } from '../../../helper/index'

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

 
    const [subject, setsubject] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [errorF, seterrorF] = useState(false)
    const [update, setupdate] = useState(false)
    const [uid, setuid] = useState("")
    const [reload, setreload] = useState(false)
  
  
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
   const [refresh, setrefresh] = useState(true)
    
    useEffect (() => {
      loadAllSubjects()
      },[refresh])


      

    const successMessage = () =>{
        
        return(
        <div className="row ">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" style={{display: success ? "" : "none"}}>
                        Congratulations!!! Subject is added.
                        
                    </div>
                </div>
        </div>
    )}

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
    // console.log(user)
    const [project, setProject] = useState({
        name: "",
        price:0,
        value:0,
        error:"",
        success: false
    })
    const {name,price,value,success,error} = project;
   
    const handleChange = name => event => {
        setProject({
            ...project,error: false, [name]: event.target.value
        })
    }
    const reloading = ()=>{
        setProject({
            ...project,error: false
        })
    }
    const onSubmit = event => {
        event.preventDefault();
        setProject({
            ...project,error: false
        });
        
        subjects({name, price, value})
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
                        name:"",
                        price:0,
                        value:0,
                        error:"",
                        success: true
                    })
                    setrefresh(!refresh)
                }
            })
            .catch(console.log("Error in subjects"))
    }
    const deleteaSubject = catuctId => {
        deleteSubject(catuctId).then(data=>{
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
    const getSubject = classId => {
        getASubject(classId).then(data=>{
            if(data.error)
            {
                console.log(data.error)
                // setValues({...values,error:data.error})
            }
            else{
                setProject({
                    ...project,
                    name: data.name,
                    price: data.price,
                    value: data.value
                })
                setuid(data._id)
                setupdate(true)
                setrefresh(!refresh)
            }
        })
    }
    const updateaSubject = (event,cid) => {
        event.preventDefault();
        setProject({
            ...project,error: false
        });
        updateSubject(cid,{name,price,value}).then(data=>{
            console.log(data)
            if(data.error)
            {
                console.log(data.error)
                // setValues({...values,error:data.error})
            }
            else{
                setProject({
                    ...project,
                    name:"",
                    price: 0,
                    value: 0,
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
//    })



 
    const dashboard = ()=> (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/

        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Add Subject</CardTitle>
                        <CardSubtitle></CardSubtitle>
                    </div>
                    
                </div>
                {successMessage()}
                {errorMessage()}
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Name</th>
                            <th className="border-0">Price</th>
                            <th className="border-0">Value</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Input type="select" className="custom-select" value={name}
                                    onChange={handleChange("name")}>
                                <option value="0">Select</option>
                                <option value="Physics">Physics</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Maths">Maths</option>
                                <option value="Biology">Biology</option>
                            </Input></td>

                            <td>
                            <Input
                                    type="number"
                                    name={price}
                                    id={price}
                                    placeholder="Price in INR"
                                    value={price}
                                    onChange={handleChange("price")}
                                    ></Input>
                            </td>
                            
                            <td>
                            <Input
                                    type="number"
                                    name={value}
                                    id={value}
                                    placeholder="value"
                                    value={value}
                                    onChange={handleChange("value")}
                                    ></Input>
                            </td>
                            
                                    <td>{update === true ? (<i onClick={e=>{updateaSubject(e,uid)}} style={{cursor:"pointer", marginTop:"6px", fontSize:"20px"}} class="fa fa-check text-success" aria-hidden="true"></i>):(<i onClick={onSubmit} style={{cursor:"pointer",marginTop:"6px", fontSize:"20px"}} class="fa fa-plus text-success" aria-hidden="true"></i>)}</td>
                        </tr>
                        {subject.map((obj,i) => {
                            return(
                            <tr key={i}>
                            <td>{obj.name}</td>
                            <td>{obj.price}</td>
                            <td>{obj.value}</td>
                            <td><i class="fa fa-plus text-info" style={{cursor:"pointer",marginRight:"20px"}} onClick={()=>{getSubject(obj._id)}} aria-hidden="true"></i>
                            <i class="fa fa-trash text-orange" style={{cursor:"pointer"}} onClick={()=>{deleteaSubject(obj._id)}} aria-hidden="true"></i></td>
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