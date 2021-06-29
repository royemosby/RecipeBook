import React, { Component } from 'react'
import AuthModal from './AuthModal'
import { connect } from 'react-redux'

class MainContainer extends Component {
  render() {
    return (
      <div className="skeleton">
        <h1>MainContainer</h1>
        {this.props.isAuthModalOpen ? <AuthModal /> : <></>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthModalOpen: state.user.isAuthModalOpen,
  }
}

export default connect(mapStateToProps)(MainContainer)
