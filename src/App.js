import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from  './Home';
import Procedures from './Procedures';
import Contact from './Contact';
import WidgetShow from './WidgetShow';
import Career from './Career';
import Cosmetic from './Cosmetic';
import Doctors from './Doctors';

function App() {
  const procedures = [
    "Deep Cleaning",
    "Oral Surgery",
    "Root Canal",
    "Crown",
    "Implants",
    "Fillings"
  ];
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Go back to Home</Link> {' '}
          <Link to="/procedures">See our procedures</Link> {' '}
          <Link to="/cosmetic">Cosmetic</Link> {' '}
          <Link to="/contact">Contact us</Link> {' '}
          <Link to="/doctors">Our Doctors</Link> {' '}
          <Link to="/career">Career</Link> {' '}
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/procedures" render={() => <Procedures procedures={procedures} />} />
        <Route path="/cosmetic" component={Cosmetic} />
        <Route path="/contact" component={Contact} />
        <Route path="/doctors" component={Doctors} />
        <Route path="/career" component={Career} />
        <Route path="/widgets/:id" render={(props) => <WidgetShow procedures={procedures}{...props}/> } />
      </div>
    </Router>
    
  );
}

export default App;
