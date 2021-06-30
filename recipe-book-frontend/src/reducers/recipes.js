function recipes(state = [], action) {
  switch (action.type) {
    case 'ADD_RECIPES':
      return [...state, ...action.recipes]
    case 'LOG_OUT':
      return []
    case 'CREATE_RECIPE':
      return [...state, action.response]
    case 'UPDATE_RECIPE':
      const updateTarget = state.findIndex((r) => {
        return r.id === action.response.id
      })
      if (updateTarget >= 0) {
        const prefix = state.slice(0, updateTarget)
        const suffix = state.slice(updateTarget + 1)
        return [...prefix, action.response, ...suffix]
      } else {
        return state
      }
    case 'DELETE_RECIPE':
      const deleteTarget = state.findIndex((r) => {
        return r.id === action.recipe.id
      })
      if (deleteTarget >= 0) {
        const prefix = state.slice(0, deleteTarget)
        const suffix = state.slice(deleteTarget + 1)
        return [...prefix, ...suffix]
      } else {
        return state
      }
    default:
      return state
  }
}

export { recipes }
