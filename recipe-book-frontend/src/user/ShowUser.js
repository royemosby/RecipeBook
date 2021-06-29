import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class ShowUser extends Component {
  render() {
    return (
      <div className="skeleton">
        {this.redirectWhenLoggedOut(this.props)}
        <h1>Username: {this.props.user.username}</h1>
        <h2>Email: {this.props.user.email || 'None found'}</h2>
        <h2>{`${this.props.recipes.length} recipes`}</h2>
      </div>
    )
  }

  redirectWhenLoggedOut = (props) => {
    if (!props.isLoggedIn) {
      props.history.push('/')
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    recipes: state.recipes,
  }
}

export default connect(mapStateToProps)(withRouter(ShowUser))
