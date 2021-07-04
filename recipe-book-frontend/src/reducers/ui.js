const initialState = {
  isAuthFormOpen: false,
  requesting: false,
  targetRecipe: {},
  message: '',
  isLoggedIn: false,
}

function ui(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_LOGIN_FORM':
      return {
        ...state,
        isAuthFormOpen: true,
      }
    case 'CLOSE_LOGIN_FORM':
      return {
        ...state,
        isAuthFormOpen: false,
      }
    case 'SEND_CREATE_USER':
    case 'SEND_CREDENTIALS':
      return {
        ...state,
        requesting: true,
      }
    case 'NEW_USER_ERROR':
    case 'AUTH_ERROR':
      return {
        ...state,
        requesting: false,
      }
    case 'ADD_USER':
    case 'LOGIN_USER':
      return {
        ...state,
        requesting: false,
        isLoggedIn: true,
        isAuthFormOpen: false,
      }
    case 'LOG_OUT':
    case 'CANCEL_AUTH':
      return {
        ...initialState,
      }
    case 'CREATE_HOLDER_RECIPE':
      return {
        ...state,
        targetRecipe: { ...action.recipe },
      }
    case 'SEND_CREATE_RECIPE':
    case 'SEND_UPDATE_RECIPE':
    case 'SEND_DELETE_RECIPE':
      return {
        ...state,
        requesting: true,
      }
    case 'CREATE_RECIPE':
    case 'UPDATE_RECIPE':
      return {
        ...state,
        requesting: false,
      }
    case 'RECIPE_DELETED':
      return {
        ...state,
        message: action.message,
        requesting: false,
      }
    case 'CREATE_RECIPE_ERROR':
    case 'UPDATE_RECIPE_ERROR':
      return {
        ...state,
        message: action.message,
        requesting: false,
      }

    case 'DISMISS_ERROR':
      return {
        ...state,
        message: '',
      }
    default:
      return state
  }
}

export { ui }
