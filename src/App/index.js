import React, { Component } from "react";
import "./App.css";
import { Route, withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LandingPage from "../components/LandingPage";
import CaseSelectionModal from "../containers/CaseSelectionModal";
import Simulator from "../containers/Simulator";
import Textbook from "../components/Textbook";
import Calculator from "../components/Calculator";
import ResultsModal from "../containers/ResultsModal";
import { fetchCases } from "../thunks/fetchCases.js";
// import { showInfo } from '../utils/equationsMaster.js';

export class App extends Component {
  componentDidMount = () => {
    this.props.fetchCases();
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <Route exact path="/crrt-teaching-tool-v2/" component={LandingPage} /> */}
          <Route exact path="/select_a_case" component={CaseSelectionModal} />
          <Route exact path="/simulator" component={Simulator} />
          <Route exact path="/textbook" component={Textbook} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/results" component={ResultsModal}/>
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  selectedCase: state.selectedCase
});

export const mapDispatchToProps = dispatch => ({
  fetchCases: () => dispatch(fetchCases())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
