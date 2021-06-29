import { url } from './adapterConfig'
import { store } from '../index'

const createUser = () => {
  const currentUser = store.getState().currentUser
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      username: currentUser.username,
      password: currentUser.password,
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

export { createUser }
