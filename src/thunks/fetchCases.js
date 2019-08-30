import { isLoading, hasErrored, setCases } from '../Actions';
import { getCases } from '../utils/API.js';

export const fetchCases = () => {

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const caseArray = await getCases()
      if (caseArray) {
        dispatch(isLoading(false))
      }
      dispatch(setCases(caseArray))
    } catch (error) {
      console.log(error)
      dispatch(hasErrored(true))
    }
  }
}