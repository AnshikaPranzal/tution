import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import Fulllayout from './components/Dashboard/layouts/fulllayout';
import Header from './components/Header';

function Routes() {
  return (
    
      <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={()=> <div>About</div>} />
            <Route exact path="/dashboard" component={Fulllayout} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/register" component={()=> <div>Join Us</div>} />
          </Switch>
        {/* <Footer></Footer> */}
    </BrowserRouter>
   
  );
}

export default Routes;
