import React,{useState,useEffect} from 'react';
import CourseItem from './CourseItem';
import course_pic1  from '../images/courses/physics2.png';
import course_pic2  from '../images/courses/chemistry3.png';
import course_pic3  from '../images/courses/maths.png';

import { isAuthenticated,addItemToCart,loadCart } from './helper';


const AllCourseList = () => {

  const [product, setproduct] = useState()
  const [sub, setsub] = useState()
  const update = ()=>{
    console.log("hi",loadCart())
    if(!loadCart()){
      console.log("in",loadCart())
    setproduct({p:0,c:0,m:0,b:0})
      }
      else{

      console.log("in2",loadCart())
      setproduct(loadCart())

      }
    }
  
  
console.log("jkkkk",product)
    return(
        <React.Fragment>
              <section className="section">
              <div className='container'>
            <div className="row justify-content-center">
            <CourseItem image={course_pic1} date="02-14-2018" product={product} subject="Science" topic="Physics" des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna."></CourseItem>
                <CourseItem image={course_pic2} date="02-14-2018" product={product} subject="Science" topic="Chemistry" des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna."></CourseItem>
                <CourseItem image={course_pic3} date="02-14-2018" product={product} subject="Science" topic="Mathematics" des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna."></CourseItem>
          <CourseItem image={course_pic3} date="02-14-2018" product={product} subject="Science" topic="Biology" des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna."></CourseItem>
            </div>
            </div>
            </section>
        </React.Fragment>
    )
}

export default AllCourseList;