/* eslint-disable no-lone-blocks */
import React, {useState,useEffect} from 'react';
import { getQuestions, createResponse, isAuthenticated } from '../../../helper/index';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col,
    Input  } from 'reactstrap';
import ImageHelper from '../../../helper/ImageHelper';
import NumberCard from './numberCard';
import Timer from './timer.jsx';
import { Link } from 'react-router-dom';

  const QuizComponent = (props)=>{
     
    const qid= props.qid;

    const [quiz, setquiz] = useState({
        title:"",
        subject:"",
        questions:[],
        endtime:"",
        duration:"",
        start:""
      })

      const [showP, setshowP] = useState(true)
      const [showN, setshowN] = useState(true)
    const loadQuiz=()=>{
        getQuestions(qid).then(data=>{
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
    const {user} = isAuthenticated()

    useEffect(() => {
        loadQuiz()
    })

    const [count] = useState(0)
    const {duration} = quiz
    
    const {cSelected,onCheckboxBtnClick,finish,setfinish,setc,marks} = props
    const [correct, setcorrect] = useState([])
    const [review, setreview] = useState([])
    const [totalmarks, settotalmarks] = useState(0)
    const onSubmit = ()=>{
        const totalMarks = dec()
        settotalmarks(totalMarks)
        createResponse({cSelected,quiz,user,totalMarks}).then(data=>{
            if(data){
                if(data.error){
                    console.log(data.error)
                }
                else{
                    setfinish(true)
                    setc(0)
                } 
            }
        })
    }

    const markforreview = (i)=>{
        review.push(i)
        setreview(review)
    }

    var elements=[];
    for(var i=0;i<quiz.questions.length;i++){
        elements.push(<Col md={2} style={{height:"3em",margin:"0",width:"100%"}} className="no-col"><NumberCard c={i} cSelected={cSelected}></NumberCard></Col>);
    }
    const dec = ()=>{
        {quiz.questions.map((x)=>
            {
                var f = 0
                x.options.map((y)=>{
                    if(y.isCorrect === false){
                        {cSelected.map((o) => {
                            if(o === y._id){
                                f=1;
                            }
                        })}
                    }
                    else{
                        var t=0
                        {cSelected.map((o) => {
                            if(o === y._id){
                                t=1;
                            }
                        })}
                        if(t===0){
                            f=1
                        }
                    }
                })
                if(f===0){
                    correct.push(true)
                    setcorrect([...correct])
                }
                else{
                    f=0
                }

            })}
            return correct.length
    }
      return(
          <React.Fragment>
              {finish === true && (<div className="alert alert-success text-center">Submitted!!You Scored:{totalmarks}</div>)}
              <Row>
                  <Col md={8} style={{height:"30rem"}}>
                    <Card style={{height:"100%"}}>
                        <CardBody>
                            <div className="d-flex align-items-center">
                                <div>
                                    <CardTitle>{quiz.title}</CardTitle>
                                    <CardSubtitle>{quiz.subject}</CardSubtitle>
                                </div>
                            </div> 
                            {quiz.questions.map((x,i)=>
                            {
                                return(
                                <div key={i}>{i === props.c && (
                                    <React.Fragment>
                                        <Row>
                                            <Col md={12} className="text-center">
                                                <div style={{marginLeft:"3em"}}><span></span>{x.hasImg &&  <ImageHelper id={x._id}></ImageHelper>}</div>
                                                <div style={{marginLeft:"3em"}}>{props.c+1}.{x.title}</div>
                                            </Col>
                                        </Row>
                                        
                                        <Row style={{marginTop:"3em"}}>
                                            {x.options.map((y)=>{
                                                var f 
                                                   {cSelected.map((o) => {
                                                       const k = (o === y._id) ? true : f
                                                        f=k
                                                        // setflag(true);
                                                        return(<span></span>)
                                                   })}
                                                return(
                                                    <React.Fragment>
                                                {(finish === true) ? (<Col md={6} className="text-center">
                                                    {f === true ? (
                                                        <React.Fragment>
                                                            {y.isCorrect === true ?
                                                                (<div className="alert alert-success">
                                                                    <input type="checkbox" checked={f} aria-label="Checkbox for following text input" style={{marginTop:"4px"}} disabled/>
                                                                    <span style={{marginLeft:"6px"}}>{y.optionValue}</span>
                                                                </div>):
                                                                (<div className="alert alert-danger">
                                                                <input type="checkbox" checked={f} aria-label="Checkbox for following text input" style={{marginTop:"4px"}} disabled/>
                                                                <span style={{marginLeft:"6px"}}>{y.optionValue}</span>
                                                            </div>)}
                                                        </React.Fragment>
                                                    ):(
                                                        <React.Fragment>
                                                            {y.isCorrect === true ?
                                                                (
                                                            
                                                                    <div className="alert">
                                                                        <input type="checkbox" checked={f} aria-label="Checkbox for following text input" style={{marginTop:"4px"}} disabled/>
                                                                        <span style={{marginLeft:"6px"}}>{y.optionValue}</span>
                                                                    </div>
                                                                ):
                                                                (<div className="alert">
                                                                <input type="checkbox" checked={f} aria-label="Checkbox for following text input" style={{marginTop:"4px"}} disabled/>
                                                                <span style={{marginLeft:"6px"}}>{y.optionValue}</span>
                                                            </div>)}
                                                        </React.Fragment>
                                                    )}
                                                </Col>):(
                                                <Col md={6} className="text-center">
                                                    <div>
                                                        <Input type="checkbox" onClick={()=>onCheckboxBtnClick(y._id)} defaultChecked={f} aria-label="Checkbox for following text input" style={{marginTop:"4px"}} />
                                                        <span style={{marginLeft:"6px"}}>{y.optionValue}</span>
                                                    </div>
                                                </Col>)}
                                                </React.Fragment>
                                            )})}
                                            
                                        </Row>
                                        {/* <Row style={{marginTop:"3em"}}>
                                            {i!==0 && <Col md={2}><Button onClick={()=>{props.decrement()}}>Previous</Button></Col>}
                                            {i!==(quiz.questions.length-1) && <Col md={2} style={{marginRight:"0px",marginLeft:"auto"}} onClick={()=>{props.increment()}}><Button>Next</Button></Col>}
                                            {(i===(quiz.questions.length-1) && finish === false) && <Col md={4} style={{marginRight:"0px",marginLeft:"auto"}} onClick={onSubmit}><Button>Finish and Submit</Button></Col>}
                                            {(i===(quiz.questions.length-1) && finish === true) && <Col md={4} style={{marginRight:"0px",marginLeft:"auto"}} ><Link to='/dashboard'><Button>Go to Dashboard</Button></Link></Col>}
                                        </Row> */}
                                        
                                    </React.Fragment>
                                )}</div>
                            )})}                       
                        </CardBody>
                    </Card>
                  </Col>
                  <Col md={4}>
                      <Row>
                      {quiz.questions.map((x,i)=>
                            {
                                var f ,j
                                return(
                                
                                    <React.Fragment key={i}>
                                        
                                            {x.options.map((y)=>{
                                                
                                                {cSelected.map((o) => {
                                                    const g = (o === y._id) ? true : f
                                                    f=g
                                                    // setflag(true);
                                                    return(<span></span>)
                                                })}
                                                
                                            })
                                            }
                                            {review.map((o)=>{
                                                    const g = (o === i) ? true : j
                                                    j=g
                                                    // setflag(true);
                                                    return(<span></span>)
                                                })}
                                            
                                                <React.Fragment>
                                                    {j === true?(
                                                        <Col md={2} style={{height:"3em",margin:"0",width:"100%"}} className="no-col">
                                                        <Card style={{height:"2.5em",padding:"0.5em",borderRadius:"0px",backgroundColor:"#F6FF9F"}} className="text-center">
                                                            {i+1}
                                                        </Card>
                                                        </Col>
                                                    ):(
                                                        <React.Fragment>
                                                        {f === true ?(
                                                            <Col md={2} style={{height:"3em",margin:"0",width:"100%"}} className="no-col">
                                                            <Card style={{height:"2.5em",padding:"0.5em",borderRadius:"0px"}} className="text-center bg-success">
                                                                {i+1}
                                                            </Card>
                                                            </Col>
                                                        ):(
                                                            <Col md={2} style={{height:"3em",margin:"0",width:"100%"}} className="no-col">
                                                            <Card style={{height:"2.5em",padding:"0.5em",borderRadius:"0px",width:"100%"}} className="text-center">
                                                                {i+1}
                                                            </Card>
                                                            </Col>
                                                        )}
                                                        </React.Fragment>
                                                    )}
                                                    
                                                </React.Fragment>
                                    </React.Fragment>
                                
                            )})}  
                      </Row>
                      <Row>
                          <Col className="no-col">
                            <Card className="text-center mt-3">
                                <CardTitle className="text-center mt-3" style={{color:"grey"}}>Time Left</CardTitle>
                                <Timer initialMinute = {20} initialSeconds = {0} setfinish={setfinish}></Timer>
                                <CardSubtitle style={{color:"grey"}}>MaxTime: {duration} Mins.</CardSubtitle>
                            </Card>
                            <Row className="text-center">
                                
                                <Col md={12}>
                                    <button className="btn" onClick={()=>{markforreview(props.c)}} style={{backgroundColor:"#F6FF9F",width:"60%"}}>Mark for Review</button>
                                </Col>
                                {showP &&(<Col md={6} style={{marginTop:"5px"}}>
                                    <button className="btn" onClick={()=>{props.decrement()}} style={{backgroundColor:"#FA8281",width:"100%"}}>Previous</button>
                                </Col>)}
                                {finish === true ? (<Col md={6} style={{marginTop:"5px"}}>
                                    <button className="btn" onClick={()=>{props.increment()}} style={{backgroundColor:"#82F78C",width:"100%"}}>Next</button>
                                </Col>):(<Col md={6} style={{marginTop:"5px"}}>
                                    <button className="btn" onClick={()=>{props.increment()}} style={{backgroundColor:"#82F78C",width:"100%"}}>Next</button>
                                </Col>)}
                                
                                
                            </Row>
                          </Col>
                      </Row>
                  </Col>
              </Row>
              
          </React.Fragment>
      )
  }

  export default QuizComponent