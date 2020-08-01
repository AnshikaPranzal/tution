import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';

import {getAllNotices,isAuthenticated, subclasses, subquizzes} from '../../../../helper/index'
import { useState } from "react";
import { useEffect } from "react";

const Feeds = () => {
    const {user, token} = isAuthenticated();
    const [notice, setNotice] = useState(0);
    const [classes , setClasses] = useState(0);
    const [quiz, setQuiz] = useState(0);
    const loadAllNotice = () => {
        getAllNotices()
        .then(data => {
            if(data){
            setNotice(data.length)
        }else
        {console.log("no notice");}
        })
        .catch(err => console.log(err))
    }
    useEffect(loadAllNotice)

    const loadAllClass = () => {
        subclasses({user_id: user._id})
        .then(data => {
            if(data){
            setClasses(data.length)
        }else
        {console.log("no class");}
        })
        .catch(err => console.log(err))
    }
    useEffect(loadAllClass)

    const loadAllQuiz = () => {
        subquizzes({user_id: user._id})
        .then(data => {
            if(data){
            setQuiz(data.length)
        }else
        {console.log("No Quiz");}
        })
        .catch(err => console.log(err))
    }
    useEffect(loadAllQuiz)
    
    
    return (
        <Card>
            <CardBody>
                <CardTitle>Feeds</CardTitle>
                <div className="feed-widget">
                    <ul className="list-style-none feed-body m-0 pb-3">
                        <li className="feed-item">
                            <div className="feed-icon bg-info"><i className="far fa-bell"></i></div> You have {notice} notices. <span className="ml-auto font-12 text-muted"></span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-icon bg-success"><i className="ti-server"></i></div> Class: {classes}<span className="ml-auto font-12 text-muted"></span>
                        </li>
                        {/* <li className="feed-item">
                            <div className="feed-icon bg-warning"><i className="ti-shopping-cart"></i></div> New order received.<span className="ml-auto font-12 text-muted">31 May</span>
                        </li> */}
                        <li className="feed-item">
                            <div className="feed-icon bg-danger"><i className="ti-user"></i></div> Quiz: {quiz}<span className="ml-auto font-12 text-muted"></span>
                        </li>
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
}

export default Feeds;
