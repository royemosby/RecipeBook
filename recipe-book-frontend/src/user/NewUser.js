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
        <UserForm submit={this.submit} handleCancel={this.handleCancel} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCredentials: (credentials) =>
      dispatch({ type: 'ADD_CREDENTIALS', credentials }),
    createUser: () => dispatch(createUser()),
  }
}

export default connect(null, mapDispatchToProps)(NewUser)
