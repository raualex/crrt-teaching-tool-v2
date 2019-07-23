import React from 'react';
import './LandingPage.css';
import { NavLink } from 'react-router-dom';

function LandingPage() {
  return(
    <div className='LandingPage'>
      <h1>CRRT Teaching Tool v.2!!</h1>
      <NavLink to="/simulator">
        CRRT Simulator
      </NavLink>
    </div>
  )
}

export default LandingPage;