import React from 'react';
import { OrdersModal, mapStateToProps, mapDispatchToProps } from './';
import { shallow } from 'enzyme';
import mockOrders from '../../utils/mockOrders';
import defaultState from '../../utils/mockOrders';

describe('OrdersModal', () => {
	let wrapper;
	let mockEvent;
	let expected;

	beforeEach(() => {
		wrapper = shallow(<OrdersModal 
												closeOrdersModal={jest.fn()}
												orders={mockOrders}
												submitOrder={jest.fn()}
												hasErrored={false}
												isLoading={false}
											/>)
		mockEvent = {
			target: {
				name: 'modality',
				value: 'CVVHD'
			},
			preventDefault: jest.fn()
		}
	})

	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	});

	describe('handleStringChange()', () => {
		it('should set state for properties with string value types', () => {
			expect(wrapper.state().modality).toEqual('Pre-filter CVVH')
			wrapper.instance().handleStringChange(mockEvent)
			expect(wrapper.state().modality).toEqual('CVVHD')
		});
	});
	
	describe('handleNumberChange()', () => {
		const mockEvent = {
			target: {
				name: 'sodium',
				value: '4'
			},
			preventDefault: jest.fn()
		}

		it('should set state for properties with number value types', () => {
			expect(wrapper.state().sodium).toEqual(0)
			wrapper.instance().handleNumberChange(mockEvent)
			expect(wrapper.state().sodium).toEqual(4)
		});
	});
	
	describe('toggleSelected()', () => {
		// it('', () => {});
		// it('', () => {});
	});
	
	describe('submitOrder()', () => {
		// it('', () => {});
		// it('', () => {});		
	});

	describe('clearInputs()', () => {
		it('should reset state to default values', () => {
			wrapper.setState({
												modality: 'Pre-filter CVVH',
												sodium: 1,
												potassium: 2,
												chloride: 3,
												bicarbonate: 1,
												calcium: 2,
												magnesium: 3,
												phosphorous : 4,
												grossUltraFiltration: 2,
												bloodFlowRate: 1,
												replacementFluidFlowRate: 7,
												saline3Percent: true,
												d5W: false,
												sodiumPhosphate15mmol100ml: true,
												anticoagulation: 'Citrate'
											})
			expect(wrapper.state().sodium).toEqual(1)
			expect(wrapper.state().anticoagulation).toEqual('Citrate')
			wrapper.instance().clearInputs(mockEvent)
			expect(wrapper.state().sodium).toEqual(0)
			expect(wrapper.state().anticoagulation).toEqual('None')
		});
	});
});

describe('mapStateToProps()', () => {
	it('should return an object with the orders array', () => {
		const mockState = {
			orders: mockOrders,
			testProp: 'testProp'
		}

		const expected = {
			orders: mockOrders
		}

		const mappedProps = mapStateToProps(mockState)
		expect(mappedProps).toEqual(expected)
	});
});

describe('mapDispatchToProps()', () => {
	const mockDispatch = jest.fn()

	it('should map a key of submitOrder', () => {
		const mappedProps = mapDispatchToProps(mockDispatch)
		expect(mappedProps.submitOrder).toBeDefined()
	});

	it('should call dispatch with submitOrder when submitOrder is called', () => {
		const mappedProps = mapDispatchToProps(mockDispatch)
		mappedProps.submitOrder(mockOrders[0])
		expect(mockDispatch).toHaveBeenCalled()
	});
});

// describe('', () => {
// 	it('', () => {});
// 	it('', () => {});
// 	it('', () => {});
// });

// describe('', () => {});