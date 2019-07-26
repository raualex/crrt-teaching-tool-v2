import React from 'react';
import Calculator from './';
import { shallow } from 'enzyme';

describe('Calculator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calculator />)
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

});
