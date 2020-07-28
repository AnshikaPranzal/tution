/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import {classrooms, getAllClassrooms,getAClassroom, updateClassroom,deleteClassroom,isAuthenticated, getAUser, getAllSubjects} from '../../../helper/index'
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
import { SalesSummary, Projects, Feeds } from '../../components/teacher-dashboard-components';
import { useRef } from 'react';
// import AddDocument from '../ui-components/document'
import AddDQuiz from '../ui-components/quiz'
import AddQuiz from '../ui-components/quiz';

const Starter = () => {
   const [file, setfile] = useState()
   const [video, setvideo] = useState("")
   const [classroomO, setclassroomO] = useState([])
    const [update, setupdate] = useState(false)
    const [uid, setuid] = useState("")
    const [errorF, seterrorF] = useState(false)
    const [values, setvalues] = useState({
        formData: "",
        hello:""
    })

    const [refresh, setrefresh] = useState(true)

    const {formData}=values

    const [sub, setsubject] = useState([])

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
    const loadAllclassroooms = () =>{
        getAllClassrooms().then(data =>{
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

        const successMessage = () =>(
            <div className="row ">
                    <div className="col-md-6 offset-sm-3 text-left">
                        <div className="alert alert-success" style={{display: success ? "" : "none"}}>
                            Congratulations!!! Classroom is added.
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

        const { user } = isAuthenticated();

        const [project, setProject] = useState({
            name: "",
            description: "",
            subject: "",
            owner: user._id,
            standard: 0,
            error:"",
            success: false
        })

        const {name, description , subject, owner, standard, success, error} = project;
       
        const handleChange = name => event => {
            // const v = name === "formData"? event.target.files[0]:event.target.value

            // formData.set(name,v)
            setProject({
                ...project,error: false, [name]: event.target.value
            })
        }
        
        const onclassroomSubmit = event => {
            event.preventDefault();
            setProject({
                ...project,error: false
            });
            
            classrooms({name, description, subject,owner, standard})
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
                            name: "",
                            description: "",
                            subject: "",
                            owner: user._id,
                            standard: 0,
                            error:"",
                            success: true
                        })
                        setrefresh(!refresh)
                    }
                })
                .catch(console.log("Error in Classrooms"))
        }
        const deleteaClassroom = catuctId => {
            deleteClassroom(catuctId).then(data=>{
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
        const getClassroom = catuctId => {
            getAClassroom(catuctId).then(data=>{
                
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
                        standard: data.standard,
                    })
                    setuid(data._id)
                    setupdate(true)
                    setrefresh(!refresh)
                }
            })
        }
        const updateaClassroom = (event,cid) => {
            event.preventDefault();
            setProject({
                ...project,error: false
            });
            updateClassroom(cid,{name,description,subject, standard}).then(data=>{
                console.log(data)
                if(data.error)
                {
                    console.log(data.error)
                    // setValues({...values,error:data.error})
                }
                else{
                    setProject({
                        ...project,
                        name: "",
                        description: "",
                        subject: "",
                        standard: 0,
                        error:"",
                        success: true
                    })
                    setrefresh(!refresh)
                    setupdate(false)
                }
            })
        }
        useEffect(() => {
            loadAllclassroooms()
        }, [refresh])
        const handleChange2 = name=> event =>{
            const v = name === "formData"? event.target.files[0]:event.target.value

            formData.set(name,v)
             setvalues({...values,[name]:v});
            
        }
        const [file2, setfile2] = useState([])
    return (
        <div className="text-center">
            <Row>
                <Col sm={6} lg={8}>
                    <SalesSummary />
                </Col>
                <Col sm={6} lg={4}>
                    <Feeds />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Projects />
                </Col>
            </Row>
            <Row className="text-center" style={{paddingBottom:"5vmin"}}>
                
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card style={{margin: "auto"}}>
                        {/* <CardImg top width="100%" src={img1} /> */}
                        <CardBody>
                            <CardTitle>Add Video</CardTitle>
                            <CardSubtitle>Provide the link for your youtube video.</CardSubtitle>
                            <Input
                                    type="text"
                                    name="video"
                                    id="video"
                                    placeholder="Enter link here.."
                                    value={video}
                                    onChange={e=> setvideo(e.target.value)}
                                    style={{marginTop:"1rem"}}
                                   
                                    ></Input>
                                    <Input
                                    type="text"
                                    name="video"
                                    id="video1"
                                    placeholder="Topic.."
                                    value={video}
                                    onChange={e=> setvideo(e.target.value)}
                                    style={{marginTop:"1rem"}}
                                   
                                    ></Input>
                                    <Input
                                    type="text"
                                    name="video"
                                    id="video2"
                                    placeholder="Description.."
                                    value={video}
                                    onChange={e=> setvideo(e.target.value)}
                                    style={{marginTop:"1rem"}}
                                   
                                    ></Input>
                            <Button style={{marginTop:"1rem"}}>Button</Button>
                        </CardBody>
                    </Card>
                
                {/* <Col xs="12" md="6">
                   
                    <Card>
                        <CardBody>
                            <AddDocument></AddDocument>
                        </CardBody>
                    </Card>
                </Col> */}
                
            </Row>
            
            <Row className="text-center" style={{paddingBottom:"5vmin"}}>
            <Card style={{margin: "auto"}}>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Add Classroom</CardTitle>
                        <CardSubtitle>Enter Name Description and choose Subject, Standard</CardSubtitle>
                    </div>
                    
                </div>
                {successMessage()}
                {errorMessage()}
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Name</th>
                            <th className="border-0">Description</th>
                            <th className="border-0">Subject</th>
                            <th className="border-0">Standard</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="">
                                    <Input
                                    type="text"
                                    name={name}
                                    id={name}
                                    placeholder="Name"
                                    value={name}
                                    onChange={handleChange("name")}
                                    ></Input>
                                     
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="">
                                    <Input
                                    type="text"
                                    name={description}
                                    id={description}
                                    placeholder="Description"
                                    value={description}
                                    onChange={handleChange("description")}
                                    ></Input>
                                     
                                    </div>
                                </div>
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
                            <Input type="select" className="custom-select" value={standard}
                                    onChange={handleChange("standard")}>
                                <option value="0">Select</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </Input>
                            </td>
                                    <td>{update === true ? (<i onClick={e=>{updateaClassroom(e,uid)}} style={{cursor:"pointer", marginTop:"6px", fontSize:"20px"}} className="fa fa-check text-success" aria-hidden="true"></i>):(<i onClick={onclassroomSubmit} style={{cursor:"pointer",marginTop:"6px", fontSize:"20px"}} className="fa fa-plus text-success" aria-hidden="true"></i>)}</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </CardBody>
        </Card >
    </Row>
    <Row>
                {classroomO.map((obj,i)=>{
                    return(
                    // <tr key={i}>
                    <Col xs="12" md="4">
                        <Card key={i}>
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
                                             <i class="fa fa-plus text-info" style={{cursor:"pointer",marginRight:"20px"}} onClick={()=>{getClassroom(obj._id)}} aria-hidden="true"></i>
                                        <i class="fa fa-trash text-orange" style={{cursor:"pointer"}} onClick={()=>{deleteaClassroom(obj._id)}} aria-hidden="true"></i></div>
                                </Card>
                                </Col>)
                           
                        
                    })}
                        </Row>

    <Row>  
        <Col xs="12" md="12">
           <AddDQuiz></AddDQuiz>          
        </Col>
    </Row>

        </div>
    );
}

export default Starter;
