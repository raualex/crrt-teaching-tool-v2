import { isLoading, hasErrored } from './';
import { setSelectedModal } from './selection-actions.js';

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