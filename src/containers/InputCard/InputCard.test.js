import React from 'react';
import InputCard from './';
import { shallow } from 'enzyme';
import orderDosages from '../../utils/orderDosages.js';

describe('InputCard', () => {
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

    wrapper = shallow(<InputCard
								type={'text'}
								radioButtonCategory={null}
								currentInput={'sodium'}
								handleInputChange={jest.fn()}
								dosage={'sodium'} 
								dosageErrors={mockState.dosageErrors}
								key={'sodium'}
					/>);
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});