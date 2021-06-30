function recipes(state = [], action) {
  switch (action.type) {
    case 'ADD_RECIPES':
      return [...state, ...action.recipes]
    case 'LOG_OUT':
      return []
    case 'SEND_CREATE_RECIPE':
      return [...state]
    case 'SEND_UPDATE_RECIPE':
      return [...state]
    case 'CREATE_RECIPE_ERROR':
    case 'UPDATE_RECIPE_ERROR':
      return [...state]
    case 'CREATE_RECIPE':
      return [...state]
    case 'UPDATE_RECIPE':
    default:
      return state
  }
}

export { recipes }
