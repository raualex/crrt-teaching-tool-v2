import React from 'react';
import Simulator from './';
import { shallow } from 'enzyme';

describe('Simulator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Simulator />)
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

});