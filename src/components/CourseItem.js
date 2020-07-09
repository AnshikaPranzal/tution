import React from 'react';
import { Link } from 'react-router-dom';

const CourseItem = (props) => {
    return(
        <React.Fragment>
             <div className="col-lg-4 col-sm-6 mb-5">
    <div className="card p-0 border-primary rounded-0 hover-shadow" style={{overflow: "hidden"}}>
      <img className="card-img-top rounded-0" src={props.image} alt="course thumb" style={{height: "20rem", width: "20rem", alignSelf: "center"}}></img>
      <div className="card-body">
        <ul className="list-inline mb-2">
          <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>{props.date}</li>
          <li className="list-inline-item">{props.subject}</li>
        </ul>
        <a href="course-single.html">
          <h4 className="card-title">{props.topic}</h4>
        </a>
        <p className="card-text mb-4"> {props.des}</p>
        <a href="course-single.html" className="hvr-bounce-to-top">Enroll</a>
      </div>
    </div>
  </div>
        </React.Fragment>
    )
}

export default CourseItem;