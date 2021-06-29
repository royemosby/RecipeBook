import React, { Component } from 'react'
import AuthModal from './AuthModal'
import IndexRecipes from '../recipes/IndexRecipes'
import { connect } from 'react-redux'

class MainContainer extends Component {
  render() {
    return (
      <div className="skeleton">
        <h1>MainContainer</h1>
        {this.props.isAuthModalOpen ? <AuthModal /> : <></>}
        {this.props.isLoggedIn ? <IndexRecipes /> : <></>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthModalOpen: state.user.isAuthModalOpen,
    isLoggedIn: state.user.isLoggedIn,
  }
}

export default connect(mapStateToProps)(MainContainer)
