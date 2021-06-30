import { url } from './adapterConfig'
import { store } from '../index'

const token = store.getState().user.token

//trailing comma
//prettier-ignore
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authenticate: `Bearer ${token}`
}

const body = {}

//we're going to ignore the need for the body payload for now
const createRecipe = () => {
  config = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  }
  return (dispatch) => {
    dispatch('SEND_CREATE_RECIPE')
    fetch(`${url.recipes}`, config)
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
          dispatch({ type: 'CREATE_RECIPE_ERROR', message })
        } else {
          dispatch({ type: 'CREATE_RECIPE', response })
        }
      })
  }
}

const updateRecipe = () => {
  config = {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify(body),
  }
  return (dispatch) => {
    dispatch('SEND_UPDATE_RECIPE')
    fetch(`${url.recipes}`, config)
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
          dispatch({ type: 'UPDATE_RECIPE_ERROR', message })
        } else {
          dispatch({ type: 'UPDATE_RECIPE', response })
        }
      })
  }
}

const deleteRecipe = () => {}

export { createRecipe, updateRecipe, deleteRecipe }
