/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import Fulllayout from './components/Dashboard/layouts/fulllayout';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import About from './components/AboutPage';
import CoursePage from './components/CoursePage';
import EventPage from './components/EventPage';
import NoticePage from './components/NoticePage';
import FulllayoutTeacher from './components/Dashboard/layouts/fulllayout -teacher';
import FulllayoutAdmin from './components/Dashboard/layouts/fulllayout -admin';
import preloader from './images/preload.gif';
import PrivateRoute from './auth-routes/PrivateRoutes';
import TeacherRoute from './auth-routes/TeacherRoutes';





function Routes() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);
    
  })
  return (
    
      <BrowserRouter>
          {/* <header className="fixed-top header">
                <TopHeader></TopHeader>
                <Navbar ></Navbar>
          </header> */}
          {loading?<div className="preloader">
            <img src={preloader} alt="Loading..."></img>
          </div>:
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dashboard" component={Fulllayout} />
            <Route exact path="/payment" component={Fulllayout} />
            <Route exact path="/material" component={Fulllayout} />
            <Route exact path="/settings" component={Fulllayout} />
            <Route exact path="/dashboard-teacher" component={FulllayoutTeacher} />
            <Route exact path="/dashboard-admin" component={FulllayoutAdmin} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/course" component={CoursePage} />
            <Route exact path="/event" component={EventPage} />
            <Route exact path='/notice' component={NoticePage}/>
          </Switch>}
        {/* <Footer></Footer> */}
    </BrowserRouter>
   
  );
}

export default Routes;
