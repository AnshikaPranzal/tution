/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { Modal, Button} from 'react-bootstrap';
import { signup1, cartEmpty, addItemToCart, updateItemInCart, updateUser, findItemInCart, getAUser,decreaseItemInCart } from './helper/index'
import { isAuthenticated,payment,loadCart } from './helper';
import { Input,Table } from 'reactstrap';



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

const CartModal = (props) =>{

    const {user,token} = isAuthenticated()
    const [physics, setphysics] = useState()
    const [chemistry, setchemistry] = useState(0)
    const [maths, setmaths] = useState(0)
    const [biology, setbiology] = useState(0)
    const [name, setname] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [product, setproduct] = useState([])
    const [reload, setreload] = useState(false)
    const [count, setcount] = useState(0)

    var i = 1
    var idk = 0
    useEffect(()=>{
        setproduct(loadCart());
    },[reload]);

    const purchaseCount = ()=>{
        
        getAUser(user._id,token).then(data=>{
            if(data.error){
                console.log(data.error,"_-_")
            }
            else{
                console.log(data,"-_-")
                const physics = findItemInCart("Physics") + data.physics
                const chemistry = findItemInCart("Chemistry") + data.chemistry 
                const maths = findItemInCart("Mathematics") + data.maths
                const biology = findItemInCart("Biology") + data.biology
                
                console.log(physics,"kk")
                updateUser(user._id,token,{physics,chemistry,maths,biology}).then( (data) =>{
                   
                    if(data.error){
                        console.log(data.error)
                    }
                    else{
                        console.log("updated")
                }})
                .catch(console.log("Error in updation"))
            }
        }).catch(err=>console.log(err))
       
       
            }
            
        

    const displayRazorPay = async (amt)=>{
       
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        
        if(!res){
            console.log("fail")
          alert('RazorPay SDK failed to load. Are you online?')
          return
        }
        const data = await payment({"amt":amt});
        console.log("what",data)
        const options = {
          "key": __DEV__?"rzp_test_BauetMNElZ2N7N":'API_NA', 
          "amount": amt, 
          "currency": data.currency,
          "name": "Some Tutions",
          "description": "Thanks for enrolling with the best!",
          "image": "http://localhost:5000/logo.svg",
          "order_id": data.id, 
          "handler": function (response){
              // alert(response.razorpay_payment_id);
              // alert(response.razorpay_order_id);
              
            purchaseCount()
            alert("Congratulations your payment was successful!!")
              
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
     const displaycount = product=>{
         var s=0;
         
         for(i=0;i<product.length;i++){
                s=s+product[i][0].count;
                
         }
         return s*500;
     }


        const signup = () =>(
            <React.Fragment>
                <Modal.Header closeButton>
                        <Modal.Title>
                            <div className="modal-header border-0">
                                <h3>Register</h3>
                            </div>
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body><div className="modal-body">
                        <div className="login">
                            <form action="#" className="row">
                                <div className="col-12">
                                <Table className="no-wrap v-middle" responsive>
                                    <thead>
                                        <tr className="border-0">
                                            <th className="border-0">Subject</th>
                                            <th className="border-0">Months</th>
                                        </tr>
                                    </thead>
                                <tbody>
                                { product.map((prod,index)=>{
                                    var s = prod[0].count
                                    return(
                                        <tr key={index}>
                                        <td>{prod[0].name}</td>
                                        <td><span onClick={()=>{decreaseItemInCart(prod[0].name) ;setreload(!reload)}} style={{cursor: "pointer"}}>-  </span>{s}<span onClick={()=>{updateItemInCart(prod[0].name) ;setreload(!reload)}} style={{cursor: "pointer"}}>  +</span></td>
                                        </tr>
                                    )
                                })}
                                <tr>
                                <th>Total amount to be paid:</th>
                                <td>{displaycount(product)}</td>
                                </tr>
                                
                                </tbody>
                                </Table>
                                </div>
                                
                               
                                
                                <div className="col-12 text-center">
                                    <button type="submit" className="hvr-bounce-to-top" onClick={()=>{displayRazorPay(displaycount(product))}}>Proceed to Payment</button>
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
    export default CartModal;