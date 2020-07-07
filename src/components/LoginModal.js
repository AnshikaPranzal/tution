/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from './helper'

const LoginModal = () =>{
    const [values,setValues] = useState({
        email:"182@gmail.com",
        password:"blahblah",
        error:"",
        loading: false,
        didRedirect: false
    })
    const {email, password, error, loading, didRedirect} = values;
    const {user} = isAuthenticated();

    const handleChange = name => event => {
        setValues({
            ...values,error: false, [name]: event.target.value
        })
    }

    const loadingMessage = () =>(
        loading && (<div className="row ">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-info" >
                        <h1>Loading...</h1>
                    </div>
                </div>
        </div>)
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

    const onSubmit = event => {
        event.preventDefault();
        setValues({
            ...values,error: false,loading: true
        })
        signin({email,password})
            .then( (data) =>{
                
                if(data.erroris){
                   
                    setValues({
                        ...values,
                        error: data.erroris,
                        loading: false
                    })
                }
                else{
                    authenticate(data,()=>{
                    setValues({
                        ...values,
                        didRedirect: true
                    })
                })
                }
            })
            .catch(console.log("Error in signin"))
    }

    const performRedirect = () => {
        if(didRedirect){
           
            if(user && user.role === 1){
                return <Redirect to="/admin/dashboard"></Redirect>
            }
            else{
                return <Redirect to="/user/dashboard"></Redirect>
            }
        }
        if(isAuthenticated()){
            return <Redirect to="/"></Redirect>
        }
    }
    return(
        <React.Fragment>
            <div className="modal fade show" id="signupModal" tabindex="-1" role="dialog" style={{display: 'block'}}>
    <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content rounded-0 border-0 p-4">
            <div className="modal-header border-0">
                <h3>Login</h3>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form action="#" className="row">
                    <div className="col-12">
                        <input type="text" className="form-control mb-3" id="loginPhone" name="loginPhone" placeholder="Phone"></input>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control mb-3" id="loginName" name="loginName" placeholder="Name"></input>
                    </div>
                    <div className="col-12">
                        <input type="password" className="form-control mb-3" id="loginPassword" name="loginPassword" placeholder="Password"></input>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
        </React.Fragment>
        )
    };
    export default LoginModal;