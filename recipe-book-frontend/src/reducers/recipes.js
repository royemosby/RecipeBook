function recipes(state = [], action) {
  switch (action.type) {
    case 'ADD_RECIPES':
      return [...state, ...action.recipes]
    case 'LOG_OUT':
      return []
    case 'CREATE_RECIPE':
      return [...state, action.response]
    case 'UPDATE_RECIPE':
      console.log('UPDATE_RECIPE')
      console.dir(action.response)
      console.dir(state)
      const target = state.findIndex((r) => {
        return r.id === action.response.id
      })
      if (target >= 0) {
        const prefix = state.slice(0, target)
        const suffix = state.slice(target + 1)
        return [...prefix, action.response, ...suffix]
      } else {
        return state
      }
    default:
      return state
  }
}

export { recipes }
