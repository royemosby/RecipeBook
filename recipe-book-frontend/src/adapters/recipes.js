import { url } from './adapterConfig'
import { store } from '../index'

const createRecipe = () => {
  const token = store.getState().user.token
  const recipe = store.getState().ui.targetRecipe

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authenticate: `Bearer ${token}`,
    },
    body: JSON.stringify(recipe),
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
  const token = store.getState().user.token
  const recipe = store.getState().ui.targetRecipe
  const config = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(recipe),
  }
  return (dispatch) => {
    dispatch({ type: 'SEND_UPDATE_RECIPE' })
    fetch(`${url.recipes}/recipe.id`, config)
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
