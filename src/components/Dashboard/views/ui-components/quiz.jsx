import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { uploadDocument, getAllUSers,isAuthenticated, createQuiz, getQuiz } from '../../../helper/index';

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

const AddQuiz = ({c})=> {
    const [values, setValues] = useState({
        subject:"",
        title:"",
        endTime: "",
        start:"",
        teacher:"",
        loading:false,
        error:"",
        getRedirect: false,
        createdQuiz:"",
        formData:""
    })
    const{user, token} = isAuthenticated();

    const [quizzes, setquizzes] = useState([])
    const [refresh, setrefresh] = useState(true)
    const loadAllMyQuizzes = ()=>{
      console.log(user._id,"heyy")
      getQuiz(user._id).then(data=>{
        console.log(data,"quizdata")
        if(data){
          if(data.error){
            console.log(error)
          }
          else{
            setquizzes(data.data)
          }
        }
      })
    }

    useEffect(() => {
      loadAllMyQuizzes()
    },[refresh])
    
    const { subject,title,endTime,start, loading,error,getRedirect,createdQuiz,formData,teacher} = values;

    const successMessage = () =>{
        console.log(createdQuiz)
        return(
        <div className="row ">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" style={{display: createdQuiz ? "" : "none"}}>
                        Quiz Added to DB.
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
      const handleChange = name=> event =>{
          const v = name === "img"? event.target.files[0]:event.target.value

           setValues({...values,[name]: v});
           console.log(values)
          
      }

        
        const Submit = event =>{
            event.preventDefault();
            console.log("Insideeee",values)
            setValues({...values,error:"",loading: true,teacher:user._id})
            createQuiz({title,subject,endTime,start,teacher}).then(data =>{
                console.log(data)
                if(data.error){
                  console.log(data.error)
                    setValues({...values,error:data.error})
                }
                else{
                  console.log(data,"quiz")
                    setValues({
                        ...values,
                        subject:"",
                        title:"",
                        endTime:"",
                        start:"",
                        loading:false,
                        createdQuiz: true,
                    })
                }
            })
            .catch(()=>{
                console.log("Error in creating Quiz")
            })
        }

    const catForm =() =>(
        <form >
          <Row className="text-center" style={{paddingBottom:"5vmin"}}>
            <Card style={{margin: "auto"}}>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Add Quiz</CardTitle>
                        <CardSubtitle>Click on them to add/update questions</CardSubtitle>
                    </div>
                    
                </div>
                {successMessage()}
                {errorMessage()}
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Name</th>
                            <th className="border-0">Subject</th>
                            <th className="border-0">Start</th>
                            <th className="border-0">End</th>
                        </tr>
                    </thead>
                    <tbody>
                <tr>           
                      <td>
                      <div className="form-group">
                        <input
                          onChange={handleChange("title")}
                          name="title"
                          className="form-control"
                          placeholder="title"
                          value={title}
                        />
                      </div>
                      </td>
                      <td>
                      <div className="form-group">
                        <input
                          onChange={handleChange("subject")}
                          name="subject"
                          className="form-control"
                          placeholder="subject"
                          value={subject}
                        />
                      </div>
                      </td>
                      <td>
                      <div className="form-group">
                        <input
                          onChange={handleChange("start")}
                          type="time"
                          name="start"
                          className="form-control"
                          placeholder="Start Time"
                          value={start}
                        />
                      </div>
                      </td>
                      <td>
                      <div className="form-group">
                        <input
                          onChange={handleChange("endTime")}
                          type="time"
                          name="endTime"
                          className="form-control"
                          placeholder="End Time"
                          value={endTime}
                        />
                      </div> 
                      </td>
           
        
        <td><i class="fa fa-plus text-success" style={{cursor:"pointer",marginRight:"20px", marginTop:"6px", fontSize:"20px"}} onClick={Submit} aria-hidden="true"></i>    </td>     
      </tr>    
            {quizzes && quizzes.map((obj,index) => (
                
              <tr key={index}>
                  <td>{obj.title}</td>
                  <td>{obj.subject}</td>
                  <td>{obj.start}</td>
                  <td>{obj.endTime}</td>
                  <Link to={`/quiz/${obj._id}`} ><td>Add Questions</td></Link> 
              </tr>
            ))}  
            {console.log(quizzes.data)}
                    </tbody>
                    </Table>
            </CardBody>
        </Card >
    </Row>
    <Row>

    </Row>
    </form>
    );
  return (
    
            <div class="col-md-8 offset-md-2">
                {catForm()}
            </div>
       
  );
}



export default AddQuiz;
