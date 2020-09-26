/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import CartModal from './CartModal';
import { Modal } from 'react-bootstrap';
import { isAuthenticated,addItemToCart,loadCart, removeItemFromCart, updateItemInCart } from './helper';

// if(document.domain === 'localhost'){
//   //development
// }
// else{
//   //production
// }

const CourseItem = (props) => {

  var display = {
    display: `inline-block`
  };
  const { user,token } = isAuthenticated()
  const [flag, setflag] = useState(0)
  const [amount, setamount] = useState(0);
  const [sub, setsub] = useState(2)
  const [product, setproduct] = useState([{"name":props.topic,"id":props.subjectid,"count":1,"price":props.price}])
  const [cart, setcart] = useState(loadCart())
    

  const addProductToCart = async () => {
    var i;
    
    if(cart === undefined)
    {
      console.log("pppp",product)
      
      
        addItemToCart(product,()=>{
          console.log("umm idk")
          setcart(loadCart())
        })
        setcart(loadCart())
      
      }
      else
      {
      console.log("pppp",product)
      console.log("sub")
    for(i=0;i<cart.length;i++){
      console.log(i === cart.length)
        if(cart[i][0].name === props.topic){ 
          updateItemInCart(props.topic)
          i=cart.length
          break;
        }
        if(i === cart.length-1){
          console.log("bhkk")
          
          addItemToCart(product)
          break;
        }
    }
  }
    
    
    setshowlogin(true)
}

  const [show, setShow] = useState(false);
  const [showlogin, setshowlogin] = useState(false);

  const handleCloselogin = () => {
    console.log("----k")
    setshowlogin(false)
  };


    return(
        <React.Fragment>
             <div className="col-lg-3 col-sm-6 mb-5" >
    <div className="card p-0 border-primary rounded-0 hover-shadow" style={{overflow: "hidden"}}>
      {/* <img className="card-img-top rounded-0" src={props.image} alt="course thumb" style={{height: "15rem", width: "15rem", alignSelf: "center"}}></img> */}
      <div className="card-body">
        <ul className="list-inline mb-2">
          {/* <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>{props.date}</li> */}
          <li className="list-inline-item"></li>
        </ul>
          <h4 className="card-title">{props.topic}</h4>
{/*         
        <p className="card-text mb-4"> {props.des}</p> */}
        <p className="list-inline-item">Rs.{props.price}</p>
        <hr></hr>
        <a  data-toggle="modal" data-target="#signinModal" className="hvr-bounce-to-top" topic={props.topic} onClick={addProductToCart}>Enroll</a>
      </div>
    </div>
  </div>
      <Modal show={showlogin} onHide={handleCloselogin}>
       <CartModal></CartModal>
      </Modal>
        </React.Fragment>
    )
}

export default CourseItem;