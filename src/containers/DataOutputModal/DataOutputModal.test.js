import React from 'react';
import { DataOutputModal, mapStateToProps } from './';
import { shallow } from 'enzyme';

describe('DataOutputModal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DataOutputModal />)
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

});

describe('mapStateToProps function', () => {
  it('should return an object with the selected output modal', () => {
    const mockState = {
      selectedModal: 'Imaging',
      somethingElse: 'wut?'
    }
    const expected = {
      selectedModal: 'Imaging'
    }
    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  });

});