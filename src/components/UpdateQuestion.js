/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { signup1, getAQuestion } from './helper/index'

const RegisterModal = (props) =>{
    const [values,setValues] = useState([{
        title:"",
        img:""
    }])

    const handleChange = name => event => {
        setValues({
            ...values,error: false, [name]: event.target.value
        })
    }
    
    const loadQuestion = ()=>{
        getAQuestion(props.id).then(data=>{
            if(data){
                if(data.error){
                    console.log(data.error)
                }
                else{
                    setValues({
                        ...values,error: false, title:data.title, 
                    });
                    console.log(data)
                }
            }
        })
    }

    useEffect(() => {
        loadQuestion()
    })

    const { title,img } = values

    const onSubmit = event => {
        event.preventDefault();
        setValues({
            ...values,error: false
        });
    }

        
        const signup = () =>(
            <React.Fragment>
                <Modal.Header closeButton>
                        <Modal.Title>
                            <div className="modal-header border-0">
                                <h3>Uddate Question</h3>
                            </div>
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body><div className="modal-body">
                        <div className="login">
                            <form action="#" className="row">
                                <div className="col-12">
                                    <input type="file" className="form-control mb-3" id="signupPhone" name="signupPhone" placeholder="Enter Image" onChange={handleChange("img")} value={img}></input>
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control mb-3" id="signupName" name="signupName" placeholder="Enter Question" onChange={handleChange("title")} value={title}></input>
                                </div>
                                
                                <div className="col-12">
                                    <button type="submit" onClick={onSubmit} className="hvr-bounce-to-top">SIGN UP</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </React.Fragment>
        )
    return(
        <React.Fragment>
            {signup()}
            {/* <p class="text-success text-center">j{JSON.stringify(values)}</p> */}
        </React.Fragment>
        )
    };
    export default RegisterModal;