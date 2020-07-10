import React from 'react';
import CourseItem from './CourseItem';
import course_pic1  from '../images/courses/physics2.png';
import course_pic2  from '../images/courses/chemistry3.png';
import course_pic3  from '../images/courses/maths.png';



const AllCourseList = () => {
    return(
        <React.Fragment>
              <section className="section">
              <div className='container'>
            <div className="row justify-content-center">
            <CourseItem image={course_pic1} date="02-14-2018" subject="Science" topic="Physics" des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna."></CourseItem>
                <CourseItem image={course_pic2} date="02-14-2018" subject="Science" topic="Chemistry" des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna."></CourseItem>
                <CourseItem image={course_pic3} date="02-14-2018" subject="Science" topic="Mathematics" des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna."></CourseItem>
            </div>
            </div>
            </section>
        </React.Fragment>
    )
}

export default AllCourseList;