import React from 'react';
import InputContainer from './';
import { shallow } from 'enzyme';
import orderDosages from '../../utils/orderDosages.js';

describe('InputContainer', () => {
  let wrapper;
  let mockState;

  beforeEach(() => {
    mockState = {
			modality: 'Pre-filter CVVH',
			sodium: 4,
			potassium: 3,
			chloride: 5,
			bicarbonate: 6,
			calcium: 8,
			magnesium: 9,
			phosphorous : 3,
			grossUltraFiltration: 2,
			bloodFlowRate: 2,
			replacementFluidFlowRate: 9,
			saline3Percent: false,
			d5W: false,
			sodiumPhosphate15mmol100ml: false,
			anticoagulation: 'None',
			readyForSubmission: false,
			dosageErrors: ['sodium']
		}

    wrapper = shallow(<InputContainer
						type={'text'} 
						currentInputState={mockState}
						handleInputChange={jest.fn()}
						dosagesToDisplay={orderDosages.replacementFluidDosages}
						radioButtonCategory={null}
					/>);
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});