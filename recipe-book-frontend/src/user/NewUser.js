import React, { Component } from 'react'
import UserForm from './components/UserForm'
import { connect } from 'react-redux'
import { createUser } from '../adapters/user'

class NewUser extends Component {
  submit = (credentials) => {
    this.props.addCredentials(credentials)
    this.props.createUser()
  }
  render() {
    return (
      <div className="skeleton">
        <h1>NewUser</h1>
        <UserForm submit={this.submit} cancel={this.props.cancel} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCredentials: (credentials) =>
      dispatch({ type: 'ADD_CREDENTIALS', credentials }),
    createUser: () => dispatch(createUser()),
    cancel: () => dispatch({ type: 'CANCEL_AUTH' }),
  }
}

export default connect(null, mapDispatchToProps)(NewUser)
