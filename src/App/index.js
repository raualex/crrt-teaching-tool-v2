import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from '../components/LandingPage';
import CaseSelectionModal from '../containers/CaseSelectionModal';
import Simulator from '../containers/Simulator';
import Textbook from '../components/Textbook';
import Calculator from '../components/Calculator';
import { fetchCases } from '../thunks/fetchCases.js';

export class App extends Component {

  componentDidMount = () => {
    this.props.fetchCases()
  }

  render() {
    let { selectedCase } = this.props
    let neededComponent;

    if (selectedCase.id === undefined) {
      neededComponent = CaseSelectionModal
    } else {
      neededComponent = Simulator
    }

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path="/simulator" component={neededComponent} />
          <Route exact path="/textbook" component={Textbook} />
          <Route exect path="/calculator" component={Calculator} />
        </Switch>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  selectedCase: state.selectedCase
})

export const mapDispatchToProps = (dispatch) => ({
  fetchCases: () => dispatch(fetchCases())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
