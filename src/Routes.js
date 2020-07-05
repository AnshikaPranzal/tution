import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import Fulllayout from './components/Dashboard/layouts/fulllayout';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import SignupModal from './components/SignupModal';
import LoginModal from './components/LoginModal';

import About from './components/About';
import CoursePage from './components/CoursePage';
import EventPage from './components/EventPage';

function Routes() {
  return (
    
      <BrowserRouter>
          {/* <header className="fixed-top header">
                <TopHeader></TopHeader>
                <Navbar ></Navbar>
          </header> */}
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dashboard" component={Fulllayout} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/course" component={CoursePage} />
            <Route exact path="/event" component={EventPage} />
            <Route exact path="/signup" component={SignupModal} />
            <Route exact path="/login" component={LoginModal} />
            <Route exact path="/register" component={()=> <div>Join Us</div>} />
          </Switch>
        {/* <Footer></Footer> */}
    </BrowserRouter>
   
  );
}

export default Routes;
