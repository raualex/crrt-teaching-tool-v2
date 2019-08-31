import React, { Component } from 'react';
import './CaseSelectionModal.css';
import { connect } from 'react-redux';
import { selectActiveCase } from '../../Actions/case-actions';

export class CaseSelectionModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      caseNumber: undefined
    }
  }

  handleChange = (event) => {
    let { value } = event.target
    this.setState({caseNumber: parseInt(value)})
  }

  handleClick = (event) => {
    let { caseNumber } = this.state
    let { allCases, selectActiveCase, location, history } = this.props
    let selectedCase;

    event.preventDefault()
    selectedCase = allCases.reduce((acc, patientCase) => {
      if (patientCase.id === caseNumber) {
        acc = patientCase
      }
      return acc
    }, {})
    selectActiveCase(selectedCase)
    location.pathname = '/simulator'
    history.push('/simulator')
  }

  render() {
    return(
      <div className='csm-main-container'>
        <h1>Select a Case ID for the Simulator</h1>
        <form>
          <input onChange={this.handleChange}></input>
          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  allCases: state.allCases
})

export const mapDispatchToProps = (dispatch) => ({
  selectActiveCase: (selectedCase) => dispatch(selectActiveCase(selectedCase))
})

export default connect(mapStateToProps, mapDispatchToProps)(CaseSelectionModal)