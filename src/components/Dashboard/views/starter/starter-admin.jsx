/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col,
    Input
} from 'reactstrap';
import { SalesSummary, Projects, Feeds } from '../../components/admin-dashboard-components';
import { notices, isAuthenticated, getAllNpotices, deleteNotice, updateNotice , getANotice, getAllNotices} from '../../../helper/index'

import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';

const Starter = () => {
   const [file, setfile] = useState("choose")
   const [video, setvideo] = useState("")
   const [emailT, setemailT] = useState("")
   const [emailA, setemailA] = useState("")

   const [noticeO, setnoticeO] = useState([])
    const [, seterrorF] = useState(false)
    const [update, setupdate] = useState(false)
    const [uid, setuid] = useState("")

    const loadAllnotice = () =>{
        getAllNotices().then(data =>{
            console.log(data)
          if(data)
          if(data.error){
            seterrorF(data.error)
          }
          else{
            setnoticeO(data)
          }
        })
      }
      
      useEffect (() => {
        loadAllnotice()
        },[])
      const successMessage = () =>(
          <div className="row ">
                  <div className="col-md-6 offset-sm-3 text-left">
                      <div className="alert alert-success" style={{display: success ? "" : "none"}}>
                          Congratulations!!! Notice is added.
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
      const [project, setProject] = useState({
          title: "",
          description: "",
          date: "",
          error:"",
          success: false
      })
      const {title, description, date, success, error} = project;
     
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
          
          notices({title,description,date})
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
                          title:"",
                          description:"",
                          date: "",
                          error:"",
                          success: true
                      })
                      setrefresh(!refresh)
                  }
              })
              .catch(console.log("Error in notices"))
      }
      const deleteaNotice = catuctId => {
          deleteNotice(catuctId).then(data=>{
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
      const getNotice = noticeId => {
          getANotice(noticeId).then(data=>{
              console.log(data.date,"d")
              if(data.error)
              {
                  console.log(data.error)
                  // setValues({...values,error:data.error})
              }
              else{
                  setProject({
                      ...project,
                      title: data.title,
                      description: data.description,
                      date: data.date
                  })
                  setuid(data._id)
                  setupdate(true)
                  setrefresh(!refresh)
              }
          })
      }
      const updateaNotice = (event,nid) => {
          event.preventDefault();
          setProject({
              ...project,error: false
          });
          updateNotice(nid,{title,description,date}).then(data=>{
              console.log(data)
              if(data.error)
              {
                  console.log(data.error)
                  // setValues({...values,error:data.error})
              }
              else{
                  setProject({
                      ...project,
                      title: "",
                      description: "",
                      date: "",
                      error:"",
                      success: true
                  })
                  setrefresh(!refresh)
                  setupdate(false)
              }
          })
      }
  
     useEffect(() => {
      setProject({
          ...project,error: false
      })
     }, [project])
     const [refresh, setrefresh] = useState(true)
     useEffect(() => {
         loadAllnotice()
     }, [refresh])

    return (
        <div >
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
            <Row className="text-center">
                <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        {/* <CardImg top width="100%" src={img1} /> */}
                        <CardBody>
                            <CardTitle>Add Teacher</CardTitle>
                            <CardSubtitle>Provide email of the teacher.</CardSubtitle>
                            <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter email here.."
                                    value={emailT}
                                    onChange={e=> setemailT(e.target.value)}
                                    style={{marginTop:"1rem"}}
                                   
                                    ></Input>
                                   
                            <Button style={{marginTop:"1rem"}}>Add</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        {/* <CardImg top width="100%" src={img1} /> */}
                        <CardBody>
                            <CardTitle>Add Admin</CardTitle>
                            <CardSubtitle>Provide email of the admin.</CardSubtitle>
                            <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter email here.."
                                    value={emailA}
                                    onChange={e=> setemailA(e.target.value)}
                                    style={{marginTop:"1rem"}}
                                   
                                    ></Input>
                                   
                            <Button style={{marginTop:"1rem"}}>Add</Button>
                        </CardBody>
                    </Card>
                </Col>
                
            </Row>
            <Row className="text-center">
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
                                    id="video"
                                    placeholder="Topic.."
                                    value={video}
                                    onChange={e=> setvideo(e.target.value)}
                                    style={{marginTop:"1rem"}}
                                   
                                    ></Input>
                                    <Input
                                    type="text"
                                    name="video"
                                    id="video"
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
                                    id="file"
                                    placeholder=" : "
                                    onChange={e=> setfile(e.target.files[0])}
                                    style={{marginLeft:"28%",marginTop:"1rem"}}
                                    ></Input>
                                    <Input
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
                                    id="video"
                                    placeholder="Description.."
                                    value={video}
                                    onChange={e=> setvideo(e.target.value)}
                                    style={{marginTop:"1rem"}}
                                   
                                    ></Input>
                            <Button style={{marginTop:"1.4rem"}}>Upload</Button>
                        </CardBody>
                    </Card>
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
                            <CardTitle>Add Notice</CardTitle>
                            <CardSubtitle>Provide Title, Description and Date.</CardSubtitle>
                            <Input
                                    type="text"
                                    name={title}
                                    id={title}
                                    placeholder="Title"
                                    value={title}
                                    onChange={handleChange("title")}
                                    style={{marginTop:"1rem"}}
                                   
                                    ></Input>
                                    <Input
                                    type="text"
                                    name={description}
                                    id={description}
                                    placeholder="Description"
                                    value={description}
                                    onChange={handleChange("description")}
                                    style={{marginTop:"1rem"}}
                                   
                                    ></Input>
                                    <Input
                                    type="date"
                                    name="date"
                                    id="date"
                                    placeholder="1 hr."
                                    value={date}
                                    onChange={handleChange("date")}
                                    style={{maxWidth:"200px"}}
                                    ></Input>
                                    <Button className="hvr-bounce-to-top" onClick={onSubmit} style={{marginTop:"1rem"}}>Add</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Starter;
