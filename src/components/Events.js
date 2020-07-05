import React from 'react';
import Eitem from './Eitem'
import Event_pic1 from '../images/events/event-1.jpg'
import Event_pic2 from '../images/events/event-2.jpg'
import Event_pic3 from '../images/events/event-3.jpg'
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <React.Fragment>
            <section className="section bg-gray">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="d-flex align-items-center section-title justify-content-between">
                    <h2 className="mb-0 text-nowrap mr-3">Upcoming Events</h2>
                    <div className="border-top w-100 border-primary d-none d-sm-block"></div>
                    <div>
                        <Link to='/event' className="btn btn-sm btn-primary-outline ml-sm-3 d-none d-sm-block">see all</Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row justify-content-center">
                    <Eitem image={Event_pic1} date="18" month="May" location="Delhi, India" des="Lorem ipsum dolor amet, consectetur adipisicing."></Eitem>
                    <Eitem image={Event_pic2} date="03" month="June" location="Delhi, India" des="Lorem ipsum dolor amet, consectetur adipisicing."></Eitem>
                    <Eitem image={Event_pic3} date="20" month="November" location="Delhi, India" des="Lorem ipsum dolor amet, consectetur adipisicing."></Eitem>
                </div>
                <div class="row">
                <div class="col-12 text-center">
                    <Link to='/event' class="btn btn-sm btn-primary-outline d-sm-none d-inline-block">sell all</Link>
                </div>
                </div>
                </div>
                </section>
        </React.Fragment>
    )
}
export default Home;