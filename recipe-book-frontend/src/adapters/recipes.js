import { url, userToken, targetRecipe, processMessage } from './adapterConfig'
import { batch } from 'react-redux'

function recipeHeaders() {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${userToken()}`,
  }
}

const createRecipe = () => {
  const config = {
    method: 'POST',
    headers: recipeHeaders(),
    body: JSON.stringify(targetRecipe()),
  }
  return (dispatch) => {
    dispatch({ type: 'SEND_CREATE_RECIPE' })
    fetch(`${url.recipes}`, config)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.message) {
          let message = processMessage(response.message)
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
    headers: recipeHeaders(),
    body: JSON.stringify(targetRecipe()),
  }
  return (dispatch) => {
    dispatch({ type: 'SEND_UPDATE_RECIPE' })
    fetch(`${url.recipes}/${targetRecipe().id}`, config)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.message) {
          let message = processMessage(response.message)
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
    headers: recipeHeaders(),
    body: JSON.stringify(targetRecipe()),
  }
  return (dispatch) => {
    dispatch({ type: 'SEND_DELETE_RECIPE' })
    fetch(`${url.recipes}/${targetRecipe().id}`, config)
      .then((resp) => resp.json())
      .then((response) => {
        let message = processMessage(response.message)
        const recipe = targetRecipe()
        batch(() => {
          dispatch({ type: 'RECIPE_DELETED', message })
          dispatch({ type: 'DELETE_RECIPE', recipe })
        })
      })
  }
}

export { createRecipe, updateRecipe, deleteRecipe }
