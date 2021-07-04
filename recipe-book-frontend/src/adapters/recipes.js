import { url, userToken, targetRecipe } from './adapterConfig'
import { batch } from 'react-redux'

const createRecipe = () => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${userToken()}`,
    },
    body: JSON.stringify(targetRecipe()),
  }
  return (dispatch) => {
    dispatch({ type: 'SEND_CREATE_RECIPE' })
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
                // ugly join
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
  const config = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${userToken()}`,
    },
    body: JSON.stringify(targetRecipe()),
  }
  return (dispatch) => {
    dispatch({ type: 'SEND_UPDATE_RECIPE' })
    fetch(`${url.recipes}/${targetRecipe().id}`, config)
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

const deleteRecipe = () => {
  const config = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${userToken()}`,
    },
    body: JSON.stringify(targetRecipe()),
  }
  return (dispatch) => {
    dispatch({ type: 'SEND_DELETE_RECIPE' })
    fetch(`${url.recipes}/${targetRecipe().id}`, config)
      .then((resp) => resp.json())
      .then((response) => {
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
        const recipe = targetRecipe()
        batch(() => {
          dispatch({ type: 'RECIPE_DELETED', message })
          dispatch({ type: 'DELETE_RECIPE', recipe })
        })
      })
  }
}

export { createRecipe, updateRecipe, deleteRecipe }
