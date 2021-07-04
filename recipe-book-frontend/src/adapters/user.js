import { url, processMessage, user } from './adapterConfig'

const createUser = () => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      username: user().username,
      password: user().password,
      email: user().email,
    }),
  }
  return (dispatch) => {
    dispatch({ type: 'SEND_CREATE_USER' })
    fetch(`${url.users}`, config)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.message) {
          const message = processMessage(response.message)
          dispatch({ type: 'NEW_USER_ERROR', message })
        } else {
          dispatch({ type: 'ADD_USER', response })
        }
      })
  }
}

const authenticate = () => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      username: user().username,
      password: user().password,
      email: user().email,
    }),
  }
  return (dispatch) => {
    dispatch({ type: 'SEND_CREDENTIALS' })
    fetch(`${url.login}`, config)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.message) {
          const message = processMessage(response.message)
          dispatch({ type: 'AUTH_ERROR', message })
        } else {
          const recipes = response.user.recipes
          dispatch({ type: 'ADD_RECIPES', recipes })
          dispatch({ type: 'LOGIN_USER', response })
        }
      })
  }
}

export { createUser, authenticate }
