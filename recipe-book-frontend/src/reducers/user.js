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
    case 'TOGGLE_LOGIN_MODAL':
      return {
        ...state,
        isAuthModalOpen: !state.isAuthModalOpen,
      }
    case 'SEND_CREATE_USER':
      return {
        ...state,
        requesting: true,
        password: '',
      }
    case 'NEW_USER_ERROR':
      console.dir(action)
      return {
        ...state,
        requesting: false,
      }
    case 'ADD_USER':
      console.dir(action)
      return {
        ...state,
        requesting: false,
        token: action.response.jwt,
        id: action.response.user.id,
        isLoggedIn: true,
      }
    case 'LOG_OUT':
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export { user }
