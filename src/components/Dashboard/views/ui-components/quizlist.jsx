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

  const QuizList = () =>{
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
    },[refresh])

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
                        <Link to={`/start/quiz/${obj._id}`}> Start </Link>
                    </CardBody>
                </Card>
            ))}
        </React.Fragment>
        
    )

  }

  export default QuizList