import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../adapters/user'

class AuthModal extends Component {
  state = {
    username: '',
    password: '',
    email: '',
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  submit = (credentials) => {
    console.log('submitted')
    console.dir(credentials)
    //this.props.addCredentials(this.state)
    //TODO: Change this this.props.submit(this.state)
  }

  render() {
    return (
      <div>
        <h1>AuthModal</h1>
        <form></form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCredentials: (credentials) => {
      dispatch({ type: 'ADD_CREDENTIALS', credentials })
    },
    authenticate: () => dispatch(authenticate()),
  }
}

export default connect(null, mapDispatchToProps)(AuthModal)
