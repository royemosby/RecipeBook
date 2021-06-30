import React, { Component } from 'react'
import UserForm from './components/UserForm'
import { connect } from 'react-redux'
import { createUser } from '../adapters/user'
import { withRouter } from 'react-router-dom'

class NewUser extends Component {
  submit = (credentials) => {
    this.props.addCredentials(credentials)
    this.props.createUser()
  }

  redirectWhenLoggedIn = (props) => {
    if (props.isLoggedIn) {
      props.history.push('/')
    }
  }

  render() {
    return (
      <div className="skeleton">
        <h1>Register for RecipeBook</h1>
        <UserForm submit={this.submit} cancel={this.props.cancel} />
        {this.redirectWhenLoggedIn(this.props)}
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

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewUser))
