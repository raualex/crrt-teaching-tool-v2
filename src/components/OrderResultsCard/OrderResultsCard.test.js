import React from 'react';
import OrderResultsCard from './';
import { shallow } from 'enzyme';
import orderDosages from '../../utils/orderDosages.js';

describe('OrderResultsCard', () => {
  let wrapper;
  let mockTimeStamp;
  let mockmessages;

  beforeEach(() => {
    mockTimeStamp = 'Today'
    mockmessages = ['test1', 'test2', 'test3']
    wrapper = shallow(<OrderResultsCard 
                        timeStamp={mockTimeStamp}
                        messages={mockmessages}
                      />);
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});