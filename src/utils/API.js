export const getCases = async () => {

  const response = await fetch('https://crrt-backend.herokuapp.com/api/v1/cases', {
    method: "GET"
  });
  const result = await response.json()
  return result
}