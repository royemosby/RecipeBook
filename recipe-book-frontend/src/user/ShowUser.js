import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ShowUser extends Component {
  render() {
    return (
      <div className="skeleton">
        <h1>Username: {this.props.user.username}</h1>
        <h2>Email: {this.props.user.email || 'None found'}</h2>
        <h2>{`${this.props.recipes.length} recipes`}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    recipes: state.recipes,
  }
}

export default connect(mapStateToProps)(ShowUser)
