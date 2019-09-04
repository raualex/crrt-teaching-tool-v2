export const getCases = async () => {

  const response = await fetch('https://crrt-backend.herokuapp.com/api/v1/cases', {
    method: "GET"
  });
  const result = await response.json()

  let cleanedResult = result.map((patientCase) => {
    return cleanImagingObj(patientCase)
  })
  return cleanedResult
}

const cleanImagingObj = (patientCase) => {
  patientCase.imaging = patientCase.imaging.slice(1)
  patientCase.imaging = patientCase.imaging.slice(0, patientCase.imaging.length - 1)
  patientCase.imaging = '[' + patientCase.imaging + ']'
  return patientCase
}