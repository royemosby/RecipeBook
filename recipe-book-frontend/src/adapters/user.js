import { url } from './adapterConfig'
import { store } from '../index'

const createUser = () => {
  const user = store.getState().user
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      username: user.username,
      password: user.password,
      email: user.email,
    }),
  }
  return (dispatch) => {
    dispatch({ type: 'SEND_CREATE_USER' })
    fetch(`${url.users}`, config)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.message) {
          let message = ''
          if (typeof response.message === 'string') {
            message = response.message
          } else {
            for (const field in response.message) {
              message = message.concat(
                // prettier-ignore
                `${field.toUpperCase()}: ${response.message[field].join(' | ')}. `
              )
            }
          }
          dispatch({ type: 'NEW_USER_ERROR', message })
        } else {
          dispatch({ type: 'ADD_USER', response })
        }
      })
  }
}

const authenticate = () => {
  const user = store.getState().user
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      username: user.username,
      password: user.password,
      email: user.email,
    }),
  }
  return (dispatch) => {
    dispatch({ type: 'SEND_CREDENTIALS' })
    fetch(`${url.login}`, config)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.message) {
          let message = ''
          if (typeof response.message === 'string') {
            message = response.message
          } else {
            for (const field in response.message) {
              message = message.concat(
                // prettier-ignore
                `${field.toUpperCase()}: ${response.message[field].join(' | ')}. `
              )
            }
          }
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
