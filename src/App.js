import React from 'react';
import './App.css';
import Navbar from './compents/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './compents/pages/Home';
import AboutUs from './compents/pages/AboutUs';
import Enquiry from './compents/pages/Enquiry';
import Gallery from './compents/pages/Gallery';
import Location from './compents/pages/Location';
import Packages from './compents/pages/Packages';
import Bookings from './compents/pages/Booking';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/enquiry' exact component={Enquiry} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/location' exact component={Location} />
          <Route path='/packages' exact component={Packages} />
          <Route path='/bookings' exact component={Bookings} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
