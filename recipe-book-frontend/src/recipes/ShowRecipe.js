import React, { Component } from 'react'
import { connect } from 'react-redux'

class ShowRecipe extends Component {
  render() {
    return (
      <div>
        <h1>ShowRecipe</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  }
}

export default connect(mapStateToProps)(ShowRecipe)
