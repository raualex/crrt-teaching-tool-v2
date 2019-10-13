import { isLoading, hasErrored } from './';
import { setSelectedModal } from './selection-actions.js';
import { submitOrder } from './ordersActions.js';

describe('isLoading action', () => {
  it('should return an object with a type of IS_LOADING', () => {
    let mockLoading = true
    let expected = {
      type: 'IS_LOADING',
      isLoading: true
    }
    let result = isLoading(mockLoading)

    expect(result).toEqual(expected)
  });
});

describe('has Errored action', () => {
  it('should return an object with a type of HAS_ERRORED', () => {
    let mockErrored = true
    let expected = {
      type: 'HAS_ERRORED',
      hasErrored: true
    }
    let result = hasErrored(mockErrored)

    expect(result).toEqual(expected)
  });
});

describe('setSelectedModal', () => {
  it('should return an object with a type of SELECTED_MODAL', () => {
    let mockSelectedModal = 'Imaging'
    let expected = {
      type: 'SELECTED_MODAL',
      selectedModal: 'Imaging'
    }
    let result = setSelectedModal(mockSelectedModal)

    expect(result).toEqual(expected)
  });
});

describe('submitOrder action', () => {
  it('should return an object with a type of SUBMIT_ORDER', () => {
    let mockOrder = {
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
                      anticoagulation: 'Citrate',
                      id: 12345
                    }
    let expected = {
      type: 'SUBMIT_ORDER',
      order: mockOrder
    }
    let result = submitOrder(mockOrder)
    expect(result).toEqual(expected)
  });
});