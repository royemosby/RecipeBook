const initialState = {
  id: '',
  username: '',
  password: '',
  email: '',
  token: '',
  message: '',
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
    case 'SEND_CREATE_USER':
    case 'SEND_CREDENTIALS':
      return {
        ...state,
        password: '',
      }
    case 'NEW_USER_ERROR':
    case 'AUTH_ERROR':
      return {
        ...state,
        password: '',
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
    default:
      return state
  }
}

export { user }
