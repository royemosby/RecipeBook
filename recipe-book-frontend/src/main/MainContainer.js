import React, { Component } from 'react'
import AuthModal from './AuthModal'
import IndexRecipes from '../recipes/IndexRecipes'
import { connect } from 'react-redux'
import { authenticate } from '../adapters/user'

class MainContainer extends Component {
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
      <div className="skeleton">
        <h1 className="title ">RecipeBook</h1>
        {this.props.isAuthModalOpen ? (
          <AuthModal
            handleSubmit={this.handleSubmit}
            userInfo={this.state}
            handleChange={this.handleChange}
            handleCancel={this.props.handleCancel}
          />
        ) : (
          <></>
        )}
        {this.props.isLoggedIn ? (
          <IndexRecipes />
        ) : (
          <div className="prez">
            <h2>To get started</h2>
            <p>choose "Register"</p>
            <p>or "Login"</p>
            <p>with username: roymosby, password: password</p>
          </div>
        )}
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

const mapStateToProps = (state) => {
  return {
    isAuthModalOpen: state.ui.isAuthModalOpen,
    isLoggedIn: state.ui.isLoggedIn,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
