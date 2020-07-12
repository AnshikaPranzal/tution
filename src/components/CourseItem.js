/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { isAuthenticated,payment } from './helper';

const loadScript = (src)=>{
  return new Promise(resolve=>{
    const script = document.createElement('script')
    script.src = src
    script.onload = ()=>{
      resolve(true);
    }
    script.onerror = ()=>{
      resolve(false);
    }
    document.body.appendChild(script);
  })
}

const __DEV__ = document.domain === 'localhost'

// if(document.domain === 'localhost'){
//   //development
// }
// else{
//   //production
// }

const CourseItem = (props) => {
  const {user} = isAuthenticated()
  const [name, setname] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  var display = {
    display: `inline-block`
  };

  const displayRazorPay = async ()=>{
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if(!res){
      alert('RazorPay SDK failed to load. Are you online?')
      return
    }
    const data = await payment();
    console.log(data)
    const options = {
      "key": __DEV__?"rzp_test_BauetMNElZ2N7N":'API_NA', 
      "amount": data.amount.toString(), 
      "currency": data.currency,
      "name": "Some Tutions",
      "description": "Thanks for enrolling with the best!",
      "image": "http://localhost:5000/logo.svg",
      "order_id": data.id, 
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "prefill": {
          name,email
      },
      // "notes": {
      //     "address": "Razorpay Corporate Office"
      // },
      // "theme": {
      //     "color": "#F37254"
      // }
  };
  var paymentObject = new window.Razorpay(options);
  paymentObject.open()
  }

    return(
        <React.Fragment>
             <div className="col-lg-3 col-sm-6 mb-5" >
    <div className="card p-0 border-primary rounded-0 hover-shadow" style={{overflow: "hidden"}}>
      <img className="card-img-top rounded-0" src={props.image} alt="course thumb" style={{height: "15rem", width: "15rem", alignSelf: "center"}}></img>
      <div className="card-body">
        <ul className="list-inline mb-2">
          <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>{props.date}</li>
          <li className="list-inline-item">{props.subject}</li>
        </ul>
        <a href="course-single.html">
          <h4 className="card-title">{props.topic}</h4>
        </a>
        <p className="card-text mb-4"> {props.des}</p>
        <a  onClick={displayRazorPay} className="hvr-bounce-to-top">Enroll</a>
      </div>
    </div>
  </div>
        </React.Fragment>
    )
}

export default CourseItem;