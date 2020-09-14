import React, {useState,useEffect} from 'react';
import { getQuiz, isAuthenticated, subquizzes } from '../../../helper/index';

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
import { Link } from 'react-router-dom';

  const QuizList = (props) =>{
    const { user} = isAuthenticated()
    const [quizzes, setquizzes] = useState([])
    const [refresh, setrefresh] = useState(true)
    const loadAllMyQuizzes = ()=>{
      console.log(user._id,"heyy")
      subquizzes({user_id: user._id}).then(data=>{
        console.log(data,"quizdata")
        if(data){
          if(data.error){
            console.log(data.error)
          }
          else{
            setquizzes(data)
          }
        }
      })
    }

    useEffect(() => {
      loadAllMyQuizzes()
      if(localStorage.getItem("attemptedquiz"))
      localStorage.removeItem("attemptedquiz")
    },[refresh])

    const startTest = (e)=>{
      
      localStorage.setItem("start",Date.now())
      return true
      
    }

    return(
        <React.Fragment>
            
            {quizzes.map((obj,i)=>(
                <Card>
                    <CardBody>
                        <div className="d-flex align-items-center">
                            <div>
                                <CardTitle>{obj.title}</CardTitle>
                                <CardSubtitle>{obj.subject}</CardSubtitle>
                            </div>
                            
                        </div>     
                                           
                        <a href={`/start/quiz/${obj._id}`} onClick={()=>startTest()} > Start </a>
                    </CardBody>
                </Card>
            ))}
        </React.Fragment>
        
    )

  }

  export default QuizList