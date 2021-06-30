import React, { Component } from 'react'
import AuthModal from './AuthModal'
import IndexRecipes from '../recipes/IndexRecipes'
import { connect } from 'react-redux'

class MainContainer extends Component {
  render() {
    return (
      <div className="skeleton">
        <h1 className="title ">RecipeBook</h1>
        {this.props.isAuthModalOpen ? <AuthModal /> : <></>}
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

const mapStateToProps = (state) => {
  return {
    isAuthModalOpen: state.ui.isAuthModalOpen,
    isLoggedIn: state.ui.isLoggedIn,
  }
}

export default connect(mapStateToProps)(MainContainer)
