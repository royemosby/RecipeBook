import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../adapters/user'

class AuthModal extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('submitted')
    this.props.addCredentials(this.state)
    this.props.authenticate()
  }

  render() {
    return (
      <div>
        <h1>Login to RecipeBook</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={this.password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input type="submit" value="Login to RecipeBook" />
            <button type="button" onClick={this.props.handleCancel}>
              Cancel
            </button>
          </div>
        </form>
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
    handleCancel: () => dispatch({ type: 'CANCEL_AUTH' }),
  }
}

export default connect(null, mapDispatchToProps)(AuthModal)
