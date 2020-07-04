import React from 'react';
import CourseItem from './CourseItem';

const CourseList = () => {
    return(
        <React.Fragment>
            <div className="row justify-content-center">
                <CourseItem image="course_1" date="02-14-2018" subject="Humanities" topic="Photography" des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna."></CourseItem>
                <CourseItem image="course_2" date="02-14-2018" subject="Humanities" topic="Programming" des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna."></CourseItem>
                <CourseItem image="course_3" date="02-14-2018" subject="Humanities" topic="Lifestyle Archives" des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna."></CourseItem>
                <CourseItem image="course_4" date="02-14-2018" subject="Humanities" topic="Freelancing" des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna."></CourseItem>
                <CourseItem image="course_5" date="02-14-2018" subject="Humanities" topic="Brand Designing" des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna."></CourseItem>
                <CourseItem image="course_6" date="02-14-2018" subject="Humanities" topic="Art Design" des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna."></CourseItem>
            </div>
        </React.Fragment>
    )
}

export default CourseList;