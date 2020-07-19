/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react';
import {uploadDocument ,classrooms, getAllClassrooms,getAClassroom, updateClassroom,deleteClassroom,isAuthenticated} from '../../../helper/index'
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


const Starter = () => {
   const [file, setfile] = useState()
   const [video, setvideo] = useState("")
   const [classroomO, setclassroomO] = useState([])
    const [update, setupdate] = useState(false)
    const [uid, setuid] = useState("")
    const [errorF, seterrorF] = useState(false)

    const uploadFiles = (event, file1) => {
        event.preventDefault();
        console.log('I was here')
        // if(!file1){
        //     console.log("no file selected");
        // }
        // uploadDocument(file);
    }

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
            error:"",
            success: false
        })
        const {name, description , subject, success, error} = project;
       
        const handleChange = name => event => {
            setProject({
                ...project,error: false, [name]: event.target.value
            })
        }
        const onclassroomSubmit = event => {
            event.preventDefault();
            setProject({
                ...project,error: false
            });
            
            classrooms({name, description, subject})
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
                        subject: data.subject
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
            updateClassroom(cid,{name,description,subject}).then(data=>{
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
                        error:"",
                        success: true
                    })
                    setrefresh(!refresh)
                    setupdate(false)
                }
            })
        }
        const [refresh, setrefresh] = useState(true)
        useEffect(() => {
            loadAllclassroooms()
        }, [refresh])
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
            <Row>
                <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
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
                </Col>
                <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        {/* <CardImg top width="100%" src={img2} /> */}
                        <CardBody>
                            <CardTitle>Add Documents</CardTitle>
                            <CardSubtitle>Upload the notes/assignments here.</CardSubtitle>
                            <Input
                                    type="file"
                                    name="file"
                                    id="file1"
                                    placeholder=" : "
                                    onChange={e=> setfile(e.target.files)}
                                    style={{marginLeft:"28%",marginTop:"1rem"}}
                                    ></Input>
                                    {/* <Input
                                    type="text"
                                    name="video"
                                    id="video"
                                    placeholder="Topic.."
                                    value={video}
                                    onChange={e=> setvideo(e.target.value)}
                                    style={{marginTop:"1rem"}}
                                   
                                    ></Input>
                                    <Input
                                    type="text"
                                    name="video"
                                    id="video4"
                                    placeholder="Description.."
                                    value={video}
                                    onChange={e=> setvideo(e.target.value)}
                                    style={{marginTop:"1rem"}}
                                   
                                    ></Input> */}
                            <Button style={{marginTop:"1.4rem"}} onClick={e => uploadFiles(e,file)}>Upload</Button>
                        </CardBody>
                    </Card>
                </Col>
                
            </Row>
            
            <Row className="text-center" style={{paddingBottom:"5vmin"}}>
            <Card style={{margin: "auto"}}>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Add Classroom</CardTitle>
                        <CardSubtitle>Enter Name Description and choose Subject</CardSubtitle>
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
                                <option value="Physics">Physics</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Maths">Maths</option>
                                <option value="Biology">Biology</option>
                            </Input></td>
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
                                        <CardSubtitle>{obj.subject}</CardSubtitle>
                                        <CardBody>{obj.description}</CardBody>
                                        <div> <i class="fa fa-plus text-info" style={{cursor:"pointer",marginRight:"20px"}} onClick={()=>{getClassroom(obj._id)}} aria-hidden="true"></i>
                                        <i class="fa fa-trash text-orange" style={{cursor:"pointer"}} onClick={()=>{deleteaClassroom(obj._id)}} aria-hidden="true"></i></div>
                                </Card>
                                </Col>)
                           
                        
                    })}
                        </Row>
        </div>
    );
}

export default Starter;
