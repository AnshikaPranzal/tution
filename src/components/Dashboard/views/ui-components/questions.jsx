/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
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
import $ from 'jquery'
import UploadDocument from '../../../UploadDocument';
import {getAClassroom, updateClassroom,deleteClassroom,isAuthenticated, getAQuiz} from '../../../helper';


const Questions = (props) => {

    const qid= props.match.params.handle;
    console.log(props)
    const [quiz, setquiz] = useState()
    const loadQuiz=()=>{
        console.log(qid,"id")
        getAQuiz(qid).then(data=>{
            console.log(data,"quizdata")
            if(data){
              if(data.error){
                console.log(data.error)
              }
              else{
                setquiz(data)
                console.log(quiz,"hwhe")
              }
            }
          })
    }
    const [refresh, setrefresh] = useState(true)
    useEffect(() => {
        loadQuiz()
    }, [refresh])
    return(
    <React.Fragment>
          <div className="text-center">
            <Row>
                <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        {/* <CardImg top width="100%" src={img2} /> */}
                        <CardBody>
                            
                        </CardBody>
                    </Card>
                </Col>
            </Row>
          </div>
    </React.Fragment>)
}
export default Questions;