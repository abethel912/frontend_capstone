import { redirect } from 'react-router-dom'

const URL = 'https://be-capstone.onrender.com'

export const createAction = async ({ request }) => {
  const formData = await request.formData()

  const newActivity = {
    name: formData.get('name'),
    img: formData.get('img'),
    state: formData.get('state'),
    activityType: formData.get('activityType'),
    description: formData.get('description'),
    address: formData.get('address')
  }

  await fetch(URL + '/activities/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newActivity)
  })
  return redirect('/')
}

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData()
  const id = params.id
  const updatedActivity = {
    name: formData.get('name'),
    img: formData.get('img'),
    state: formData.get('state'),
    activityType: formData.get('activityType'),
    description: formData.get('description'),
    address: formData.get('address')
  }

  let res = await fetch(URL + `/activities/${id}/`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedActivity)
  })
  console.log(res)
  return redirect(`/${id}`)
}

export const deleteAction = async ({ params }) => {
  const id = params.id
  await fetch(URL + `/activities/${id}/`, {
    method: 'delete'
  })

  return redirect('/')
}

export const loginAction = async ({ request }) => {
  const formData = await request.formData()
  const User = {
    username: formData.get('username'),
    password: formData.get('password')
  }
  fetch(URL + '/auth/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(User)
  })
    .then((response) => response.json())
    //username and token are bundled together
    .then((data) => localStorage.setItem('token', JSON.stringify(data)))
  return redirect('/')
}

export const logoutAction = async () => {
  localStorage.setItem(
    'token',
    JSON.stringify({ token: null, username: 'Adventurer123' })
  )
  console.log('Logout~!')
  return redirect('/')
}

export const registerAction = async ({ request }) => {
  const formData = await request.formData()
  const newUser = {
    username: formData.get('username'),
    password: formData.get('password')
  }
  fetch(URL + '/auth/signup', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
  return redirect('/')
}

