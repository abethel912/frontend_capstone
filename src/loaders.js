// YOUR DEPLOYED API BASE URL
const URL = 'https://be-capstone.onrender.com'

//indexLoader => get all todos for index route
export const indexLoader = async () => {
  const response = await fetch(URL + '/activities/')
  const activities = await response.json()
  return activities
}

//showLoader => get a single todo for Show route
export const showLoader = async ({ params }) => {
  const response = await fetch(URL + `/activities/${params.id}/`)
  const activity = await response.json()
  return activity
}
