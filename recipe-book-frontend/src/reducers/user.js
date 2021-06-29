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
      console.dir(action)
      return {
        ...state,
        requesting: false,
      }
    case 'ADD_USER':
    case 'LOGIN_USER':
      console.dir(action)
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
