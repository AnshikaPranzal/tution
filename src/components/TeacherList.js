import React from 'react'
import Teacher from './Teacher'
import teacherpic_1 from '../images/teachers/teacher-1.jpg'
import teacherpic_2 from '../images/teachers/teacher-2.jpg'
import teacherpic_3 from '../images/teachers/teacher-3.jpg'

const TeacherList = () => {
    return(
        <React.Fragment>
            <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-12">
                    <h2 className="section-title">Our Teachers</h2>
                    <Teacher name="Jacke Masito" image ={teacherpic_1}></Teacher>
                    <Teacher name="Klark Malik" image ={teacherpic_2}></Teacher>
                    <Teacher name="John Doe" image ={teacherpic_3}></Teacher>
                </div>
                </div>
            </div>
            </section>

        </React.Fragment>
    )
}

export default TeacherList