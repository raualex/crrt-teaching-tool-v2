import React from 'react';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from '../components/LandingPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </div>
  );
}

export default withRouter(connect(null, null)(App));
