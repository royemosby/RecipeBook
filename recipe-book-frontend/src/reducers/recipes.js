function recipes(state = [], action) {
  switch (action.type) {
    case 'ADD_RECIPES':
      return [...state, ...action.recipes]
    case 'LOG_OUT':
      return []
    default:
      return state
  }
}

export { recipes }
