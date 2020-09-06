/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import Fulllayout from './components/Dashboard/layouts/fulllayout';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import About from './components/AboutPage';
import Question from  './components/Question';
import CoursePage from './components/CoursePage';
import ClassRoom from './components/ClassRoom';
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
    }, 200);
    
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
            <Route exact path="/start/quiz/:question" component={Fulllayout} />
            <Route exact path="/quizcompleted" component={Fulllayout} />
            <Route exact path="/dashboard-teacher" component={FulllayoutTeacher} />
            <Route exact path="/view/response/:quiz/:response" component={FulllayoutTeacher} />
            <Route exact path="/quiz/:user" component={FulllayoutTeacher} />
            <Route exact path="/responses/:question" component={FulllayoutTeacher} />
            <Route exact path="/dashboard-admin" component={FulllayoutAdmin} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/course" component={CoursePage} />
            <Route exact path="/event" component={EventPage} />
            <Route exact path='/notice' component={NoticePage}/>
            <Route exact path='/dashboard-teacher/classroom-teacher/:handle' component={ClassRoom}/>{/* !Both Teacher And Student will use Same Route */}
          </Switch>}
        {/* <Footer></Footer> */}
    </BrowserRouter>
   
  );
}

export default Routes;
