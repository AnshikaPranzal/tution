import React, {useState,useEffect} from 'react';
import { getQuestions, isAuthenticated, createResponse } from '../../../helper/index';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col,
    Input,
    InputGroup,InputGroupAddon,InputGroupText,
    Table
  } from 'reactstrap';
import ImageHelper from '../../../helper/ImageHelper';

  const QuizStudent = (props)=>{
    const qid= props.location.pathname;

    const [quiz, setquiz] = useState({
        title:"",
        subject:"",
        questions:[],
        endtime:"",
        start:""
      })

    const loadQuiz=()=>{
        console.log(qid,"id")

        getQuestions(qid).then(data=>{
          console.log(data,"all questions")
          if(data){
            if(data.error){
              console.log(data.error)
            }
            else{
              setquiz(data.data[0])
            }
          }
        })

         
    }

    const [refresh, setrefresh] = useState(true)

    useEffect(() => {
        loadQuiz()
    }, [refresh])

    const [count, setcount] = useState(0)

    const increment = ()=>{
        return count
    }
    const [qarray, setqarray] = useState([{
        title: "",
        img:"",
        hasImg:false
    }])

    const [cSelected, setCSelected] = useState([]);
    const [rSelected, setRSelected] = useState(null);

    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
        cSelected.push(selected);
        } else {
        cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
        console.log(cSelected)
    }

    const [response, setresponse] = useState([])
    const onSubmitandNext = ()=>{
        response.push(cSelected)
        console.log(response)
    }
    
    const onSubmit = ()=>{
        createResponse(response).then(data=>{
            if(data){
                if(data.error){
                    console.log(data.error)
                }
                else{
                    console.log(data,"<3")
                }
            }
        })
    }
    const [check, setcheck] = useState()
   console.log(Object.keys(quiz.questions)[0],"check")
      return(
          <React.Fragment>
              <Row>
                  <Col md={8}>
                    <Card>
                        <CardBody>
                            <div className="d-flex align-items-center">
                                <div>
                                    <CardTitle>{quiz.title}</CardTitle>
                                    <CardSubtitle>{quiz.subject}</CardSubtitle>
                                </div>
                            </div> 
                            {quiz.questions.map((x,i)=>
                            {
                                console.log(x)
                                return(
                                <div key={i}>{i === count && (
                                    <React.Fragment>
                                        <Row>
                                            <Col md={12} className="text-center">
                                                <div style={{marginLeft:"3em"}}><span></span>{x.hasImg &&  <ImageHelper id={x._id}></ImageHelper>}</div>
                                                <div style={{marginLeft:"3em"}}>{count+1}.{x.title}</div>
                                            </Col>
                                        </Row>
                                        
                                        <Row style={{marginTop:"3em"}}>
                                            {x.options.map((y,j)=>{
                                                // setcheck(false)
                                                var f=false
                                                return(
                                                <Col md={6} className="text-center">
                                                <div>
                                                    {response[count] && response[count].map((o,k)=>{
                                                        
                                                        var i = (o === y._id) && (f=1)
                                                    })}
                                                    <Input addon type="checkbox" onClick={()=>onCheckboxBtnClick(y._id)} checked={f} on aria-label="Checkbox for following text input" style={{marginTop:"4px"}} />
                                                    <span style={{marginLeft:"6px"}}>{y.optionValue}</span>
                                                
                                                </div>
                                            </Col>
                                            )})}
                                            
                                        </Row>
                                        <Row style={{marginTop:"3em"}}>
                                            <Col md={2}><Button onClick={()=>{setcount(count-1)}}>Previous</Button></Col>
                                            <Col md={2} style={{marginRight:"0px",marginLeft:"auto"}} onClick={()=>{setcount(count+1)}}><Button>Skip</Button></Col>
                                            <Col md={3} style={{marginRight:"0px",marginLeft:"auto"}} onClick={()=>onSubmitandNext(x._id)}><Button>Submit and Next</Button></Col>
                                            <Col md={3} style={{marginRight:"0px",marginLeft:"auto"}} onClick={onSubmit}><Button>Submit</Button></Col>
                                        </Row>
                                        
                                    </React.Fragment>
                                )}</div>
                            )})}                       
                        </CardBody>
                    </Card>
                  </Col>
              </Row>
              
          </React.Fragment>
      )
  }

  export default QuizStudent