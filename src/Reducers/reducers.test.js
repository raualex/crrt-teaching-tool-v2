import { isLoading, hasErrored } from './general-reducers.js';
import { selectedModal } from './selection-reducers.js';

describe('isLoading reducer', () => {
  it('should return the loading state', () => {
    let expected = true
    let mockAction = {
      type: 'IS_LOADING',
      isLoading: true
    }
    let result = isLoading(false, mockAction)

    expect(result).toEqual(expected)
  });
});

describe('hasErrored reducer', () => {
  it('should return the errored state', () => {
    let expected = true
    let mockAction = {
      type: 'HAS_ERRORED',
      hasErrored: true
    }
    let result = hasErrored(false, mockAction)

    expect(result).toEqual(expected)
  });
});

describe('selectedModal reducer', () => {
  it('should return the selected modal', () => {
    let expected = 'Vitals'
    let mockAction = {
      type: 'SELECTED_MODAL',
      selectedModal: 'Vitals'
    }
    let result = selectedModal('', mockAction)

    expect(result).toEqual(expected)
  });
});