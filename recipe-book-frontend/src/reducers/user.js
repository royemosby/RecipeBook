const initialState = {
  id: '',
  username: '',
  password: '',
  email: '',
  token: '',
  message: '',
  isAuthModalOpen: false,
  isLoggedIn: false,
  requesting: false,
}

function user(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CREDENTIALS':
      return {
        ...state,
        username: action.credentials.username,
        password: action.credentials.password,
        email: action.credentials.email,
      }
    case 'OPEN_LOGIN_MODAL':
      return {
        ...state,
        isAuthModalOpen: true,
      }
    case 'CLOSE_LOGIN_MODAL':
      return {
        ...state,
        isAuthModalOpen: false,
      }
    case 'SEND_CREATE_USER':
    case 'SEND_CREDENTIALS':
      return {
        ...state,
        requesting: true,
        password: '',
      }
    case 'NEW_USER_ERROR':
    case 'AUTH_ERROR':
      return {
        ...state,
        password: '',
        requesting: false,
      }
    case 'ADD_USER':
    case 'LOGIN_USER':
      return {
        ...state,
        requesting: false,
        username: action.response.user.username,
        id: action.response.user.id,
        token: action.response.jwt,
        isLoggedIn: true,
        isAuthModalOpen: false,
      }
    case 'LOG_OUT':
      return {
        ...initialState,
      }
    case 'CANCEL_AUTH':
      return {
        ...initialState,
      }
    case 'SEND_CREATE_RECIPE':
    case 'SEND_UPDATE_RECIPE':
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
    case 'CREATE_RECIPE_ERROR':
    case 'UPDATE_RECIPE_ERROR':
      return {
        ...state,
        message: action.response.message,
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

export { user }
