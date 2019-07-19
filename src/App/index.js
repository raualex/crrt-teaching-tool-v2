import React from 'react';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default withRouter(App);
