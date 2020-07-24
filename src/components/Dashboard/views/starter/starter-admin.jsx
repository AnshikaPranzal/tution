/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react';
import {notices,isAuthenticated,getAllNotices,deleteNotice,updateNotice ,getANotice, getAllUSers, } from '../../../helper/index'
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
    Input,
    Table
} from 'reactstrap';
import { SalesSummary, Projects, Feeds } from '../../components/admin-dashboard-components';
import Subject from '../ui-components/SubjectCRUD';
import $ from 'jquery'

import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';

const Starter = () => {

    $(document).ready(()=>{
        $('.sl').addClass('hide');
    })
    $('.bsm').click(() => {
        $('.sm').addClass('hide');
        $('.sl').removeClass('hide');
    })
    $('.bsl').click(() =>{
        $('.sl').addClass('hide')
        $('.sm').removeClass('hide')
    })
    
    $(document).ready(()=>{
        $('.wsl').addClass('hide');
    })
    $('.bwsm').click(() => {
        $('.wsm').addClass('hide');
        $('.wsl').removeClass('hide');
    })
    $('.bwsl').click(() =>{
        $('.wsl').addClass('hide')
        $('.wsm').removeClass('hide')
    })

    $(document).ready(()=>{
        $('.msl').addClass('hide');
    })
    $('.bmsm').click(() => {
        $('.msm').addClass('hide');
        $('.msl').removeClass('hide');
    })
    $('.bmsl').click(() =>{
        $('.msl').addClass('hide')
        $('.msm').removeClass('hide')
    })

   const [file, setfile] = useState("choose")
   const [video, setvideo] = useState("")
   const [emailT, setemailT] = useState("")
   const [emailA, setemailA] = useState("")

   const [noticeO, setnoticeO] = useState([])
   const [userO, setuserO] =useState([])
   var students = 0
   var studentsarray = []
   var weekstudents = 0
   var weekstudentsarray = []
   var monthstudents = 0
   var monthstudentsarray = []
   var difference = 0
   var usercreation = ""
    const [errorF, seterrorF] = useState(false)
    const [errorU, seterrorU] = useState(false)
    const [update, setupdate] = useState(false)
    const [uid, setuid] = useState("")
  
    
    const loadAllnotices = () =>{
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
    const loadAllusers = () =>{
        getAllUSers().then(data =>{
            console.log(data)
          if(data)
          if(data.error){
            seterrorF(data.error)
          }
          else{
            setuserO(data)
            
            
          }
        })
      }
     
     
    
    useEffect (() => {
      loadAllnotices()
      },[])
    useEffect (() => {
        loadAllusers()
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
    const [project, setProject] = useState({
        title: "",
        description: "",
        date: "",
        error:"",
        success: false
    })
    const {title,description ,date,success,error} = project;
   
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
        
        notices({title, description, date})
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
                        title: "",
                        description: "",
                        date: "",
                        error:"",
                        success: true
                    })
                    setrefresh(!refresh)
                }
            })
            .catch(console.log("Error in Noticees"))
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

//    useEffect(() => {
//     setProject({
//         ...project,error: false, name: nameT, email: emailT
//     })
//    }, [project, nameT, emailT])
   const [refresh, setrefresh] = useState(true)
   useEffect(() => {
       loadAllnotices()
   }, [refresh])
   useEffect(() => {
    loadAllusers()
}, [refresh])

    return (
        <div >
        <Row className="text-center">
            {
                                userO.map((obj,i) => {
                                    if(obj.role === 0){
                                        students = students + 1
                                        studentsarray[students-1] = obj
                                        usercreation = `${obj.createdAt.substring(5,7)}/${obj.createdAt.substring(8,10)}/${obj.createdAt.substring(0,4)}`
                                         difference = Math.floor(((new Date().getTime())-(new Date(usercreation).getTime()))/(1000 * 3600 * 24))
                                         console.log(difference)
                                        if(difference <= 7)
                                        {
                                            weekstudents= weekstudents + 1
                                            weekstudentsarray[weekstudents - 1] = obj
                                        }
                                        if(difference <= 30){
                                            monthstudents= monthstudents + 1
                                            monthstudentsarray[monthstudents-1] = obj
                                        }
                                        if(students === 0){
                                            $('.bsm').addClass('hide')
                                        }
                                        if(weekstudents === 0){
                                            $('.bwsm').addClass('hide')
                                        }
                                        if(monthstudents === 0){
                                            $('.bmsm').addClass('hide')
                                        }
                                        
                                    }
                                })
                            }
            <Col xs="12" md="4">
            
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card style={{borderRadius: "10px", backgroundColor: "cornflowerblue", color: "white"}}>
                        {/* <CardImg top width="100%" src={img2} /> */}
                        <CardBody>
                            <CardTitle>Total Registered Students</CardTitle>
                           
                            <h4>{students}</h4>
                            <div className="see-more sm"><text className="see-more-button bsm" >See more</text></div>
                            <div class="see-less sl">
                            {
                                studentsarray.map((obj,i) => {
                                    return(
                                        <>
                                    <text>{obj.name}</text>
                                    <br></br>
                                    </>
                                    )
                                })
                            }
                            <text className="see-less-button bsl" >See less</text>
                            </div>
                        </CardBody>
                    </Card>
                    
                </Col>
                <Col xs="12" md="4">
                <Card style={{borderRadius: "10px", backgroundColor: "red", color: "white"}}>
                        {/* <CardImg top width="100%" src={img2} /> */}
                        <CardBody>
                            <CardTitle>Students registered in last 1 week</CardTitle>
                            
                <h4>{weekstudents}</h4>
                <div className="see-more wsm"><text className="see-more-button bwsm" >See more</text></div>
                            <div class="see-less wsl">
                {
                                weekstudentsarray.map((obj,i) => {
                                    return(
                                        <>
                                    <text>{obj.name}</text>
                                    <br></br>
                                    </>
                                    )
                                })
                            }
                            <text className="see-less-button bwsl" >See less</text>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                <Card style={{borderRadius: "10px", backgroundColor: "green", color: "white"}}>
                        {/* <CardImg top width="100%" src={img2} /> */}
                        <CardBody>
                            <CardTitle>Students regidtered in last 30 days</CardTitle>
                            
                <h4>{monthstudents}</h4>
                <div className="see-more msm"><text className="see-more-button bmsm" >See more</text></div>
                            <div class="see-less msl">
                {
                                monthstudentsarray.map((obj,i) => {
                                    return(
                                        <>
                                    <text>{obj.name}</text>
                                    <br></br>
                                    </>
                                    )
                                })
                            }
                            <text className="see-less-button bmsl" >See less</text>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
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
            <Row className="text-center" style={{paddingBottom:"5vmin"}}>
            <Card style={{margin: "auto"}}>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Add Notice</CardTitle>
                        <CardSubtitle>Enter Title Description and Date</CardSubtitle>
                    </div>
                    
                </div>
                {successMessage()}
                {errorMessage()}
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Title</th>
                            <th className="border-0">Description</th>
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
                                    name={title}
                                    id={title}
                                    placeholder="Title"
                                    value={title}
                                    onChange={handleChange("title")}
                                    ></Input>
                                     
                                    </div>
                                </div>
                            </td>
                            <td>
                                {/* <div className="d-flex no-block align-items-center">
                                    <div className=""> */}
                                    <Input
                                    type="text"
                                    name={description}
                                    id={description}
                                    placeholder="Description"
                                    value={description}
                                    onChange={handleChange("description")}
                                    ></Input>
{/*                                      
                                    </div>
                                </div> */}
                            </td>
                            
                            
                            <td className="blue-grey-text  text-darken-4 font-medium"><Input
                                    type="date"
                                    name="date"
                                    id="date"
                                    placeholder="1 hr."
                                    value={date}
                                    onChange={handleChange("date")}
                                    style={{maxWidth:"200px"}}
                                    ></Input></td>
                                    <td>{update === true ? (<i onClick={e=>{updateaNotice(e,uid)}} style={{cursor:"pointer", marginTop:"6px", fontSize:"20px"}} className="fa fa-check text-success" aria-hidden="true"></i>):(<i onClick={onSubmit} style={{cursor:"pointer",marginTop:"6px", fontSize:"20px"}} className="fa fa-plus text-success" aria-hidden="true"></i>)}</td>
                        </tr>
                        {noticeO.map((obj,i)=>{
                            return(
                            <tr key={i}>
                            <td>
                                    <div className="d-flex no-block align-items-center">
                                            {/* <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div> */}
                                            <div className="">
                                                <h5 className="mb-0 font-16 font-medium">{obj.title}</h5>
                                            </div>
                                    </div>
                            </td>
                            <td>{obj.description}</td>
                            
                            <td className="blue-grey-text  text-darken-4 font-medium">{obj.date.substring(8, 10)}{obj.date.substring(4, 7)}-{obj.date.substring(0, 4)}</td>
                            <td><i class="fa fa-plus text-info" style={{cursor:"pointer",marginRight:"20px"}} onClick={()=>{getNotice(obj._id)}} aria-hidden="true"></i>
                            <i class="fa fa-trash text-orange" style={{cursor:"pointer"}} onClick={()=>{deleteaNotice(obj._id)}} aria-hidden="true"></i></td>
                        </tr>
                        )
                    })}
                        
                        
                    </tbody>
                </Table>
            </CardBody>
        </Card >
            </Row>

                    <Subject></Subject>
        </div>
    );
}

export default Starter;
