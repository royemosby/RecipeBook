import { store } from '../index'

const url = { base: 'http://localhost:3000' }
url.users = `${url.base}/users`
url.recipes = `${url.base}/recipes`
url.login = `${url.base}/login`

function userToken() {
  return store.getState().user.token
}

function targetRecipe() {
  return store.getState().ui.targetRecipe
}

function user() {
  return store.getState().user
}

function processMessage(responseMessage) {
  let message = ''
  if (typeof responseMessage === 'string') {
    message = responseMessage
  } else {
    for (const field in responseMessage) {
      message = message.concat(
        // prettier-ignore
        `${field.toUpperCase()}: ${responseMessage[field].join(' | ')}. `
      )
    }
  }
  return message
}

export { url, userToken, targetRecipe, processMessage, user }
