import React from 'react';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from '../components/LandingPage';
import Simulator from '../containers/Simulator';
import Textbook from '../components/Textbook';
import Calculator from '../components/Calculator';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path="/simulator" component={Simulator} />
        <Route exact path="/textbook" component={Textbook} />
        <Route exect path="/calculator" component={Calculator} />
      </Switch>
    </div>
  );
}

export default withRouter(connect(null, null)(App));
