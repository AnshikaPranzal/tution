import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import Fulllayout from './components/Dashboard/layouts/fulllayout';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import About from './components/About';
import CoursePage from './components/CoursePage';
import EventPage from './components/EventPage';
import NoticePage from './components/NoticePage';
import FulllayoutTeacher from './components/Dashboard/layouts/fulllayout -teacher';



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
            <Route exact path="/payment" component={Fulllayout} />
            <Route exact path="/material" component={Fulllayout} />
            <Route exact path="/dashboard-teacher" component={FulllayoutTeacher} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/course" component={CoursePage} />
            <Route exact path="/event" component={EventPage} />
            <Route exact path='/notice' component={NoticePage}/>
            <Route exact path="/register" component={()=> <div>Join Us</div>} />
          </Switch>
        {/* <Footer></Footer> */}
    </BrowserRouter>
   
  );
}

export default Routes;
